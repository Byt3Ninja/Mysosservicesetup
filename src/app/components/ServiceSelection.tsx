import { ArrowLeft, Stethoscope, Ambulance, Activity, FlaskConical, Clock, CheckCircle2, ShoppingCart, Plus } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { motion, AnimatePresence } from 'motion/react';
import type { ServiceType, Hospital } from '../App';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import React from 'react';

interface ServiceSelectionProps {
  hospital: Hospital;
  onServicesConfirm: (services: ServiceType[]) => void;
  onBack: () => void;
}

const services: ServiceType[] = [
  { id: 'er-doctor', category: 'Emergency Services', name: 'ER Doctor', eta: '8-12', price: 500, icon: 'stethoscope' },
  { id: 'er-nurse', category: 'Emergency Services', name: 'ER Nurse', eta: '5-10', price: 300, icon: 'stethoscope' },
  { id: 'bls-ambulance', category: 'Ambulance Services', name: 'BLS Ambulance', eta: '10-15', price: 1000, icon: 'ambulance' },
  { id: 'als-ambulance', category: 'Ambulance Services', name: 'ALS Ambulance', eta: '12-18', price: 1500, icon: 'ambulance' },
  { id: 'portable-ultrasound', category: 'Portable Diagnostic Services', name: 'Portable Ultrasound', eta: '15-25', price: 800, icon: 'activity' },
  { id: 'portable-xray', category: 'Portable Diagnostic Services', name: 'Portable X-Ray', eta: '20-30', price: 1200, icon: 'activity' },
  { id: 'portable-echo', category: 'Portable Diagnostic Services', name: 'Portable Echocardiography (ECHO)', eta: '20-30', price: 1500, icon: 'activity' },
  { id: 'portable-doppler', category: 'Portable Diagnostic Services', name: 'Portable Doppler', eta: '15-25', price: 700, icon: 'activity' },
  { id: 'lab-services', category: 'Laboratory Services', name: 'Laboratory Services', eta: '25-35', price: 400, icon: 'flask' },
];

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'stethoscope': return Stethoscope;
    case 'ambulance': return Ambulance;
    case 'activity': return Activity;
    case 'flask': return FlaskConical;
    default: return Stethoscope;
  }
};

export function ServiceSelection({ hospital, onServicesConfirm, onBack }: ServiceSelectionProps) {
  const { t } = useLanguage();
  const [selectedServices, setSelectedServices] = useState<ServiceType[]>([]);

  const toggleService = (service: ServiceType) => {
    setSelectedServices((prev) => {
      const isSelected = prev.some(s => s.id === service.id);
      return isSelected ? prev.filter(s => s.id !== service.id) : [...prev, service];
    });
  };

  const isServiceSelected = (serviceId: string) => selectedServices.some(s => s.id === serviceId);

  const categorizedServices = services.reduce((acc, service) => {
    if (!acc[service.category]) acc[service.category] = [];
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, ServiceType[]>);

  const totalPrice = selectedServices.reduce((sum, service) => sum + service.price, 0);

  const getTranslatedCategory = (category: string) => {
    const categoryMap: { [key: string]: string } = {
      'Emergency Services': t('emergency.services.cat'),
      'Ambulance Services': t('ambulance.services'),
      'Portable Diagnostic Services': t('portable.diagnostic'),
      'Laboratory Services': t('laboratory.services'),
    };
    return categoryMap[category] || category;
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

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Header - Compact */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-4 py-2.5">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={onBack} className="rounded-full h-9 w-9 hover:bg-gray-100">
              <ArrowLeft className="size-5" />
            </Button>
            <div className="flex-1 min-w-0">
              <h2 className="text-gray-900 text-base truncate">{t('select.emergency.service')}</h2>
              <p className="text-gray-600 text-xs truncate">{hospital.name}</p>
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Services List - Scrollable, compact */}
      <div className="flex-1 overflow-y-auto px-4 pt-3 pb-32 space-y-3">
        {Object.entries(categorizedServices).map(([category, categoryServices], categoryIdx) => (
          <div key={category}>
            {/* Category Header - Compact */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: categoryIdx * 0.05 }}
              className="flex items-center gap-2 mb-2"
            >
              <div className="bg-red-100 rounded-full p-1.5">
                {React.createElement(getIcon(categoryServices[0].icon), { className: 'size-4 text-red-600' })}
              </div>
              <h3 className="text-gray-800 text-sm font-medium">{getTranslatedCategory(category)}</h3>
            </motion.div>

            {/* Services - Compact cards */}
            <div className="space-y-2">
              {categoryServices.map((service) => {
                const isSelected = isServiceSelected(service.id);
                const IconComponent = getIcon(service.icon);

                return (
                  <Card
                    key={service.id}
                    className={`p-3 cursor-pointer transition-all active:scale-98 ${
                      isSelected
                        ? 'border-2 border-red-600 bg-red-50 shadow-md'
                        : 'border border-gray-200 hover:border-gray-300 shadow-sm bg-white'
                    }`}
                    onClick={() => toggleService(service)}
                  >
                    <div className="flex items-center gap-3">
                      {/* Icon */}
                      <div className={`rounded-xl p-2 flex-shrink-0 ${isSelected ? 'bg-red-600' : 'bg-gray-100'}`}>
                        <IconComponent className={`size-5 ${isSelected ? 'text-white' : 'text-gray-600'}`} />
                      </div>

                      {/* Service Info */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-gray-900 text-sm mb-1 truncate">{getTranslatedServiceName(service.id)}</h4>
                        <div className="flex items-center gap-3 text-xs">
                          <div className="flex items-center gap-1 text-gray-600">
                            <Clock className="size-3" />
                            <span>{service.eta} {t('mins')}</span>
                          </div>
                          <div className="text-red-600 font-medium">EGP {service.price}</div>
                        </div>
                      </div>

                      {/* Selection Button */}
                      <div className="flex-shrink-0">
                        {isSelected ? (
                          <div className="bg-red-600 rounded-full p-1">
                            <CheckCircle2 className="size-5 text-white" />
                          </div>
                        ) : (
                          <div className="border-2 border-gray-300 rounded-full p-1">
                            <Plus className="size-5 text-gray-400" />
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Fixed Bottom Summary - Compact */}
      <AnimatePresence>
        {selectedServices.length > 0 && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg"
          >
            {/* Summary - Compact */}
            <div className="px-4 py-2.5 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-red-100 rounded-full p-1.5">
                    <ShoppingCart className="size-4 text-red-600" />
                  </div>
                  <div>
                    <p className="text-gray-900 text-sm font-medium">
                      {selectedServices.length} {selectedServices.length > 1 ? t('services') : t('service.selected')}
                    </p>
                    <p className="text-gray-600 text-xs">{t('total')}: EGP {totalPrice}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-red-600 text-xl font-medium">EGP {totalPrice}</p>
                </div>
              </div>
            </div>

            {/* Action Button - Compact */}
            <div className="px-4 py-3">
              <Button
                onClick={() => onServicesConfirm(selectedServices)}
                className="w-full h-11 bg-red-600 hover:bg-red-700 text-white rounded-xl shadow-md active:scale-98"
              >
                {t('continue.payment')}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Placeholder when no selection */}
      {selectedServices.length === 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3">
          <Button disabled className="w-full h-11 bg-gray-200 text-gray-400 rounded-xl cursor-not-allowed">
            {t('select.emergency.service')}
          </Button>
        </div>
      )}
    </div>
  );
}
