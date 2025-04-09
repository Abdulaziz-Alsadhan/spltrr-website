import { Link } from 'wouter';
import { Zap, Twitter, ExternalLink, ChevronRight, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import logoReverse from '../assets/spltrr-logo-main-reverse.png';
import { useLanguage } from '@/hooks/useLanguage';

export default function Footer() {
  const { t, language } = useLanguage();
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center">
              <img 
                src={logoReverse} 
                alt="SPLTRR Logo" 
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 text-white/60">
              {t('footer.companyDescription')}
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://x.com/SpltrrSA" target="_blank" rel="noopener noreferrer" 
                 className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/spltrr/" target="_blank" rel="noopener noreferrer" 
                 className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">{t('footer.sections.company')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-white/60 hover:text-white transition-colors flex items-center">
                  <ChevronRight className="h-3 w-3 mr-1" /> {t('footer.links.aboutUs')}
                </Link>
              </li>
              <li>
                <Link href="/partner" className="text-white/60 hover:text-white transition-colors flex items-center">
                  <ChevronRight className="h-3 w-3 mr-1" /> {t('footer.links.partnerWithUs')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-white/10" />
        
        <div className="pt-8 flex justify-center">
          <div className="text-white/50 text-sm text-center">
            {language === 'ar' ? 
              `© ${new Date().getFullYear()} سبلتر، جميع الحقوق محفوظة` : 
              `© ${new Date().getFullYear()} SPLTRR, All rights reserved.`
            }
          </div>
        </div>
      </div>
    </footer>
  );
}
