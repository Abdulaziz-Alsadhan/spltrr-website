import React from 'react';
import { SARSymbol } from '@/components/SARSymbol';
import { useLanguage } from '@/hooks/useLanguage';

interface CurrencyDisplayProps {
  amount: number | string;
  className?: string;
}

export function CurrencyDisplay({ amount, className = '' }: CurrencyDisplayProps) {
  const { language } = useLanguage();
  
  // Always set dir="ltr" to ensure consistent left-to-right display
  // This follows Saudi convention where SAR symbol always appears on the left
  return (
    <span className={`currency-display inline ${className}`} dir="ltr" style={{ unicodeBidi: 'isolate' }}>
      <SARSymbol />
      <span className="mx-0.5"></span>
      {typeof amount === 'number' ? amount.toFixed(2) : amount}
    </span>
  );
}