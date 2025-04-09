import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, CreditCard, Store, ShoppingCart, ArrowUpRight, Code, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

export default function Partner() {
  const { t, language } = useLanguage();
  
  const handleContactClick = () => {
    window.location.href = "mailto:info@spltrr.com";
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="mb-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500"
          >
            {t('partner.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
          >
            {t('partner.subtitle')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button 
              size="lg" 
              className="rounded-full px-8 py-6 text-lg gradient-button"
              onClick={handleContactClick}
            >
              <span>
                {t('partner.contactUs')}
              </span>
            </Button>
          </motion.div>
        </div>

        {/* Main Benefit Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg">
            <h2 className="text-3xl font-bold mb-10 text-center">{t('partner.benefits.title')}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
              <div className="flex">
                <div className="mr-4 mt-1">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full">
                    <ShoppingCart className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{t('partner.benefits.cart.title')}</h3>
                  <p className="text-muted-foreground">
                    {t('partner.benefits.cart.description')}
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4 mt-1">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full">
                    <ArrowUpRight className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{t('partner.benefits.aov.title')}</h3>
                  <p className="text-muted-foreground">
                    {t('partner.benefits.aov.description')}
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4 mt-1">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{t('merchant.plugAndPlay.title')}</h3>
                  <p className="text-muted-foreground">
                    {t('merchant.plugAndPlay.description')}
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4 mt-1">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full">
                    <ShieldCheck className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{t('merchant.secure.title')}</h3>
                  <p className="text-muted-foreground">
                    {t('merchant.secure.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Integration Showcase */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center">{t('partner.showcase.title')}</h2>
            <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-muted-foreground">
              {t('partner.showcase.subtitle')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 mb-4 rounded-full bg-green-500/10 flex items-center justify-center">
                  <Store className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t('partner.showcase.ecommerce.title')}</h3>
                <p className="text-muted-foreground mb-4">
                  {t('partner.showcase.ecommerce.description')}
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="rounded-full"
                  onClick={handleContactClick}
                >
                  <span>{t('partner.learnMore')}</span>
                </Button>
              </div>
              
              <div className="bg-background rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 mb-4 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <CreditCard className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t('partner.showcase.travel.title')}</h3>
                <p className="text-muted-foreground mb-4">
                  {t('partner.showcase.travel.description')}
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="rounded-full"
                  onClick={handleContactClick}
                >
                  <span>{t('partner.learnMore')}</span>
                </Button>
              </div>
              
              <div className="bg-background rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-green-500/10 to-blue-500/10 flex items-center justify-center">
                  <ShoppingCart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t('partner.showcase.food.title')}</h3>
                <p className="text-muted-foreground mb-4">
                  {t('partner.showcase.food.description')}
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="rounded-full"
                  onClick={handleContactClick}
                >
                  <span>{t('partner.learnMore')}</span>
                </Button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* How It Works */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg">
            <h2 className="text-3xl font-bold mb-10 text-center">{t('partner.howItWorks.title')}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <div className="rounded-xl overflow-hidden h-72 bg-gradient-to-r from-green-500/10 to-blue-500/10 flex items-center justify-center mb-6">
                  <div className="p-4 rounded-xl bg-card inline-flex">
                    <svg width="280" height="120" viewBox="0 0 280 120">
                      <rect x="10" y="10" width="260" height="100" rx="8" fill="none" stroke="currentColor" strokeWidth="2" />
                      <rect x="20" y="30" width="160" height="30" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
                      <rect x="20" y="70" width="80" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
                      <rect x="110" y="70" width="80" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />
                      <text x="190" y="84" fontSize="10" fill="currentColor">{t('partner.howItWorks.splitPayment')}</text>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{t('partner.howItWorks.step1.title')}</h3>
                <p className="text-muted-foreground">
                  {t('partner.howItWorks.step1.description')}
                </p>
              </div>
              
              <div>
                <div className="rounded-xl overflow-hidden h-72 bg-gradient-to-r from-green-500/10 to-blue-500/10 flex items-center justify-center mb-6">
                  <div className="p-4 rounded-xl bg-card inline-flex">
                    <svg width="280" height="120" viewBox="0 0 280 120">
                      <rect x="10" y="10" width="260" height="100" rx="8" fill="none" stroke="currentColor" strokeWidth="2" />
                      <circle cx="60" cy="40" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
                      <circle cx="140" cy="40" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
                      <circle cx="220" cy="40" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
                      <line x1="80" y1="40" x2="120" y2="40" stroke="currentColor" strokeWidth="2" />
                      <line x1="160" y1="40" x2="200" y2="40" stroke="currentColor" strokeWidth="2" />
                      <rect x="40" y="80" width="200" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
                      <text x="95" y="94" fontSize="10" fill="currentColor">{t('partner.howItWorks.settlementWindow')}</text>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{t('partner.howItWorks.step2.title')}</h3>
                <p className="text-muted-foreground">
                  {t('partner.howItWorks.step2.description')}
                </p>
              </div>
            </div>
          </div>
        </motion.section>


      </div>
    </div>
  );
}