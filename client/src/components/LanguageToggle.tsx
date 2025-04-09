import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

// This component will toggle between English and Arabic
interface LanguageToggleProps {
  isHomePage?: boolean;
  isScrolled?: boolean;
}

export default function LanguageToggle({ isHomePage, isScrolled }: LanguageToggleProps = {}) {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ar' : 'en';
    console.log('Switching language from', language, 'to', newLang);
    setLanguage(newLang);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="relative"
      aria-label={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
    >
      <Languages className={`h-5 w-5 ${(isHomePage && !isScrolled) ? 'text-white' : ''}`} />
      <span className={`absolute text-[10px] font-bold top-1 right-1 ${(isHomePage && !isScrolled) ? 'text-white' : ''}`}>
        {language === 'en' ? 'AR' : 'EN'}
      </span>
    </Button>
  );
}