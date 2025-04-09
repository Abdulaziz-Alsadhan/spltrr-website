import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';

interface CountdownTimerProps {
  minutes: number;
  seconds?: number;
  onTimeUp?: () => void;
  className?: string;
}

export default function CountdownTimer({ 
  minutes = 10, 
  seconds = 0, 
  onTimeUp, 
  className 
}: CountdownTimerProps) {
  const { t } = useLanguage();
  const [timeLeft, setTimeLeft] = useState({
    minutes,
    seconds
  });
  
  const [isActive, setIsActive] = useState(true);
  
  // Format the time with leading zeros
  const formatTime = (value: number) => {
    return value.toString().padStart(2, '0');
  };
  
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isActive) {
      interval = setInterval(() => {
        if (timeLeft.minutes === 0 && timeLeft.seconds === 0) {
          if (interval) clearInterval(interval);
          setIsActive(false);
          if (onTimeUp) onTimeUp();
          return;
        }
        
        if (timeLeft.seconds === 0) {
          setTimeLeft({
            minutes: timeLeft.minutes - 1,
            seconds: 59
          });
        } else {
          setTimeLeft({
            ...timeLeft,
            seconds: timeLeft.seconds - 1
          });
        }
      }, 1000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeLeft, onTimeUp]);
  
  return (
    <span className={`flex items-center ${className}`}>
      <span className="animate-pulse mr-1.5">●</span> 
      {`${t('ui.timeRemaining')}: ${formatTime(timeLeft.minutes)}:${formatTime(timeLeft.seconds)}`}
    </span>
  );
}