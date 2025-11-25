import { ArrowLeft, MapPin, Star, Navigation2, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';
import type { Hospital, Address } from '../App';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

interface HospitalMapScreenProps {
  destinationAddress: Address;
  onHospitalSelect: (hospital: Hospital) => void;
  onBack: () => void;
}

const nearbyHospitals: Hospital[] = [
  {
    id: 'h1',
    name: 'City General Hospital',
    address: '123 Medical Center Dr',
    distance: 1.2,
    rating: 4.8,
    position: { lat: 0.3, lng: 0.2 },
    available: true,
  },
  {
    id: 'h2',
    name: 'St. Mary Medical Center',
    address: '456 Healthcare Ave',
    distance: 2.5,
    rating: 4.6,
    position: { lat: -0.2, lng: 0.4 },
    available: true,
  },
  {
    id: 'h3',
    name: 'Emergency Care Clinic',
    address: '789 Urgent Care Blvd',
    distance: 3.8,
    rating: 4.5,
    position: { lat: 0.4, lng: -0.3 },
    available: true,
  },
  {
    id: 'h4',
    name: 'Metro Health Center',
    address: '321 Wellness Street',
    distance: 4.2,
    rating: 4.7,
    position: { lat: -0.3, lng: -0.2 },
    available: false,
  },
];

// Cairo streets for realistic map overlay
const cairoStreets = [
  { name: 'شارع رمسيس', x1: 10, y1: 50, x2: 90, y2: 50 },
  { name: 'شارع الجيش', x1: 30, y1: 10, x2: 30, y2: 90 },
  { name: 'ميدان التحرير', x1: 50, y1: 20, x2: 50, y2: 80 },
  { name: 'كورنيش النيل', x1: 20, y1: 30, x2: 80, y2: 70 },
  { name: 'شارع الهرم', x1: 15, y1: 60, x2: 85, y2: 40 },
];

export function HospitalMapScreen({ destinationAddress, onHospitalSelect, onBack }: HospitalMapScreenProps) {
  const { t } = useLanguage();
  const [selectedHospital, setSelectedHospital] = useState<Hospital | null>(null);

  const getTranslatedLabel = (label: string) => {
    const labelMap: { [key: string]: string } = {
      'Current Location': t('current.location'),
      'Home': t('home'),
      'Mom': t('mom'),
      'Dad': t('dad'),
    };
    return labelMap[label] || label;
  };

  // Generate route path when hospital is selected
  const getRoutePath = (hospital: Hospital) => {
    const startX = 50; // Destination (center)
    const startY = 50;
    const endX = 50 + hospital.position.lng * 30;
    const endY = 50 + hospital.position.lat * 30;
    
    // Create a curved path using quadratic bezier
    const controlX = (startX + endX) / 2 + (endY - startY) * 0.3;
    const controlY = (startY + endY) / 2 - (endX - startX) * 0.3;
    
    return `M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`;
  };

  return (
    <div className="h-screen flex flex-col bg-white">
      {/* Map Area - Realistic Cairo Map */}
      <div className="h-[35vh] relative bg-[#E8E4D9] overflow-hidden">
        {/* Header - Compact */}
        <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/50 to-transparent p-3">
          <div className="flex items-center gap-2 mb-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={onBack}
              className="rounded-full bg-white h-9 w-9"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <div className="text-white flex-1 min-w-0">
              <h2 className="text-lg truncate">{t('nearest.hospitals')}</h2>
              <p className="text-white/90 text-xs truncate">{t('emergency.for')}: {getTranslatedLabel(destinationAddress.label)}</p>
            </div>
            <LanguageSwitcher />
          </div>
          {/* Destination Badge - Compact */}
          <div className="bg-white rounded-lg p-2 shadow-lg">
            <div className="flex items-center gap-2">
              <MapPin className="size-4 text-red-600" />
              <div className="flex-1 min-w-0">
                <p className="text-gray-900 text-sm truncate">{destinationAddress.street}</p>
                <p className="text-gray-600 text-xs truncate">القاهرة، مصر</p>
              </div>
            </div>
          </div>
        </div>

        {/* Realistic Map with Cairo Streets */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Map background areas (blocks) */}
            <rect x="0" y="0" width="25" height="25" fill="#D4CDB7" opacity="0.3" />
            <rect x="25" y="25" width="30" height="30" fill="#C8C2AB" opacity="0.3" />
            <rect x="60" y="10" width="35" height="40" fill="#D4CDB7" opacity="0.3" />
            <rect x="10" y="60" width="40" height="35" fill="#C8C2AB" opacity="0.3" />
            <rect x="55" y="55" width="40" height="40" fill="#D4CDB7" opacity="0.3" />
            
            {/* Nile River representation */}
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
            
            {/* Small street grid */}
            {Array.from({ length: 10 }).map((_, i) => (
              <g key={i}>
                <line
                  x1={i * 10}
                  y1="0"
                  x2={i * 10}
                  y2="100"
                  stroke="#BDB8A0"
                  strokeWidth="0.3"
                  opacity="0.3"
                />
                <line
                  x1="0"
                  y1={i * 10}
                  x2="100"
                  y2={i * 10}
                  stroke="#BDB8A0"
                  strokeWidth="0.3"
                  opacity="0.3"
                />
              </g>
            ))}
            
            {/* Route path when hospital is selected */}
            {selectedHospital && (
              <>
                {/* Route line */}
                <path
                  d={getRoutePath(selectedHospital)}
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="0.8"
                  strokeDasharray="2,1"
                  opacity="0.8"
                />
                
                {/* Animated route highlight */}
                <motion.path
                  d={getRoutePath(selectedHospital)}
                  fill="none"
                  stroke="#EF4444"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.8 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              </>
            )}
          </svg>

          {/* Destination marker (center - your location) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-blue-500 rounded-full opacity-30 blur-sm" />
              <div className="relative bg-blue-500 rounded-full p-2 border-2 border-white shadow-lg">
                <MapPin className="size-4 text-white" />
              </div>
            </motion.div>
            <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <div className="bg-white px-2 py-0.5 rounded shadow-md border border-blue-200">
                <p className="text-xs text-gray-700">{t('your.location')}</p>
              </div>
            </div>
          </div>

          {/* Hospital markers */}
          {nearbyHospitals.map((hospital) => (
            <motion.div
              key={hospital.id}
              className="absolute z-10"
              style={{
                top: `calc(50% + ${hospital.position.lat * 30}%)`,
                left: `calc(50% + ${hospital.position.lng * 30}%)`,
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div
                className={`relative cursor-pointer ${
                  selectedHospital?.id === hospital.id ? 'scale-125' : ''
                } transition-transform`}
                onClick={() => setSelectedHospital(hospital)}
              >
                <div className={`${
                  hospital.available ? 'bg-red-600' : 'bg-gray-400'
                } rounded-full p-1.5 border-2 border-white shadow-lg relative`}>
                  <Navigation2 className="size-3 text-white" />
                  {selectedHospital?.id === hospital.id && (
                    <motion.div
                      className="absolute inset-0 bg-red-600 rounded-full"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    />
                  )}
                </div>
                {/* Hospital label on hover/selection */}
                {selectedHospital?.id === hospital.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full mt-1 left-1/2 -translate-x-1/2 whitespace-nowrap z-20"
                  >
                    <div className="bg-white px-2 py-0.5 rounded shadow-md border border-red-200">
                      <p className="text-xs text-gray-700 font-medium">{hospital.name}</p>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
          
          {/* Map Labels - Cairo landmarks */}
          <div className="absolute top-[20%] left-[25%] z-5">
            <p className="text-xs text-gray-600 opacity-50">ميدان التحرير</p>
          </div>
          <div className="absolute top-[60%] right-[20%] z-5">
            <p className="text-xs text-gray-600 opacity-50">مدينة نصر</p>
          </div>
        </div>
      </div>

      {/* Hospital List - Compact, scrollable */}
      <div className="flex-1 bg-gray-50 p-3 space-y-2 overflow-y-auto">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-gray-900">{t('available.hospitals')}</h3>
          <p className="text-gray-600 text-sm">{nearbyHospitals.filter(h => h.available).length} {t('available')}</p>
        </div>

        {nearbyHospitals.map((hospital, idx) => {
          const isSelected = selectedHospital?.id === hospital.id;
          const estimatedTime = Math.round(hospital.distance * 3);

          return (
            <motion.div
              key={hospital.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <Card
                className={`p-3 cursor-pointer transition-all ${
                  isSelected
                    ? 'border-2 border-red-600 bg-red-50 shadow-md'
                    : hospital.available
                    ? 'border border-gray-200 hover:border-red-300 shadow-sm'
                    : 'border border-gray-200 opacity-60'
                }`}
                onClick={() => hospital.available && setSelectedHospital(hospital)}
              >
                <div className="flex items-start gap-2 mb-2">
                  <div className={`rounded-full p-1.5 ${
                    hospital.available ? 'bg-red-100' : 'bg-gray-100'
                  }`}>
                    <Navigation2 className={`size-4 ${
                      hospital.available ? 'text-red-600' : 'text-gray-400'
                    }`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-0.5">
                      <h4 className="text-gray-900 text-sm">{hospital.name}</h4>
                      <Badge className={`text-xs ${
                        hospital.available
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-400 text-white'
                      }`}>
                        {hospital.available ? t('available') : t('busy')}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-600 mb-1.5">
                      <MapPin className="size-3" />
                      <p className="text-xs truncate">{hospital.address}</p>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700 text-xs">
                      <div className="flex items-center gap-1">
                        <Navigation2 className="size-3" />
                        <span>{hospital.distance} {t('km')}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="size-3" />
                        <span>~{estimatedTime} {t('min')}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="size-3 fill-yellow-400 text-yellow-400" />
                        <span>{hospital.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {hospital.available && (
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      onHospitalSelect(hospital);
                    }}
                    className={`w-full h-9 text-sm ${
                      isSelected
                        ? 'bg-red-600 hover:bg-red-700'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                    disabled={!hospital.available}
                  >
                    {t('select')} {hospital.name}
                  </Button>
                )}
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom hint - Compact */}
      <div className="p-3 bg-white border-t border-gray-200">
        <p className="text-center text-gray-600 text-sm">
          {t('select.hospital')}
        </p>
      </div>
    </div>
  );
}
