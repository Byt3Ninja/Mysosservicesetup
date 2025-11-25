import { AlertCircle, Shield, Clock, Phone, Package, ChevronRight, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';
import type { User, EmergencyRequest } from '../App';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import appLogo from 'figma:asset/bb5b37bda783ba021845fb1b2c4aa7a6ef0ca067.png';

interface LandingScreenProps {
  user: User;
  onSOSClick: () => void;
  activeOrder: EmergencyRequest | null;
  orderHistory: EmergencyRequest[];
  onViewOrder: (order: EmergencyRequest) => void;
}

export function LandingScreen({ user, onSOSClick, activeOrder, orderHistory, onViewOrder }: LandingScreenProps) {
  const { t } = useLanguage();
  
  const getStatusColor = (status: EmergencyRequest['status']) => {
    switch (status) {
      case 'requested': return 'bg-yellow-500';
      case 'accepted': return 'bg-blue-500';
      case 'on-the-way': return 'bg-green-500';
      case 'arrived': return 'bg-purple-500';
      case 'completed': return 'bg-gray-500';
      case 'cancelled': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: EmergencyRequest['status']) => {
    switch (status) {
      case 'requested': return t('finding.team');
      case 'accepted': return t('team.assigned');
      case 'on-the-way': return t('team.on.way');
      case 'arrived': return t('team.arrived');
      case 'completed': return t('order.completed');
      case 'cancelled': return t('order.cancelled');
      default: return status;
    }
  };

  const getTranslatedServiceName = (id: string) => {
    const serviceMap: { [key: string]: string } = {
      'er-doctor': t('er.doctor'), 'er-nurse': t('er.nurse'),
      'bls-ambulance': t('bls.ambulance'), 'als-ambulance': t('als.ambulance'),
      'portable-ultrasound': t('portable.ultrasound'), 'portable-xray': t('portable.xray'),
      'portable-echo': t('portable.echo'), 'portable-doppler': t('portable.doppler'),
      'lab-services': t('lab.services'),
    };
    return serviceMap[id] || id;
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date(date));
  };
  
  return (
    <div className="h-screen flex flex-col p-4 bg-gradient-to-br from-red-50 to-orange-50">
      {/* Header - Compact */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <motion.img 
            src={appLogo} 
            alt="MySOS Logo" 
            className="h-10 w-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          />
          <p className="text-gray-600 text-sm">{t('welcome')}, {user.firstName}!</p>
        </div>
        <LanguageSwitcher />
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto space-y-4 pb-4">
        {/* Active Order Banner */}
        {activeOrder && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card 
              className="p-3 bg-gradient-to-r from-red-600 to-red-700 border-0 cursor-pointer active:scale-98 transition-transform"
              onClick={() => onViewOrder(activeOrder)}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-1.5">
                    <Package className="size-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{t('active.order')}</p>
                    <p className="text-white/90 text-xs">{activeOrder.orderId}</p>
                  </div>
                </div>
                <Badge className={`${getStatusColor(activeOrder.status)} text-white text-xs`}>
                  {getStatusText(activeOrder.status)}
                </Badge>
              </div>
              <div className="flex items-center justify-between text-white/90 text-xs">
                <span>{activeOrder.services.length} {activeOrder.services.length > 1 ? t('services') : t('service.selected')}</span>
                <ChevronRight className="size-4" />
              </div>
            </Card>
          </motion.div>
        )}

        {/* SOS Button - Centered */}
        <div className="flex flex-col items-center justify-center py-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="relative"
          >
            {/* Pulsing rings */}
            <motion.div
              className="absolute inset-0 rounded-full bg-red-600/20"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
            <motion.div
              className="absolute inset-0 rounded-full bg-red-600/20"
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.1, 0.3] }}
              transition={{ repeat: Infinity, duration: 2, delay: 0.3 }}
            />
            
            <Button
              onClick={onSOSClick}
              className="relative w-48 h-48 rounded-full bg-gradient-to-br from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 active:scale-95 shadow-2xl border-4 border-white transition-transform duration-200"
            >
              <div className="flex flex-col items-center">
                <AlertCircle className="size-14 text-white mb-2 drop-shadow-lg" strokeWidth={2.5} />
                <span className="text-white text-3xl tracking-wider drop-shadow-lg">{t('sos')}</span>
                <span className="text-white/90 text-xs mt-1 drop-shadow">{t('tap.emergency')}</span>
              </div>
            </Button>
          </motion.div>
        </div>

        {/* Order History */}
        {orderHistory.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-gray-800 mb-2 text-sm">{t('order.history')}</h3>
            <div className="space-y-2">
              {orderHistory.slice(0, 5).map((order) => (
                <Card
                  key={order.orderId}
                  className="p-3 bg-white border border-gray-200 cursor-pointer hover:border-red-300 active:scale-98 transition-all"
                  onClick={() => onViewOrder(order)}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-gray-900 text-sm font-medium">{order.orderId}</p>
                        <Badge className={`${getStatusColor(order.status)} text-white text-xs`}>
                          {getStatusText(order.status)}
                        </Badge>
                      </div>
                      <p className="text-gray-600 text-xs">{formatDate(order.timestamp)}</p>
                    </div>
                    <ChevronRight className="size-4 text-gray-400" />
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <MapPin className="size-3" />
                    <span className="truncate">{order.destinationAddress.street}</span>
                  </div>
                  <div className="flex items-center justify-between mt-2 text-xs">
                    <span className="text-gray-600">
                      {order.services.length} {order.services.length > 1 ? t('services') : t('service.selected')}
                    </span>
                    <span className="text-red-600 font-medium">
                      EGP {order.services.reduce((sum, s) => sum + s.price, 0)}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        )}

        {/* Feature Cards - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 active:scale-95 transition-transform">
              <div className="bg-red-100 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">
                <Clock className="size-5 text-red-600" />
              </div>
              <p className="text-gray-800 text-center text-sm">{t('fast.response')}</p>
              <p className="text-gray-500 text-xs text-center mt-0.5">8-12 {t('mins')}</p>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 active:scale-95 transition-transform">
              <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">
                <Phone className="size-5 text-green-600" />
              </div>
              <p className="text-gray-800 text-center text-sm">{t('24.7.available')}</p>
              <p className="text-gray-500 text-xs text-center mt-0.5">{t('emergency.hotline')}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Emergency Hotline - Fixed at bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-3"
      >
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-4 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/90 text-xs mb-0.5">{t('emergency.hotline')}</p>
              <p className="text-white text-2xl tracking-wider">12345</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
              <Phone className="size-6 text-white" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}