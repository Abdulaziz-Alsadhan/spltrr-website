import { useState } from 'react';
import { motion } from 'framer-motion';

interface StepSquareProps {
  number: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
  color?: string;
}

export default function StepSquare({ 
  number, 
  title, 
  description, 
  icon,
  color = 'from-primary to-secondary'
}: StepSquareProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className={`relative rounded-lg border bg-card dark:bg-[hsl(217_33%_17%)] dark:border-[hsl(217_33%_22%)] p-6 shadow-md transition-all duration-300 h-full`}
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Step Number Square */}
      <motion.div 
        className={`absolute -top-5 -left-5 w-12 h-12 flex items-center justify-center rounded bg-gradient-to-br ${color} text-white font-bold text-xl shadow-lg`}
        whileHover={{ scale: 1.1, rotate: 5 }}
        animate={isHovered ? { y: [0, -10, 0], transition: { duration: 0.5 } } : {}}
      >
        {number}
      </motion.div>
      
      <div className="mt-6 mb-2">
        {icon && <div className="mb-3 text-primary dark:text-white">{icon}</div>}
        <h3 className="font-bold text-xl dark:text-white">{title}</h3>
        <p className="mt-2 text-muted-foreground dark:text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
}