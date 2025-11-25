import { useState } from 'react';
import { Shield, User, Phone, Lock, ArrowLeft, AlertCircle, CheckCircle2, Fingerprint } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { motion } from 'motion/react';
import { Switch } from './ui/switch';
import type { User as UserType } from '../App';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

interface SignupScreenProps {
  onSignupSuccess: (user: UserType) => void;
  onBackToLogin: () => void;
}

export function SignupScreen({ onSignupSuccess, onBackToLogin }: SignupScreenProps) {
  const { t } = useLanguage();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [enableBiometric, setEnableBiometric] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!firstName.trim()) { setError(t('error.first.name')); return; }
    if (!lastName.trim()) { setError(t('error.last.name')); return; }
    if (!mobileNumber || mobileNumber.length < 10) { setError(t('error.mobile')); return; }
    if (!pinCode || pinCode.length !== 4) { setError(t('error.pin')); return; }
    if (pinCode !== confirmPin) { setError(t('error.pin.match')); return; }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setShowSuccess(true);

      setTimeout(() => {
        const user: UserType = {
          id: '1',
          firstName,
          lastName,
          mobileNumber,
          biometricEnabled: enableBiometric,
        };
        onSignupSuccess(user);
      }, 2000);
    }, 1500);
  };

  if (showSuccess) {
    return (
      <div className="h-screen flex items-center justify-center p-6 bg-gradient-to-br from-green-50 to-blue-50">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-center">
          <div className="bg-green-100 rounded-full p-5 mx-auto w-fit mb-3">
            <CheckCircle2 className="size-12 text-green-600" />
          </div>
          <h2 className="text-gray-900 mb-1 text-lg">{t('account.created')}</h2>
          <p className="text-gray-600 text-sm">{t('redirecting')}</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-red-50 to-orange-50">
      {/* Header - Compact */}
      <div className="flex items-center justify-between p-4">
        <Button variant="ghost" size="icon" onClick={onBackToLogin} className="rounded-full h-9 w-9">
          <ArrowLeft className="size-5" />
        </Button>
        <LanguageSwitcher />
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-4 pb-4">
        <div className="max-w-md mx-auto w-full space-y-3">
          {/* Logo & Header - Compact */}
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <div className="flex items-center justify-center mb-2">
              <div className="bg-red-600 rounded-full p-4 shadow-xl">
                <Shield className="size-8 text-white" />
              </div>
            </div>
            <h1 className="text-red-600 mb-1 text-lg">{t('create.account')}</h1>
            <p className="text-gray-600 text-sm px-4">{t('join.emergency')}</p>
          </motion.div>

          {/* Signup Form - Compact */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Card className="p-4 bg-white shadow-2xl border-0 rounded-2xl">
              <form onSubmit={handleSignup} className="space-y-3">
                {/* Name Fields - Side by side */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <label className="text-gray-700 text-xs">{t('first.name')}</label>
                    <div className="relative">
                      <User className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-gray-400 z-10" />
                      <Input
                        type="text"
                        placeholder={t('first.name')}
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="pl-9 h-10 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-red-500 text-sm"
                        autoComplete="given-name"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-gray-700 text-xs">{t('last.name')}</label>
                    <div className="relative">
                      <User className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-gray-400 z-10" />
                      <Input
                        type="text"
                        placeholder={t('last.name')}
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="pl-9 h-10 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-red-500 text-sm"
                        autoComplete="family-name"
                      />
                    </div>
                  </div>
                </div>

                {/* Mobile Number */}
                <div className="space-y-1">
                  <label className="text-gray-700 text-xs">{t('mobile.number')}</label>
                  <div className="relative">
                    <Phone className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-gray-400 z-10" />
                    <Input
                      type="tel"
                      placeholder={t('enter.mobile')}
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      className="pl-9 h-10 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-red-500 text-sm"
                      maxLength={15}
                      inputMode="tel"
                      autoComplete="tel"
                    />
                  </div>
                </div>

                {/* PIN Fields - Side by side */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <label className="text-gray-700 text-xs">{t('pin.code')}</label>
                    <div className="relative">
                      <Lock className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-gray-400 z-10" />
                      <Input
                        type="password"
                        placeholder="****"
                        value={pinCode}
                        onChange={(e) => setPinCode(e.target.value.replace(/\D/g, ''))}
                        className="pl-9 h-10 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-red-500 tracking-widest text-sm"
                        maxLength={4}
                        inputMode="numeric"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-gray-700 text-xs">{t('confirm.pin')}</label>
                    <div className="relative">
                      <Lock className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-gray-400 z-10" />
                      <Input
                        type="password"
                        placeholder="****"
                        value={confirmPin}
                        onChange={(e) => setConfirmPin(e.target.value.replace(/\D/g, ''))}
                        className="pl-9 h-10 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-red-500 tracking-widest text-sm"
                        maxLength={4}
                        inputMode="numeric"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                </div>

                {/* Biometric Toggle */}
                <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-2">
                    <Fingerprint className="size-5 text-red-600" />
                    <div>
                      <p className="text-gray-900 text-sm">{t('enable.biometric')}</p>
                      <p className="text-gray-600 text-xs">{t('biometric.login')}</p>
                    </div>
                  </div>
                  <Switch checked={enableBiometric} onCheckedChange={setEnableBiometric} />
                </div>

                {/* Error Message */}
                {error && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-red-600 bg-red-50 p-2.5 rounded-xl border border-red-200 text-xs">
                    <AlertCircle className="size-4 flex-shrink-0" />
                    <p>{error}</p>
                  </motion.div>
                )}

                {/* Signup Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-11 bg-red-600 hover:bg-red-700 text-white rounded-xl shadow-lg active:scale-98"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="size-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      {t('creating.account')}
                    </div>
                  ) : (
                    t('sign.up')
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Login Link */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-center pb-2">
            <p className="text-gray-600 text-sm">
              {t('have.account')}{' '}
              <button onClick={onBackToLogin} className="text-red-600 hover:text-red-700 font-medium min-h-[44px] inline-flex items-center">
                {t('login')}
              </button>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
