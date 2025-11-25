import { useState, useEffect } from 'react';
import { ServiceSelection } from './components/ServiceSelection';
import { TrackingScreen } from './components/TrackingScreen';
import { LandingScreen } from './components/LandingScreen';
import { HospitalMapScreen } from './components/HospitalMapScreen';
import { PaymentScreen } from './components/PaymentScreen';
import { AddressSelectionScreen } from './components/AddressSelectionScreen';
import { AddNewAddressScreen } from './components/AddNewAddressScreen';
import { LoginScreen } from './components/LoginScreen';
import { SignupScreen } from './components/SignupScreen';
import { SplashScreen } from './components/SplashScreen';
import { LanguageProvider } from './contexts/LanguageContext';

export type ServiceType = {
  id: string;
  category: string;
  name: string;
  eta: string;
  price: number;
  icon: string;
};

export type Address = {
  id: string;
  label: string;
  name: string;
  street: string;
  city: string;
  isCurrent?: boolean;
};

export type Hospital = {
  id: string;
  name: string;
  address: string;
  distance: number; // in km
  rating: number;
  position: { lat: number; lng: number };
  available: boolean;
  type?: string;
  reviews?: string;
  status?: string;
  logoUrl?: string;
};

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  mobileNumber: string;
  biometricEnabled: boolean;
};

