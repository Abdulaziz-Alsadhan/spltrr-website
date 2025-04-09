import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Clock, Shield, CreditCard, BarChart, Target, Building, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import MerchantFeatures from '@/components/MerchantFeatures';
import ContactPopup from '@/components/ContactPopup';

export default function About() {
  const { t, language } = useLanguage();
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  
  const handleContactClick = () => {
    setIsContactPopupOpen(true);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Contact Popup */}
      <ContactPopup isOpen={isContactPopupOpen} onClose={() => setIsContactPopupOpen(false)} />
      
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="mb-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500"
          >
            {t('about.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            {t('about.subtitle')}
          </motion.p>
        </div>

        {/* Vision & Mission Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 md:p-10 shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2 hover:shadow-green-500/20 cursor-pointer">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mr-4 transition-transform duration-300 group-hover:scale-110">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">{t('about.vision.title')}</h2>
              </div>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p>
                  {t('about.vision.content')}
                </p>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 md:p-10 shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2 hover:shadow-blue-500/20 cursor-pointer">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mr-4 transition-transform duration-300 group-hover:scale-110">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">{t('about.mission.title')}</h2>
              </div>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p>
                  {t('about.mission.content')}
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.4,
            type: "spring",
            stiffness: 100
          }}
          className="max-w-4xl mx-auto mb-20 bg-gradient-to-r from-blue-500/10 to-green-500/10 backdrop-blur-sm rounded-2xl p-10 border border-blue-500/20 shadow-xl"
        >
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold text-center mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
              {t('about.cta.animated.title')}
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="text-lg text-center mb-8 max-w-2xl mx-auto text-foreground"
          >
            {t('about.cta.animated.description')}
          </motion.p>
          
          <motion.div 
            className="flex justify-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Button 
              size="lg" 
              className="gradient-button rounded-full px-10 py-6 text-white text-lg font-medium hover:text-white hover:shadow-lg transition-all duration-300"
              onClick={handleContactClick}
            >
              <span className="relative z-10">{t('about.contactTeam')}</span>
            </Button>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}