import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Landing Screen
    'app.name': 'MySOS',
    'app.tagline': 'Emergency Medical Services at Your Fingertips',
    'welcome': 'Welcome',
    'sos': 'SOS',
    'tap.emergency': 'Tap for Emergency',
    'fast.response': 'Fast Response',
    '24.7.available': '24/7 Available',
    'emergency.hotline': 'Emergency Hotline',
    
    // Login Screen
    'welcome.to': 'Welcome to MySOS',
    'emergency.services': 'Emergency services at your fingertips',
    'mobile.number': 'Mobile Number',
    'enter.mobile': 'Enter your mobile number',
    'pin.code': 'PIN Code',
    'enter.pin': 'Enter 4-digit PIN',
    'login': 'Login',
    'logging.in': 'Logging in...',
    'or': 'OR',
    'login.biometric': 'Login with Biometric',
    'no.account': "Don't have an account?",
    'sign.up': 'Sign Up',
    
    // Signup Screen
    'create.account': 'Create Account',
    'join.mysos': 'Join MySOS Emergency Services',
    'join.emergency': 'Join emergency services network',
    'first.name': 'First Name',
    'enter.first.name': 'Enter your first name',
    'last.name': 'Last Name',
    'enter.last.name': 'Enter your last name',
    'create.pin': 'Create PIN Code',
    'confirm.pin': 'Confirm PIN Code',
    'reenter.pin': 'Re-enter 4-digit PIN',
    'enable.biometric': 'Enable Biometric',
    'biometric.desc': 'Login with fingerprint/face',
    'biometric.login': 'Use fingerprint or face ID for quick login',
    'creating.account': 'Creating Account...',
    'account.created': 'Account Created!',
    'welcome.to.mysos': 'Welcome to MySOS',
    'already.account': 'Already have an account?',
    'have.account': 'Already have an account?',
    'redirecting': 'Redirecting to dashboard...',
    
    // Address Selection
    'emergency.location': 'Emergency Location',
    'where.need.help': 'Where do you need help?',
    'team.arrive': 'Emergency team will arrive at this location',
    'current.location': 'Current Location',
    'my.location': 'My Location',
    'home': 'Home',
    'mom': 'Mom',
    'dad': 'Dad',
    'live': 'Live',
    'add.new.address': 'Add New Address',
    'save.family.location': "Save a family member's location",
    'confirm.location': 'Confirm Location & Continue',
    'selected': 'Selected',
    
    // Hospital Map
    'nearest.hospitals': 'Nearest Hospitals',
    'emergency.for': 'Emergency for',
    'select.hospital': 'Select a hospital',
    'available.hospitals': 'Available Hospitals',
    'available': 'Available',
    'busy': 'Busy',
    'km': 'km',
    'min': 'min',
    'select': 'Select',
    
    // Service Selection
    'select.emergency.service': 'Select Emergency Services (Multiple allowed)',
    'emergency.services.cat': 'Emergency Services',
    'ambulance.services': 'Ambulance Services',
    'portable.diagnostic': 'Portable Diagnostic Services',
    'laboratory.services': 'Laboratory Services',
    'er.doctor': 'ER Doctor',
    'er.nurse': 'ER Nurse',
    'bls.ambulance': 'BLS Ambulance',
    'als.ambulance': 'ALS Ambulance',
    'portable.ultrasound': 'Portable Ultrasound',
    'portable.xray': 'Portable X-Ray',
    'portable.echo': 'Portable Echocardiography (ECHO)',
    'portable.doppler': 'Portable Doppler',
    'lab.services': 'Laboratory Services',
    'mins': 'mins',
    'services.selected': 'selected',
    'service.selected': 'Service',
    'services': 'Services',
    'total': 'Total',
    'service.fee': 'Service Fee',
    'continue.payment': 'Continue to Payment',
    
    // Payment Screen
    'payment': 'Payment',
    'review.confirm': 'Review and confirm',
    'services.total': 'Services Total',
    'platform.fee': 'Platform Fee',
    'payment.method': 'Payment Method',
    'credit.debit': 'Credit / Debit Card',
    'card.types': 'Visa, Mastercard, Amex',
    'cash': 'Cash',
    'pay.arrival': 'Pay on arrival',
    'insurance': 'Insurance',
    'health.insurance': 'Use health insurance',
    'payment.warning': '⚠️ Emergency services are time-sensitive. Please ensure payment method is ready.',
    'confirm.pay': 'Confirm & Pay',
    'processing.payment': 'Processing Payment...',
    'payment.successful': 'Payment Successful!',
    'connecting.team': 'Connecting you with emergency team...',
    
    // Tracking Screen
    'delivery.progress': 'Delivery Progress',
    'order.id': 'Order ID',
    'finding.team': 'Finding nearest team...',
    'searching.team': 'Searching for available emergency team',
    'team.assigned': 'Team assigned',
    'team.accepted': 'Emergency team has accepted your request',
    'team.on.way': 'Team on the way',
    'team.heading': 'Team is heading to your location',
    'team.arrived': 'Team arrived',
    'team.arrived.location': 'Emergency team has arrived at location',
    'your.location': 'Your Location',
    'away': 'away',
    'hospital': 'Hospital',
    'destination': 'Destination',
    'arriving.in': 'Arriving in',
    'distance': 'Distance',
    'cancel.request': 'Cancel Emergency Request',
    'back.to.home': 'Back to Home',
    'active.order': 'Active Order',
    'order.history': 'Order History',
    'order.completed': 'Completed',
    'order.cancelled': 'Cancelled',
    
    // Validation Errors
    'error.first.name': 'Please enter your first name',
    'error.last.name': 'Please enter your last name',
    'error.mobile': 'Please enter a valid mobile number',
    'error.pin': 'PIN code must be 4 digits',
    'error.pin.match': 'PIN codes do not match',
  },
  ar: {
    // Landing Screen
    'app.name': 'SOS الخاص بي',
    'app.tagline': 'خدمات الطوارئ الطبية في متناول يدك',
    'welcome': 'مرحباً',
    'sos': 'طوارئ',
    'tap.emergency': 'اضغط للطوارئ',
    'fast.response': 'استجابة سريعة',
    '24.7.available': 'متاح على مدار الساعة',
    'emergency.hotline': 'خط الطوارئ',
    
    // Login Screen
    'welcome.to': 'مرحباً بك في MySOS',
    'emergency.services': 'خدمات الطوارئ في متناول يدك',
    'mobile.number': 'رقم الهاتف المحمول',
    'enter.mobile': 'أدخل رقم هاتفك المحمول',
    'pin.code': 'رمز PIN',
    'enter.pin': 'أدخل رمز PIN المكون من 4 أرقام',
    'login': 'تسجيل الدخول',
    'logging.in': 'جارٍ تسجيل الدخول...',
    'or': 'أو',
    'login.biometric': 'تسجيل الدخول بالبصمة',
    'no.account': 'ليس لديك حساب؟',
    'sign.up': 'إنشاء حساب',
    
    // Signup Screen
    'create.account': 'إنشاء حساب',
    'join.mysos': 'انضم إلى خدمات MySOS الطارئة',
    'join.emergency': 'انضم إلى شبكة خدمات الطوارئ',
    'first.name': 'الاسم الأول',
    'enter.first.name': 'أدخل اسمك الأول',
    'last.name': 'اسم العائلة',
    'enter.last.name': 'أدخل اسم عائلتك',
    'create.pin': 'إنشاء رمز PIN',
    'confirm.pin': 'تأكيد رمز PIN',
    'reenter.pin': 'أعد إدخال رمز PIN المكون من 4 أرقام',
    'enable.biometric': 'تفعيل البصمة',
    'biometric.desc': 'تسجيل الدخول ببصمة الإصبع/الوجه',
    'biometric.login': 'استخدم بصمة الإصبع أو معرفة الوجه للدخول السريع',
    'creating.account': 'جارٍ إنشاء الحساب...',
    'account.created': 'تم إنشاء الحساب!',
    'welcome.to.mysos': 'مرحباً بك في MySOS',
    'already.account': 'هل لديك حساب بالفعل؟',
    'have.account': 'هل لديك حساب بالفعل؟',
    'redirecting': 'جارٍ إعادة التوجيه إلى لوحة التحكم...',
    
    // Address Selection
    'emergency.location': 'موقع الطوارئ',
    'where.need.help': 'أين تحتاج المساعدة؟',
    'team.arrive': '🚨 سيصل فريق الطوارئ إلى هذا الموقع',
    'current.location': 'الموقع الحالي',
    'my.location': 'موقعي',
    'home': 'المنزل',
    'mom': 'أمي',
    'dad': 'أبي',
    'live': 'مباشر',
    'add.new.address': 'إضافة عنوان جديد',
    'save.family.location': 'حفظ موقع أحد أفراد العائلة',
    'confirm.location': 'تأكيد الموقع والمتابعة',
    'selected': 'المحدد',
    
    // Hospital Map
    'nearest.hospitals': 'أقرب المستشفيات',
    'emergency.for': 'طوارئ لـ',
    'select.hospital': 'اختر مستشفى',
    'available.hospitals': 'المستشفيات المتاحة',
    'available': 'متاح',
    'busy': 'مشغول',
    'km': 'كم',
    'min': 'دقيقة',
    'select': 'اختيار',
    
    // Service Selection
    'select.emergency.service': 'اختر خدمات الطوارئ (يمكن اختيار عدة خدمات)',
    'emergency.services.cat': 'خدمات الطوارئ',
    'ambulance.services': 'خدمات الإسعاف',
    'portable.diagnostic': 'الخدمات التشخيصية المتنقلة',
    'laboratory.services': 'خدمة التحاليل',
    'er.doctor': 'طبيب طوارئ',
    'er.nurse': 'ممرضة/ممرض طوارئ',
    'bls.ambulance': 'إسعاف BLS',
    'als.ambulance': 'إسعاف ALS',
    'portable.ultrasound': 'موجات فوق صوتية متنقلة',
    'portable.xray': 'أشعة سينية متنقلة',
    'portable.echo': 'إيكو متنقل',
    'portable.doppler': 'دوبلر متنقل',
    'lab.services': 'خدمة التحاليل',
    'mins': 'دقيقة',
    'services.selected': 'محدد',
    'service.selected': 'خدمة',
    'services': 'خدمات',
    'total': 'الإجمالي',
    'service.fee': 'رسوم الخدمة',
    'continue.payment': 'المتابعة للدفع',
    
    // Payment Screen
    'payment': 'الدفع',
    'review.confirm': 'المراجعة والتأكيد',
    'services.total': 'إجمالي الخدمات',
    'platform.fee': 'رسوم المنصة',
    'payment.method': 'طريقة الدفع',
    'credit.debit': 'بطاقة ائتمان / خصم',
    'card.types': 'فيزا، ماستركارد، أمريكان إكسبريس',
    'cash': 'نقداً',
    'pay.arrival': 'الدفع عند الوصول',
    'insurance': 'التأمين',
    'health.insurance': 'استخدام التأمين الصحي',
    'payment.warning': '⚠️ خدمات الطوارئ حساسة للوقت. يرجى التأكد من جاهزية طريقة الدفع.',
    'confirm.pay': 'تأكيد والدفع',
    'processing.payment': 'جارٍ معالجة الدفع...',
    'payment.successful': 'تم الدفع بنجاح!',
    'connecting.team': 'جارٍ توصيلك بفريق الطوارئ...',
    
    // Tracking Screen
    'delivery.progress': 'تقدم التوصيل',
    'order.id': 'رقم الطلب',
    'finding.team': 'جارٍ البحث عن أقرب فريق...',
    'searching.team': 'البحث عن فريق طوارئ متاح',
    'team.assigned': 'تم تعيين الفريق',
    'team.accepted': 'قبل فريق الطوارئ طلبك',
    'team.on.way': 'الفريق في الطريق',
    'team.heading': 'الفريق متجه إلى موقعك',
    'team.arrived': 'وصل الفريق',
    'team.arrived.location': 'وصل فريق الطوارئ إلى الموقع',
    'your.location': 'موقعك',
    'away': 'بعيداً',
    'hospital': 'المستشفى',
    'destination': 'الوجهة',
    'arriving.in': 'يصل في',
    'distance': 'المسافة',
    'cancel.request': 'إلغاء طلب الطوارئ',
    'back.to.home': 'عودة إلى الصفحة الرئيسية',
    'active.order': 'طلب نشط',
    'order.history': 'تاريخ الطلبات',
    'order.completed': 'مكتمل',
    'order.cancelled': 'ملغي',
    
    // Validation Errors
    'error.first.name': 'يرجى إدخال اسمك الأول',
    'error.last.name': 'يرجى إدخال اسم عائلتك',
    'error.mobile': 'يرجى إدخال رقم هاتف صالح',
    'error.pin': 'يجب أن يكون رمز PIN مكوناً من 4 أرقام',
    'error.pin.match': 'رموز PIN غير متطابقة',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const isRTL = language === 'ar';

  useEffect(() => {
    // Update document direction
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRTL]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}