export type EmergencyRequest = {
  hospital: Hospital;
  services: ServiceType[];
  destinationAddress: Address;
  status: 'requested' | 'accepted' | 'on-the-way' | 'arrived' | 'completed' | 'cancelled';
  eta: number; // in minutes
  teamName: string;
  teamPhone: string;
  orderId: string;
  timestamp: Date;
};

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [screen, setScreen] = useState<'login' | 'signup' | 'landing' | 'address' | 'addNewAddress' | 'map' | 'services' | 'payment' | 'tracking'>('login');
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);
  const [selectedHospital, setSelectedHospital] = useState<Hospital | null>(null);
  const [selectedServices, setSelectedServices] = useState<ServiceType[]>([]);
  const [emergencyRequest, setEmergencyRequest] = useState<EmergencyRequest | null>(null);
  const [orderHistory, setOrderHistory] = useState<EmergencyRequest[]>([]);
  const [savedAddresses, setSavedAddresses] = useState<Address[]>([]);

  // Show splash screen for 3 seconds on app load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  // Default address for emergency services
  const defaultAddress: Address = {
    id: 'current',
    label: 'Current Location',
    name: 'Current Location',
    street: '123 Main Street, Nasr City',
    city: 'Cairo',
    isCurrent: true,
  };

  const handleLogin = (user: User) => {
    setCurrentUser(user);
    setScreen('landing');
  };

  const handleSignupSuccess = (user: User) => {
    setCurrentUser(user);
    setScreen('landing');
  };

  const handleSOSClick = () => {
    // Set default address and go directly to hospital map
    setSelectedAddress(defaultAddress);
    setScreen('map');
  };

  const handleAddressConfirm = (address: Address) => {
    setSelectedAddress(address);
    setScreen('map');
  };

  const handleSaveNewAddress = (address: Address) => {
    // Save the new address to the list
    setSavedAddresses(prev => [...prev, address]);
    // Select it as the current address
    setSelectedAddress(address);
    // Go back to address selection screen
    setScreen('address');
  };

  const handleHospitalSelect = (hospital: Hospital) => {
    setSelectedHospital(hospital);
    setScreen('services');
  };

  const handleServicesConfirm = (services: ServiceType[]) => {
    setSelectedServices(services);
    setScreen('payment');
  };

  const handlePaymentComplete = () => {
    if (selectedHospital && selectedServices.length > 0 && selectedAddress) {
      // Calculate max ETA from all services
      const maxEta = Math.max(...selectedServices.map(s => parseInt(s.eta.split('-')[1] || s.eta)));
      
      const request: EmergencyRequest = {
        hospital: selectedHospital,
        services: selectedServices,
        destinationAddress: selectedAddress,
        status: 'requested',
        eta: maxEta,
        teamName: selectedServices.length > 1 ? 'Emergency Response Team' : `${selectedServices[0].name} Team`,
        teamPhone: '+1 (555) 123-4567',
        orderId: `SOS${Date.now().toString().slice(-6)}`,
        timestamp: new Date(),
      };
      
      setEmergencyRequest(request);
      setScreen('tracking');
      
      // Simulate status updates
      setTimeout(() => {
        setEmergencyRequest(prev => prev ? { ...prev, status: 'accepted' } : null);
      }, 2000);
      
      setTimeout(() => {
        setEmergencyRequest(prev => prev ? { ...prev, status: 'on-the-way' } : null);
      }, 4000);
    }
  };

  const handleBackToHome = () => {
    // Move current request to history if it exists and is in progress
    if (emergencyRequest) {
      const updatedRequest = { ...emergencyRequest, status: 'completed' as const };
      setOrderHistory(prev => [updatedRequest, ...prev]);
    }
    
    setEmergencyRequest(null);
    setSelectedHospital(null);
    setSelectedServices([]);
    setSelectedAddress(null);
    setScreen('landing');
  };

  const handleCancel = () => {
    // Move cancelled request to history
    if (emergencyRequest) {
      const cancelledRequest = { ...emergencyRequest, status: 'cancelled' as const };
      setOrderHistory(prev => [cancelledRequest, ...prev]);
    }
    
    setEmergencyRequest(null);
    setSelectedHospital(null);
    setSelectedServices([]);
    setSelectedAddress(null);
    setScreen('landing');
  };

  const handleViewOrder = (order: EmergencyRequest) => {
    // View a past or active order
    setEmergencyRequest(order);
    setScreen('tracking');
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 max-w-md mx-auto">
        {showSplash ? (
          <SplashScreen />
        ) : (
          <>
            {screen === 'login' && (
              <LoginScreen 
                onLoginSuccess={handleLogin}
                onSignupClick={() => setScreen('signup')}
              />
            )}
            {screen === 'signup' && (
              <SignupScreen 
                onSignupSuccess={handleSignupSuccess}
                onBackToLogin={() => setScreen('login')}
              />
            )}
            {screen === 'landing' && currentUser && (
              <LandingScreen 
                user={currentUser}
                onSOSClick={handleSOSClick}
                activeOrder={emergencyRequest}
                orderHistory={orderHistory}
                onViewOrder={handleViewOrder}
              />
            )}
            {screen === 'address' && (
              <AddressSelectionScreen 
                onAddressConfirm={handleAddressConfirm}
                onBack={() => setScreen('landing')}
                onAddNewAddress={() => setScreen('addNewAddress')}
              />
            )}
            {screen === 'addNewAddress' && (
              <AddNewAddressScreen 
                onSave={handleSaveNewAddress}
                onBack={() => setScreen('address')}
              />
            )}
            {screen === 'map' && selectedAddress && (
              <HospitalMapScreen 
                destinationAddress={selectedAddress}
                onHospitalSelect={handleHospitalSelect}
                onBack={() => setScreen('landing')}
                onChangeAddress={() => setScreen('address')}
              />
            )}
            {screen === 'services' && selectedHospital && (
              <ServiceSelection 
                hospital={selectedHospital}
                onServicesConfirm={handleServicesConfirm}
                onBack={() => setScreen('map')}
              />
            )}
            {screen === 'payment' && selectedHospital && selectedServices.length > 0 && (
              <PaymentScreen 
                services={selectedServices}
                hospital={selectedHospital}
                onPaymentComplete={handlePaymentComplete}
                onBack={() => setScreen('services')}
              />
            )}
            {screen === 'tracking' && emergencyRequest && (
              <TrackingScreen 
                request={emergencyRequest}
                onCancel={handleCancel}
                onBackToHome={handleBackToHome}
              />
            )}
          </>
        )}
      </div>
    </LanguageProvider>
  );
}