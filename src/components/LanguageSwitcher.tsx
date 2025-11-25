import { Languages } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="rounded-full flex items-center gap-2"
    >
      <Languages className="size-5" />
      <span>{language === 'en' ? 'العربية' : 'English'}</span>
    </Button>
  );
}
