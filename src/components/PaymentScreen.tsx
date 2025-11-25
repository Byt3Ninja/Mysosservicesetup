import { useState } from 'react';
import { ArrowLeft, CreditCard, Banknote, Shield, CheckCircle2, Package } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { motion } from 'motion/react';
import type { ServiceType, Hospital } from '../App';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

interface PaymentScreenProps {
  services: ServiceType[];
  hospital: Hospital;
  onPaymentComplete: () => void;
  onBack: () => void;
}

type PaymentMethod = 'card' | 'cash' | 'insurance';

export function PaymentScreen({ services, hospital, onPaymentComplete, onBack }: PaymentScreenProps) {
  const { t } = useLanguage();
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const servicesTotal = services.reduce((sum, service) => sum + service.price, 0);
  const serviceFee = 20;
  const total = servicesTotal + serviceFee;

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsComplete(true);
      setTimeout(() => {
        onPaymentComplete();
      }, 2000);
    }, 2000);
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

  if (isComplete) {
    return (
      <div className="h-screen flex items-center justify-center p-6 bg-gradient-to-br from-green-50 to-blue-50">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-center">
          <div className="bg-green-100 rounded-full p-5 mx-auto w-fit mb-3">
            <CheckCircle2 className="size-12 text-green-600" />
          </div>
          <h2 className="text-gray-900 mb-1 text-lg">{t('payment.successful')}</h2>
          <p className="text-gray-600 text-sm">{t('connecting.team')}</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-white">
      {/* Header - Compact */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-4 py-2.5">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={onBack} className="rounded-full h-9 w-9">
              <ArrowLeft className="size-5" />
            </Button>
            <div className="flex-1">
              <h2 className="text-gray-900 text-base">{t('payment')}</h2>
              <p className="text-gray-600 text-xs">{t('review.confirm')}</p>
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex-1 overflow-y-auto px-4 pt-3 pb-20 space-y-3">
        {/* Services Summary - Compact */}
        <Card className="p-3 bg-red-50 border-red-200">
          <h3 className="text-gray-800 mb-2 text-sm">{hospital.name}</h3>
          <div className="space-y-1.5">
            {services.map((service) => (
              <div key={service.id} className="flex justify-between items-center text-gray-700 text-sm">
                <div className="flex items-center gap-1.5">
                  <Package className="size-3 text-red-600" />
                  <span className="text-xs">{getTranslatedServiceName(service.id)}</span>
                </div>
                <span className="text-xs">EGP {service.price}</span>
              </div>
            ))}
          </div>

          {/* Pricing Summary - Compact */}
          <div className="pt-2 mt-2 border-t border-red-200 space-y-1">
            <div className="flex justify-between text-gray-700 text-xs">
              <span>{t('services.total')}</span>
              <span>EGP {servicesTotal}</span>
            </div>
            <div className="flex justify-between text-gray-700 text-xs">
              <span>{t('platform.fee')}</span>
              <span>EGP {serviceFee}</span>
            </div>
            <div className="flex justify-between pt-1.5 border-t border-red-200">
              <span className="text-gray-900 text-sm">{t('total')}</span>
              <span className="text-red-600 text-lg font-medium">EGP {total}</span>
            </div>
          </div>
        </Card>

        {/* Payment Methods - Compact */}
        <div>
          <h3 className="text-gray-800 mb-2 text-sm">{t('payment.method')}</h3>
          <div className="space-y-2">
            {/* Credit/Debit Card */}
            <Card
              className={`p-3 cursor-pointer transition-all ${
                selectedMethod === 'card' ? 'border-2 border-red-600 bg-red-50' : 'border border-gray-200'
              }`}
              onClick={() => setSelectedMethod('card')}
            >
              <div className="flex items-center gap-3">
                <div className={`rounded-xl p-2 ${selectedMethod === 'card' ? 'bg-red-600' : 'bg-gray-100'}`}>
                  <CreditCard className={`size-5 ${selectedMethod === 'card' ? 'text-white' : 'text-gray-600'}`} />
                </div>
                <div className="flex-1">
                  <h4 className="text-gray-900 text-sm">{t('credit.debit')}</h4>
                  <p className="text-gray-600 text-xs">{t('card.types')}</p>
                </div>
                <div className={`size-5 rounded-full border-2 flex items-center justify-center ${
                  selectedMethod === 'card' ? 'border-red-600 bg-red-600' : 'border-gray-300'
                }`}>
                  {selectedMethod === 'card' && <CheckCircle2 className="size-4 text-white" />}
                </div>
              </div>
            </Card>

            {/* Cash */}
            <Card
              className={`p-3 cursor-pointer transition-all ${
                selectedMethod === 'cash' ? 'border-2 border-red-600 bg-red-50' : 'border border-gray-200'
              }`}
              onClick={() => setSelectedMethod('cash')}
            >
              <div className="flex items-center gap-3">
                <div className={`rounded-xl p-2 ${selectedMethod === 'cash' ? 'bg-red-600' : 'bg-gray-100'}`}>
                  <Banknote className={`size-5 ${selectedMethod === 'cash' ? 'text-white' : 'text-gray-600'}`} />
                </div>
                <div className="flex-1">
                  <h4 className="text-gray-900 text-sm">{t('cash')}</h4>
                  <p className="text-gray-600 text-xs">{t('pay.arrival')}</p>
                </div>
                <div className={`size-5 rounded-full border-2 flex items-center justify-center ${
                  selectedMethod === 'cash' ? 'border-red-600 bg-red-600' : 'border-gray-300'
                }`}>
                  {selectedMethod === 'cash' && <CheckCircle2 className="size-4 text-white" />}
                </div>
              </div>
            </Card>

            {/* Insurance */}
            <Card
              className={`p-3 cursor-pointer transition-all ${
                selectedMethod === 'insurance' ? 'border-2 border-red-600 bg-red-50' : 'border border-gray-200'
              }`}
              onClick={() => setSelectedMethod('insurance')}
            >
              <div className="flex items-center gap-3">
                <div className={`rounded-xl p-2 ${selectedMethod === 'insurance' ? 'bg-red-600' : 'bg-gray-100'}`}>
                  <Shield className={`size-5 ${selectedMethod === 'insurance' ? 'text-white' : 'text-gray-600'}`} />
                </div>
                <div className="flex-1">
                  <h4 className="text-gray-900 text-sm">{t('insurance')}</h4>
                  <p className="text-gray-600 text-xs">{t('health.insurance')}</p>
                </div>
                <div className={`size-5 rounded-full border-2 flex items-center justify-center ${
                  selectedMethod === 'insurance' ? 'border-red-600 bg-red-600' : 'border-gray-300'
                }`}>
                  {selectedMethod === 'insurance' && <CheckCircle2 className="size-4 text-white" />}
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Warning - Compact */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-2.5">
          <p className="text-yellow-800 text-xs">{t('payment.warning')}</p>
        </div>
      </motion.div>

      {/* Payment Button - Fixed */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-lg">
        <Button
          onClick={handlePayment}
          disabled={isProcessing}
          className="w-full h-12 bg-red-600 hover:bg-red-700 text-white rounded-xl"
        >
          {isProcessing ? (
            <div className="flex items-center gap-2">
              <div className="size-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              {t('processing.payment')}
            </div>
          ) : (
            `${t('confirm.pay')} EGP ${total}`
          )}
        </Button>
      </div>
    </div>
  );
}
