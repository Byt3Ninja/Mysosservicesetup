import { useState } from 'react';
import { Shield, Phone, Lock, Fingerprint, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { motion } from 'motion/react';
import type { User } from '../App';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import appLogo from 'figma:asset/bb5b37bda783ba021845fb1b2c4aa7a6ef0ca067.png';

interface LoginScreenProps {
  onLoginSuccess: (user: User) => void;
  onSignupClick: () => void;
}

export function LoginScreen({ onLoginSuccess, onSignupClick }: LoginScreenProps) {
  const { t } = useLanguage();
  const [mobileNumber, setMobileNumber] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!mobileNumber || mobileNumber.length < 10) {
      setError(t('error.mobile'));
      return;
    }
    if (!pinCode || pinCode.length !== 4) {
      setError(t('error.pin'));
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      const user: User = {
        id: '1',
        firstName: 'Mohamed',
        lastName: 'Doe',
        mobileNumber: mobileNumber,
        biometricEnabled: true,
      };
      onLoginSuccess(user);
      setIsLoading(false);
    }, 1000);
  };

  const handleBiometricLogin = () => {
    setIsLoading(true);
    
    setTimeout(() => {
      const user: User = {
        id: '1',
        firstName: 'Mohamed',
        lastName: 'Doe',
        mobileNumber: '+1234567890',
        biometricEnabled: true,
      };
      onLoginSuccess(user);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-red-50 to-orange-50 p-4">
      {/* Language Switcher */}
      <div className="flex justify-end mb-2">
        <LanguageSwitcher />
      </div>

      {/* Content Container */}
      <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full space-y-4">
        {/* Logo & Header - Compact */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <img src={appLogo} alt="MySOS Logo" className="h-20 w-auto" />
          </div>
          <h1 className="text-red-600 mb-1 text-xl">{t('welcome.to')}</h1>
          <p className="text-gray-600 text-sm px-4">{t('emergency.services')}</p>
        </motion.div>

        {/* Login Form - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-5 bg-white shadow-2xl border-0 rounded-2xl">
            <form onSubmit={handleLogin} className="space-y-4">
              {/* Mobile Number */}
              <div className="space-y-2">
                <label className="text-gray-700 text-sm">{t('mobile.number')}</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400 z-10" />
                  <Input
                    type="tel"
                    placeholder={t('enter.mobile')}
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    className="pl-10 h-12 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-red-500 focus:bg-white transition-all"
                    maxLength={15}
                    inputMode="tel"
                    autoComplete="tel"
                  />
                </div>
              </div>

              {/* PIN Code */}
              <div className="space-y-2">
                <label className="text-gray-700 text-sm">{t('pin.code')}</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400 z-10" />
                  <Input
                    type="password"
                    placeholder={t('enter.pin')}
                    value={pinCode}
                    onChange={(e) => setPinCode(e.target.value.replace(/\D/g, ''))}
                    className="pl-10 h-12 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-red-500 focus:bg-white transition-all tracking-widest"
                    maxLength={4}
                    inputMode="numeric"
                    autoComplete="off"
                  />
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-xl border border-red-200 text-sm"
                >
                  <AlertCircle className="size-4 flex-shrink-0" />
                  <p>{error}</p>
                </motion.div>
              )}

              {/* Login Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white rounded-xl shadow-lg active:scale-98 transition-all"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="size-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    {t('logging.in')}
                  </div>
                ) : (
                  t('login')
                )}
              </Button>
            </form>

            {/* Divider */}
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-3 text-gray-500 text-sm">{t('or')}</span>
              </div>
            </div>

            {/* Biometric Login */}
            <Button
              type="button"
              variant="outline"
              onClick={handleBiometricLogin}
              disabled={isLoading}
              className="w-full h-12 border-2 border-red-200 hover:bg-red-50 active:bg-red-100 rounded-xl active:scale-98 transition-all"
            >
              <Fingerprint className="size-6 text-red-600 mr-2" />
              <span className="text-gray-900">{t('login.biometric')}</span>
            </Button>
          </Card>
        </motion.div>

        {/* Signup Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <p className="text-gray-600 text-sm">
            {t('no.account')}{' '}
            <button
              onClick={onSignupClick}
              className="text-red-600 hover:text-red-700 active:text-red-800 font-medium min-h-[44px] inline-flex items-center"
            >
              {t('sign.up')}
            </button>
          </p>
        </motion.div>
      </div>

      {/* Emergency Hotline */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-center py-2"
      >
        <p className="text-gray-500 text-sm">
          {t('emergency.hotline')}: <span className="text-red-600 font-medium">12345</span>
        </p>
      </motion.div>
    </div>
  );
}