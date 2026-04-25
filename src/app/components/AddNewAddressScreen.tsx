import { ArrowLeft, MapPin, User, Home, Building2, Save } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useState } from 'react';
import { motion } from 'motion/react';
import type { Address } from '../App';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

interface AddNewAddressScreenProps {
  onSave: (address: Address) => void;
  onBack: () => void;
}

const labelPresets = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'mom', label: 'Mom', icon: User },
  { id: 'dad', label: 'Dad', icon: User },
  { id: 'work', label: 'Work', icon: Building2 },
  { id: 'other', label: 'Other', icon: MapPin },
];

export function AddNewAddressScreen({ onSave, onBack }: AddNewAddressScreenProps) {
  const { t, isRTL } = useLanguage();
  const [selectedLabel, setSelectedLabel] = useState('home');
  const [customLabel, setCustomLabel] = useState('');
  const [personName, setPersonName] = useState('');
  const [street, setStreet] = useState('');
  const [building, setBuilding] = useState('');
  const [floor, setFloor] = useState('');
  const [apartment, setApartment] = useState('');
  const [landmarks, setLandmarks] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const getTranslatedLabel = (label: string) => {
    const labelMap: { [key: string]: string } = {
      'Home': t('home'),
      'Mom': t('mom'),
      'Dad': t('dad'),
      'Work': t('work'),
      'Other': t('other'),
    };
    return labelMap[label] || label;
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (selectedLabel === 'other' && !customLabel.trim()) {
      newErrors.customLabel = t('error.custom.label');
    }

    if ((selectedLabel === 'mom' || selectedLabel === 'dad' || selectedLabel === 'other') && !personName.trim()) {
      newErrors.personName = t('error.person.name');
    }

    if (!street.trim()) {
      newErrors.street = t('error.street');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (!validateForm()) {
      return;
    }

    const label = selectedLabel === 'other' ? customLabel : labelPresets.find(p => p.id === selectedLabel)?.label || 'Home';
    const fullStreet = [street, building && `Building ${building}`, floor && `Floor ${floor}`, apartment && `Apt ${apartment}`]
      .filter(Boolean)
      .join(', ');

    const newAddress: Address = {
      id: `addr_${Date.now()}`,
      label,
      name: personName || label,
      street: fullStreet,
      city: 'Cairo',
      isCurrent: false,
    };

    onSave(newAddress);
  };

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-red-50 to-orange-50">
      {/* Header */}
      <div className="bg-white shadow-sm p-4">
        <div className="flex items-center gap-3 mb-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="rounded-full"
          >
            <ArrowLeft className="size-5" />
          </Button>
          <div className="flex-1">
            <h1 className="text-gray-900">{t('add.new.address')}</h1>
            <p className="text-gray-600 text-sm">{t('save.location.details')}</p>
          </div>
          <LanguageSwitcher />
        </div>
      </div>

      {/* Form Content - Scrollable */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Address Label Selection */}
        <Card className="p-4">
          <Label className="text-gray-900 mb-3 block">{t('address.label')}</Label>
          <div className="grid grid-cols-3 gap-2">
            {labelPresets.map((preset) => {
              const Icon = preset.icon;
              const isSelected = selectedLabel === preset.id;
              return (
                <motion.button
                  key={preset.id}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedLabel(preset.id)}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    isSelected
                      ? 'border-red-600 bg-red-50'
                      : 'border-gray-200 bg-white hover:border-red-300'
                  }`}
                >
                  <Icon className={`size-5 mx-auto mb-1 ${
                    isSelected ? 'text-red-600' : 'text-gray-600'
                  }`} />
                  <p className={`text-xs ${
                    isSelected ? 'text-red-600' : 'text-gray-700'
                  }`}>
                    {getTranslatedLabel(preset.label)}
                  </p>
                </motion.button>
              );
            })}
          </div>

          {/* Custom Label Input */}
          {selectedLabel === 'other' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-3"
            >
              <Label htmlFor="customLabel" className="text-gray-700 text-sm">
                {t('custom.label')}
              </Label>
              <Input
                id="customLabel"
                value={customLabel}
                onChange={(e) => setCustomLabel(e.target.value)}
                placeholder={t('enter.custom.label')}
                className={`mt-1 ${errors.customLabel ? 'border-red-500' : ''}`}
              />
              {errors.customLabel && (
                <p className="text-red-500 text-xs mt-1">{errors.customLabel}</p>
              )}
            </motion.div>
          )}
        </Card>

        {/* Person Name (for Mom/Dad/Other) */}
        {(selectedLabel === 'mom' || selectedLabel === 'dad' || selectedLabel === 'other') && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="p-4">
              <Label htmlFor="personName" className="text-gray-900 mb-2 block">
                {t('person.name')}
              </Label>
              <div className="relative">
                <User className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 size-4 text-gray-400`} />
                <Input
                  id="personName"
                  value={personName}
                  onChange={(e) => setPersonName(e.target.value)}
                  placeholder={t('enter.person.name')}
                  className={`${isRTL ? 'pr-10' : 'pl-10'} ${errors.personName ? 'border-red-500' : ''}`}
                />
              </div>
              {errors.personName && (
                <p className="text-red-500 text-xs mt-1">{errors.personName}</p>
              )}
            </Card>
          </motion.div>
        )}

        {/* Street Address */}
        <Card className="p-4">
          <Label htmlFor="street" className="text-gray-900 mb-2 block">
            {t('street.address')} *
          </Label>
          <div className="relative">
            <MapPin className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 size-4 text-gray-400`} />
            <Input
              id="street"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              placeholder={t('enter.street.address')}
              className={`${isRTL ? 'pr-10' : 'pl-10'} ${errors.street ? 'border-red-500' : ''}`}
            />
          </div>
          {errors.street && (
            <p className="text-red-500 text-xs mt-1">{errors.street}</p>
          )}
        </Card>

        {/* Building Details */}
        <Card className="p-4">
          <Label className="text-gray-900 mb-3 block">{t('building.details')}</Label>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <Label htmlFor="building" className="text-gray-700 text-sm">
                {t('building')}
              </Label>
              <Input
                id="building"
                value={building}
                onChange={(e) => setBuilding(e.target.value)}
                placeholder="12"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="floor" className="text-gray-700 text-sm">
                {t('floor')}
              </Label>
              <Input
                id="floor"
                value={floor}
                onChange={(e) => setFloor(e.target.value)}
                placeholder="3"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="apartment" className="text-gray-700 text-sm">
                {t('apartment')}
              </Label>
              <Input
                id="apartment"
                value={apartment}
                onChange={(e) => setApartment(e.target.value)}
                placeholder="5A"
                className="mt-1"
              />
            </div>
          </div>
        </Card>

        {/* Landmarks */}
        <Card className="p-4">
          <Label htmlFor="landmarks" className="text-gray-900 mb-2 block">
            {t('landmarks.optional')}
          </Label>
          <Input
            id="landmarks"
            value={landmarks}
            onChange={(e) => setLandmarks(e.target.value)}
            placeholder={t('enter.landmarks')}
          />
          <p className="text-gray-500 text-xs mt-1">{t('landmarks.help')}</p>
        </Card>

        {/* Info Message */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex gap-2">
          <MapPin className="size-4 text-blue-600 flex-shrink-0 mt-0.5" />
          <p className="text-blue-800 text-sm">{t('address.save.info')}</p>
        </div>
      </div>

      {/* Bottom Save Button */}
      <div className="p-4 bg-white border-t border-gray-200">
        <Button
          onClick={handleSave}
          className="w-full h-12 bg-red-600 hover:bg-red-700 text-white"
        >
          <Save className="size-5 mr-2" />
          {t('save.address')}
        </Button>
      </div>
    </div>
  );
}