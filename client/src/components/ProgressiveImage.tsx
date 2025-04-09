import { useState, useEffect } from 'react';

interface ProgressiveImageProps {
  src: string;
  lowQualitySrc: string;
  alt: string;
  className?: string;
}

export default function ProgressiveImage({ 
  src, 
  lowQualitySrc, 
  alt,
  className = "" 
}: ProgressiveImageProps) {
  const [imgSrc, setImgSrc] = useState(lowQualitySrc || src);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Reset state when src changes
    setImgSrc(lowQualitySrc || src);
    setIsLoaded(false);
    
    // Only load high quality image if we have a low quality placeholder
    if (lowQualitySrc) {
      const img = new Image();
      img.src = src;
      
      img.onload = () => {
        setImgSrc(src);
        setIsLoaded(true);
      };
    }
  }, [src, lowQualitySrc]);
  
  return (
    <img 
      src={imgSrc} 
      alt={alt} 
      className={`${className} ${lowQualitySrc ? 'blur-up' : ''} ${isLoaded ? 'loaded' : ''}`}
      loading="lazy"
    />
  );
}
