import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Shield, ShoppingCart, BarChart3, SplitSquareVertical } from 'lucide-react';

interface MerchantFeatureProps {
  className?: string;
}

export default function MerchantFeatures({ className = '' }: MerchantFeatureProps) {
  const { t, language } = useLanguage();
  
  console.log('Current language in MerchantFeatures:', language);
  console.log('Merchant secure title:', t('merchant.secure.title'));
  console.log('Merchant secure description:', t('merchant.secure.description'));
  
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${className}`}>
      <div className="bg-card rounded-lg p-6 flex flex-col items-center text-center">
        <div className="w-12 h-12 mb-4 flex items-center justify-center bg-primary/10 rounded-full">
          <ShoppingCart className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-bold mb-2">
          {t('home.merchants.feature1')}
        </h3>
        <p className="text-muted-foreground">
          {t('merchant.plugAndPlay.description')}
        </p>
      </div>
      
      <div className="bg-card rounded-lg p-6 flex flex-col items-center text-center">
        <div className="w-12 h-12 mb-4 flex items-center justify-center bg-primary/10 rounded-full">
          <BarChart3 className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-bold mb-2">
          {t('home.merchants.feature2')}
        </h3>
        <p className="text-muted-foreground">
          {t('home.merchants.feature2.description')}
        </p>
      </div>
      
      <div className="bg-card rounded-lg p-6 flex flex-col items-center text-center">
        <div className="w-12 h-12 mb-4 flex items-center justify-center bg-primary/10 rounded-full">
          <SplitSquareVertical className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-bold mb-2">
          {t('home.merchants.feature3')}
        </h3>
        <p className="text-muted-foreground">
          {t('home.merchants.feature3.description')}
        </p>
      </div>
      
      <div className="bg-card rounded-lg p-6 flex flex-col items-center text-center">
        <div className="w-12 h-12 mb-4 flex items-center justify-center bg-primary/10 rounded-full">
          <Shield className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-bold mb-2">
          {t('merchant.secure.title')}
        </h3>
        <p className="text-muted-foreground">
          {t('merchant.secure.description')}
        </p>
      </div>
    </div>
  );
}