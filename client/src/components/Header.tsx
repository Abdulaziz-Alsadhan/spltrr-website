import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import DarkModeToggle from './DarkModeToggle';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '@/hooks/useLanguage';
import logoDark from '../assets/spltrr-logo-main.png'; // Dark logo (for white backgrounds)
import logoWhite from '../assets/spltrr-logo-main-reverse.png'; // White logo (for dark backgrounds)
import ContactPopup from './ContactPopup';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [location] = useLocation();
  const { t } = useLanguage();
  
  // Check if we're on the home page
  const isHomePage = location === '/';
  
  // Handle scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Check dark mode
  useEffect(() => {
    const checkDarkMode = () => {
      const theme = localStorage.getItem('spltrr-theme');
      setIsDarkMode(theme === 'dark');
    };
    
    // Initial check
    checkDarkMode();
    
    // Listen for changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          checkDarkMode();
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    return () => observer.disconnect();
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Choose the appropriate logo based on the context
  const getLogo = () => {
    // Home page: transparent header (not scrolled) = white logo
    if (isHomePage && !isScrolled) {
      return logoWhite;
    }
    
    // When scrolled in any mode, or in dark mode = dark logo
    if (isScrolled || isDarkMode) {
      return logoDark;
    }
    
    // In light mode with dark background (not scrolled) = white logo
    return logoWhite;
  };
  
  // Get the appropriate logo
  const logo = getLogo();

  // Get header background class 
  const getHeaderBgClass = () => {
    // For home page initial state (transparent)
    if (isHomePage && !isScrolled) {
      return 'bg-transparent py-5';
    }
    
    // All other cases (including scrolled state on any page)
    // In dark mode, always use white background
    if (isDarkMode) {
      return isScrolled
        ? 'bg-white text-gray-800 backdrop-blur-md shadow-md py-3 dark-header' 
        : 'bg-white text-gray-800 py-5 dark-header';
    } else {
      return isScrolled
        ? 'bg-background/90 backdrop-blur-md shadow-md py-3'
        : 'bg-background py-5';
    }
  };

  // Get nav item class
  const getNavItemClass = (isActive: boolean) => {
    let baseClass = "font-medium transition-colors hover:text-primary mx-4";
    
    if (isHomePage && !isScrolled) {
      baseClass += ' text-white/90 hover:text-white';
    } else if (isDarkMode && !isHomePage) {
      baseClass += ' text-gray-800';
    }
    
    if (isActive) {
      baseClass += ' text-primary';
    }
    
    return baseClass;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getHeaderBgClass()}`}
      style={isDarkMode && (!isHomePage || isScrolled) ? { backgroundColor: 'white', color: '#333' } : {}}
    >
      {/* Contact Popup */}
      <ContactPopup isOpen={isContactPopupOpen} onClose={() => setIsContactPopupOpen(false)} />
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img 
                src={logo} 
                alt="SPLTRR Logo" 
                className="h-10 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <Link href="/" className={getNavItemClass(location === '/')}>
              {t('nav.home')}
            </Link>
            <Link href="/about" className={getNavItemClass(location === '/about')}>
              {t('nav.about')}
            </Link>
            <Link href="/partner" className={getNavItemClass(location === '/partner')}>
              {t('nav.partner')}
            </Link>
          </div>
          
          {/* Mobile Menu Button, Theme Toggle, Language Toggle and CTA */}
          <div className="flex items-center gap-2">
            <DarkModeToggle isHomePage={isHomePage} isScrolled={isScrolled} />
            <LanguageToggle isHomePage={isHomePage} isScrolled={isScrolled} />
            
            <Button
              variant="ghost"
              size="icon"
              className={`md:hidden ${isHomePage && !isScrolled ? 'text-white hover:bg-white/10' : ''}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
            
            <Button 
              size="sm" 
              className="ml-1 hidden md:flex rounded-full px-6 gradient-button"
              onClick={() => setIsContactPopupOpen(true)}
            >
              <span>{t('nav.contactUs')}</span>
            </Button>
            
            <div 
              className="ml-3 hidden md:flex" 
              onClick={() => window.location.href = "https://www.spltrr.com/merchant/login"}
            >
              <button 
                className="py-2 px-6 rounded-full"
                style={{ 
                  backgroundColor: isHomePage && !isScrolled ? '#3FA9F5' : 'white', 
                  color: isHomePage && !isScrolled ? 'white' : '#1a202c', 
                  fontWeight: 600,
                  boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
                  border: 'none'
                }}
              >
                <span style={{ 
                  color: isHomePage && !isScrolled ? 'white' : '#1a202c', 
                  fontWeight: 600 
                }}>{t('nav.signIn')}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className={`md:hidden absolute top-full left-0 w-full shadow-lg border-b border-muted ${
              isDarkMode ? 'bg-white text-gray-800' : 'bg-background'
            }`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-4 py-6 space-y-4">
              <Link href="/" className="block px-3 py-2 font-medium hover:bg-muted rounded-lg">
                {t('nav.home')}
              </Link>
              <Link href="/about" className="block px-3 py-2 font-medium hover:bg-muted rounded-lg">
                {t('nav.about')}
              </Link>
              <Link href="/partner" className="block px-3 py-2 font-medium hover:bg-muted rounded-lg">
                {t('nav.partner')}
              </Link>
              <div className="pt-2 space-y-3">
                <Button 
                  className="w-full rounded-full gradient-button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsContactPopupOpen(true);
                  }}
                >
                  <span>{t('nav.contactUs')}</span>
                </Button>
                
                <div
                  className="w-full"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.location.href = "https://www.spltrr.com/merchant/login";
                  }}
                >
                  <button
                    className="w-full py-2 px-6 rounded-full"
                    style={{ 
                      backgroundColor: isHomePage && !isScrolled ? '#3FA9F5' : 'white', 
                      color: isHomePage && !isScrolled ? 'white' : '#1a202c', 
                      fontWeight: 600,
                      boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
                      border: 'none'
                    }}
                  >
                    <span style={{ 
                      color: isHomePage && !isScrolled ? 'white' : '#1a202c', 
                      fontWeight: 600 
                    }}>{t('nav.signIn')}</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
