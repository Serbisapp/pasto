import React from 'react';
import { motion } from 'framer-motion';

interface MarqueeProps {
  text: string;
  direction?: 'left' | 'right';
  speed?: number;
  className?: string;
  outline?: boolean;
}

const Marquee: React.FC<MarqueeProps> = ({ text, direction = 'left', speed = 20, className = '', outline = false }) => {
  return (
    <div className={`overflow-hidden whitespace-nowrap flex ${className}`}>
      <motion.div
        className="flex"
        animate={{
          x: direction === 'left' ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        <span className={`text-[8rem] md:text-[12rem] font-black uppercase mx-4 ${outline ? 'text-outline' : 'text-white'}`}>
          {text}
        </span>
        <span className={`text-[8rem] md:text-[12rem] font-black uppercase mx-4 ${outline ? 'text-outline' : 'text-white'}`}>
          {text}
        </span>
         <span className={`text-[8rem] md:text-[12rem] font-black uppercase mx-4 ${outline ? 'text-outline' : 'text-white'}`}>
          {text}
        </span>
         <span className={`text-[8rem] md:text-[12rem] font-black uppercase mx-4 ${outline ? 'text-outline' : 'text-white'}`}>
          {text}
        </span>
      </motion.div>
    </div>
  );
};

export default Marquee;