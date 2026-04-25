import { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Navigation, Building2, Package, CheckCircle, AlertCircle, Loader, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';
import type { EmergencyRequest } from '../App';
import { useLanguage } from '../contexts/LanguageContext';

interface TrackingScreenProps {
  request: EmergencyRequest;
  onCancel: () => void;
  onBackToHome: () => void;
  onOpenChat?: () => void;
}

export function TrackingScreen({ request, onCancel, onBackToHome, onOpenChat }: TrackingScreenProps) {
  const { t, isRTL } = useLanguage();
  const [currentETA, setCurrentETA] = useState(request.eta);
  const [routeProgress, setRouteProgress] = useState(0); // 0 to 100 along the route
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCurrentETA((prev) => Math.max(0, prev - 1)), 6000);
    const progressInterval = setInterval(() => setProgress((prev) => Math.min(100, prev + 2)), 1000);
    // Move along route
    const routeInterval = setInterval(() => setRouteProgress((prev) => Math.min(100, prev + 1)), 300);
    
    return () => { 
      clearInterval(interval); 
      clearInterval(progressInterval); 
      clearInterval(routeInterval);
    };
  }, []);

  const getStatusInfo = (status: EmergencyRequest['status']) => {
    switch (status) {
      case 'requested': return { text: t('finding.team'), color: 'bg-yellow-500', icon: Loader, description: t('searching.team') };
      case 'accepted': return { text: t('team.assigned'), color: 'bg-blue-500', icon: CheckCircle, description: t('team.accepted') };
      case 'on-the-way': return { text: t('team.on.way'), color: 'bg-green-500', icon: Navigation, description: t('team.heading') };
      case 'arrived': return { text: t('team.arrived'), color: 'bg-purple-500', icon: CheckCircle, description: t('team.arrived.location') };
      case 'in_progress': return { text: isRTL ? 'الخدمة قيد التنفيذ' : 'Service In Progress', color: 'bg-indigo-500', icon: Package, description: isRTL ? 'الفريق يقدم الخدمة الآن' : 'Team is providing service now' };
      default: return { text: 'Unknown', color: 'bg-gray-500', icon: AlertCircle, description: '' };
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

  const statusInfo = getStatusInfo(request.status);
  const StatusIcon = statusInfo.icon;

  // Calculate team position along the route path
  const getTeamPosition = () => {
    const progress = routeProgress / 100;
    // Route from hospital (80, 30) to destination (50, 50) via curved path
    const startX = 80;
    const startY = 30;
    const endX = 50;
    const endY = 50;
    const controlX = 65;
    const controlY = 20;
    
    // Quadratic bezier curve calculation
    const t = progress;
    const x = Math.pow(1 - t, 2) * startX + 2 * (1 - t) * t * controlX + Math.pow(t, 2) * endX;
    const y = Math.pow(1 - t, 2) * startY + 2 * (1 - t) * t * controlY + Math.pow(t, 2) * endY;
    
    return { x, y };
  };

  const teamPos = getTeamPosition();
  const distance = ((100 - routeProgress) / 100) * request.hospital.distance;

  // Cairo streets for realistic map
  const cairoStreets = [
    { x1: 10, y1: 50, x2: 90, y2: 50 },
    { x1: 30, y1: 10, x2: 30, y2: 90 },
    { x1: 50, y1: 20, x2: 50, y2: 80 },
    { x1: 20, y1: 30, x2: 80, y2: 70 },
    { x1: 15, y1: 60, x2: 85, y2: 40 },
  ];

  return (
    <div className="h-screen flex flex-col bg-white">
      {/* Realistic Cairo Map with Route */}
      <div className="h-[30vh] relative bg-[#E8E4D9] overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Map background areas */}
          <rect x="0" y="0" width="25" height="25" fill="#D4CDB7" opacity="0.3" />
          <rect x="25" y="25" width="30" height="30" fill="#C8C2AB" opacity="0.3" />
          <rect x="60" y="10" width="35" height="40" fill="#D4CDB7" opacity="0.3" />
          <rect x="10" y="60" width="40" height="35" fill="#C8C2AB" opacity="0.3" />
          <rect x="55" y="55" width="40" height="40" fill="#D4CDB7" opacity="0.3" />
          
          {/* Nile River */}
          <path
            d="M 15 20 Q 25 35, 20 50 T 25 80"
            fill="none"
            stroke="#8BBDD9"
            strokeWidth="3"
            opacity="0.4"
          />
          
          {/* Cairo Streets */}
          {cairoStreets.map((street, idx) => (
            <line
              key={idx}
              x1={street.x1}
              y1={street.y1}
              x2={street.x2}
              y2={street.y2}
              stroke="#A89968"
              strokeWidth="0.8"
              opacity="0.6"
            />
          ))}
          
          {/* Street grid */}
          {Array.from({ length: 10 }).map((_, i) => (
            <g key={i}>
              <line x1={i * 10} y1="0" x2={i * 10} y2="100" stroke="#BDB8A0" strokeWidth="0.3" opacity="0.3" />
              <line x1="0" y1={i * 10} x2="100" y2={i * 10} stroke="#BDB8A0" strokeWidth="0.3" opacity="0.3" />
            </g>
          ))}
          
          {/* Route path from hospital to destination */}
          <path
            d="M 80 30 Q 65 20, 50 50"
            fill="none"
            stroke="#93C5FD"
            strokeWidth="1.5"
            strokeDasharray="3,2"
            opacity="0.6"
          />
          
          {/* Animated route progress */}
          <motion.path
            d="M 80 30 Q 65 20, 50 50"
            fill="none"
            stroke="#EF4444"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="100"
            initial={{ strokeDashoffset: 100 }}
            animate={{ strokeDashoffset: 100 - routeProgress }}
            transition={{ duration: 0.3 }}
            opacity="0.8"
          />
          
          {/* Hospital marker (start) */}
          <g transform="translate(80, 30)">
            <circle cx="0" cy="0" r="3" fill="#DC2626" opacity="0.3" />
            <circle cx="0" cy="0" r="2" fill="#DC2626" stroke="white" strokeWidth="0.5" />
          </g>
          
          {/* Destination marker (end - your location) */}
          <g transform="translate(50, 50)">
            <motion.circle
              cx="0"
              cy="0"
              r="4"
              fill="#3B82F6"
              opacity="0.3"
              animate={{ r: [3, 5, 3] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
            <circle cx="0" cy="0" r="2.5" fill="#3B82F6" stroke="white" strokeWidth="0.6" />
          </g>
        </svg>

        {/* Team marker - Moving along route */}
        <motion.div
          className="absolute z-20"
          style={{
            top: `${teamPos.y}%`,
            left: `${teamPos.x}%`,
          }}
          initial={{ x: '-50%', y: '-50%' }}
        >
          <div className="relative">
            {/* Pulsing ring */}
            <motion.div
              className="absolute inset-0 bg-red-600 rounded-full"
              animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
            {/* Ambulance icon */}
            <div className="relative bg-red-600 rounded-full p-2 border-2 border-white shadow-lg">
              <Navigation className="size-4 text-white" style={{ transform: 'rotate(225deg)' }} />
            </div>
          </div>
        </motion.div>

        {/* Distance Badge */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full shadow-md">
          <p className="text-gray-700 text-xs font-medium">{distance.toFixed(1)} {t('km')} {t('away')}</p>
        </div>

        {/* Status Badge */}
        <div className={`absolute bottom-3 left-1/2 -translate-x-1/2 z-20 ${statusInfo.color} px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5`}>
          <StatusIcon className="size-4 text-white" />
          <span className="text-white text-xs font-medium">{statusInfo.text}</span>
        </div>

        {/* Emergency Call and Chat Buttons */}
        <div className="absolute top-3 right-3 z-20 flex gap-2">
          <Button
            onClick={onOpenChat}
            className="rounded-full h-10 w-10 bg-blue-600 hover:bg-blue-700 shadow-lg"
          >
            <MessageCircle className="size-5 text-white" />
          </Button>
          <Button className="rounded-full h-10 w-10 bg-green-600 hover:bg-green-700 shadow-lg">
            <Phone className="size-5 text-white" />
          </Button>
        </div>

        {/* Map Labels */}
        <div className="absolute top-[25%] left-[75%] z-10">
          <p className="text-xs text-gray-600 opacity-60">{request.hospital.name}</p>
        </div>
        <div className="absolute bottom-[45%] left-[45%] z-10">
          <p className="text-xs text-blue-700 opacity-70 font-medium">{t('your.location')}</p>
        </div>
        <div className="absolute top-[20%] left-[30%] z-5">
          <p className="text-xs text-gray-600 opacity-40">شارع رمسيس</p>
        </div>
        <div className="absolute bottom-[35%] right-[25%] z-5">
          <p className="text-xs text-gray-600 opacity-40">ميدان التحرير</p>
        </div>
      </div>

      {/* Info Section - Scrollable, Compact */}
      <div className="flex-1 overflow-y-auto bg-gray-50 p-4 pb-32 space-y-3">
        {/* Progress Bar - Compact */}
        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <span className="text-gray-600">{t('delivery.progress')}</span>
            <span className="text-red-600">{Math.round(routeProgress)}%</span>
          </div>
          <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-red-600 to-red-400" 
              style={{ width: `${routeProgress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Order ID - Compact */}
        <div className="text-center py-2 border-b border-gray-200">
          <p className="text-gray-600 text-xs">{t('order.id')}</p>
          <p className="text-gray-900 text-lg tracking-wider">{request.orderId}</p>
        </div>

        {/* Services - Compact */}
        <div className="space-y-1.5">
          <h3 className="text-gray-800 text-sm flex items-center gap-1.5">
            <Package className="size-4 text-red-600" />
            {t('emergency.services.cat')}
          </h3>
          <Card className="p-2.5 bg-red-50 border-red-200">
            {request.services.length > 1 ? (
              <div className="space-y-1.5">
                {request.services.map((service) => (
                  <div key={service.id} className="flex items-center justify-between text-xs">
                    <p className="text-gray-900">{getTranslatedServiceName(service.id)}</p>
                    <p className="text-gray-600">EGP {service.price}</p>
                  </div>
                ))}
                <div className="pt-1.5 border-t border-red-300 flex justify-between text-sm">
                  <p className="text-gray-900">{t('total')}</p>
                  <p className="text-red-600">EGP {request.services.reduce((sum, s) => sum + s.price, 0)}</p>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between text-sm">
                <p className="text-gray-900">{getTranslatedServiceName(request.services[0].id)}</p>
                <p className="text-red-600">EGP {request.services[0].price}</p>
              </div>
            )}
          </Card>
        </div>

        {/* Location Info - Compact */}
        <div className="space-y-2 text-sm">
          <div className="flex items-start gap-2">
            <Building2 className="size-4 text-gray-500 mt-0.5" />
            <div className="flex-1">
              <p className="text-gray-600 text-xs">{t('hospital')}</p>
              <p className="text-gray-900 text-sm">{request.hospital.name}</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="size-4 text-gray-500 mt-0.5" />
            <div className="flex-1">
              <p className="text-gray-600 text-xs">{t('destination')}</p>
              <p className="text-gray-900 text-sm">{request.destinationAddress.street}</p>
              <p className="text-gray-600 text-xs">القاهرة، مصر</p>
            </div>
          </div>
        </div>

        {/* ETA and Distance - Compact */}
        <div className="grid grid-cols-2 gap-2">
          <Card className="p-3 bg-gradient-to-br from-red-50 to-red-100 border-red-200">
            <div className="flex flex-col items-center text-center gap-1">
              <Clock className="size-7 text-red-600" />
              <div>
                <p className="text-gray-600 text-xs">{t('arriving.in')}</p>
                <motion.p key={currentETA} initial={{ scale: 1.2 }} animate={{ scale: 1 }} className="text-red-600 text-xl">
                  {currentETA} {t('min')}
                </motion.p>
              </div>
            </div>
          </Card>
          <Card className="p-3 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <div className="flex flex-col items-center text-center gap-1">
              <Navigation className="size-7 text-blue-600" />
              <div>
                <p className="text-gray-600 text-xs">{t('distance')}</p>
                <p className="text-blue-600 text-xl">{distance.toFixed(1)} {t('km')}</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg space-y-2">
        <Button variant="outline" className="w-full h-11 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-xl" onClick={onBackToHome}>
          {t('back.to.home')}
        </Button>
        <Button variant="outline" className="w-full h-11 border-2 border-red-300 text-red-600 hover:bg-red-50 rounded-xl" onClick={onCancel}>
          {t('cancel.request')}
        </Button>
      </div>
    </div>
  );
}