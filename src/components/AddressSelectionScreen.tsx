import { useState } from 'react';
import { ArrowLeft, MapPin, Home, User, Plus, Navigation2, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';
import type { Address } from '../App';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

interface AddressSelectionScreenProps {
  onAddressConfirm: (address: Address) => void;
  onBack: () => void;
  onAddNewAddress?: () => void;
}

const addresses: Address[] = [
  {
    id: 'current',
    label: 'Current Location',
    name: 'My Location',
    street: 'Nasr City, Cairo',
    city: 'Cairo, Egypt',
    isCurrent: true,
  },
  {
    id: 'home',
    label: 'Home',
    name: "Mohamed's Home",
    street: '456 Oak Avenue',
    city: 'San Francisco, CA 94103',
  },
  {
    id: 'mom',
    label: 'Mom',
    name: "Mother's House",
    street: '789 Pine Street',
    city: 'San Francisco, CA 94104',
  },
  {
    id: 'dad',
    label: 'Dad',
    name: "Father's House",
    street: '321 Elm Drive',
    city: 'San Francisco, CA 94105',
  },
];

export function AddressSelectionScreen({ onAddressConfirm, onBack, onAddNewAddress }: AddressSelectionScreenProps) {
  const { t } = useLanguage();
  const [selectedAddress, setSelectedAddress] = useState<Address>(addresses[0]);

  const getIcon = (address: Address) => {
    if (address.isCurrent) return Navigation2;
    if (address.label === 'Home') return Home;
    return User;
  };

  const getTranslatedLabel = (label: string) => {
    const labelMap: { [key: string]: string } = {
      'Current Location': t('current.location'),
      'Home': t('home'),
      'Mom': t('mom'),
      'Dad': t('dad'),
    };
    return labelMap[label] || label;
  };

  const getTranslatedName = (label: string, name: string) => {
    if (label === 'Current Location') return t('my.location');
    return name;
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Header - Compact */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-4 py-3">
          <div className="flex items-center gap-3 mb-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={onBack}
              className="rounded-full h-10 w-10 hover:bg-gray-100 active:scale-95 transition-transform"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <div className="flex-1 min-w-0">
              <h2 className="text-gray-900 text-lg truncate">{t('emergency.location')}</h2>
              <p className="text-gray-600 text-sm truncate">{t('where.need.help')}</p>
            </div>
            <LanguageSwitcher />
          </div>
          {/* Alert Banner - Compact */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-2.5">
            <p className="text-red-700 text-center text-sm">🚨 {t('team.arrive')}</p>
          </div>
        </div>
      </div>

      {/* Address List - Scrollable with compact cards */}
      <div className="flex-1 overflow-y-auto px-4 pt-3 pb-20 space-y-2.5">
        {addresses.map((address, idx) => {
          const Icon = getIcon(address);
          const isSelected = selectedAddress.id === address.id;

          return (
            <motion.div
              key={address.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <Card
                className={`p-3.5 cursor-pointer transition-all active:scale-98 ${
                  isSelected
                    ? 'border-2 border-red-600 bg-red-50 shadow-md ring-2 ring-red-100'
                    : 'border border-gray-200 hover:border-gray-300 shadow-sm bg-white'
                }`}
                onClick={() => setSelectedAddress(address)}
              >
                <div className="flex items-start gap-3">
                  {/* Icon */}
                  <div className={`rounded-xl p-2.5 flex-shrink-0 ${
                    isSelected ? 'bg-red-600' : 'bg-gray-100'
                  }`}>
                    <Icon className={`size-5 ${isSelected ? 'text-white' : 'text-gray-600'}`} />
                  </div>
                  
                  {/* Address Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-gray-900">{getTranslatedLabel(address.label)}</h3>
                      {address.isCurrent && (
                        <Badge className="bg-blue-500 text-white text-xs px-1.5 py-0.5">{t('live')}</Badge>
                      )}
                    </div>
                    <p className="text-gray-700 text-sm mb-1">{getTranslatedName(address.label, address.name)}</p>
                    <div className="flex items-start gap-1.5 text-gray-600">
                      <MapPin className="size-4 mt-0.5 flex-shrink-0 text-gray-400" />
                      <div className="text-xs">
                        <p>{address.street}</p>
                        <p className="text-gray-500">{address.city}</p>
                      </div>
                    </div>
                  </div>

                  {/* Selection Indicator */}
                  <div className="flex-shrink-0">
                    {isSelected ? (
                      <div className="bg-red-600 rounded-full p-0.5">
                        <CheckCircle2 className="size-5 text-white" />
                      </div>
                    ) : (
                      <div className="border-2 border-gray-300 rounded-full p-0.5">
                        <div className="size-5" />
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}

        {/* Add New Address - Compact */}
        {onAddNewAddress && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: addresses.length * 0.05 }}
          >
            <Card 
              className="p-3.5 cursor-pointer border border-dashed border-gray-300 hover:border-red-400 hover:bg-red-50 transition-all active:scale-98 bg-white"
              onClick={onAddNewAddress}
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl p-2.5 bg-gray-100">
                  <Plus className="size-5 text-gray-600" />
                </div>
                <div>
                  <h3 className="text-gray-900">{t('add.new.address')}</h3>
                  <p className="text-gray-600 text-sm">{t('save.family.location')}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </div>

      {/* Fixed Bottom Button - Compact */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg">
        <Button
          onClick={() => onAddressConfirm(selectedAddress)}
          className="w-full h-12 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white rounded-xl shadow-md active:scale-98 transition-all"
        >
          <CheckCircle2 className="size-5 mr-2" />
          {t('confirm.location')}
        </Button>
      </div>
    </div>
  );
}