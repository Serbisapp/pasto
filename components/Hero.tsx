import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useTime } from 'framer-motion';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const time = useTime();
  
  // Kept the background rotation but slowed it down significantly for less nausea
  const rotate1 = useTransform(time, [0, 10000], [0, 360], { clamp: false });
  const rotate2 = useTransform(time, [0, 10000], [360, 0], { clamp: false });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505]">
      
      {/* Background Layers - Subtle Vortex */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-20">
        {[...Array(5)].map((_, i) => (
           <motion.div
             key={i}
             style={{ 
                rotate: i % 2 === 0 ? rotate1 : rotate2,
             }}
             className={`absolute border-[1px] ${i % 2 === 0 ? 'border-[#ccff00]' : 'border-white'} rounded-full`}
             initial={{ width: 300 * (i + 1), height: 300 * (i + 1) }}
           />
        ))}
      </div>

      {/* The Background Text Vortex */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none mix-blend-exclusion opacity-10">
         {[...Array(6)].map((_, i) => (
            <motion.div
                key={i}
                style={{
                    rotate: i % 2 === 0 ? rotate1 : rotate2,
                }}
                className="absolute"
            >
                <div 
                    className="font-black text-[20vw] text-transparent leading-none whitespace-nowrap"
                    style={{ WebkitTextStroke: '2px #ccff00' }}
                >
                    PASTO PASTO
                </div>
            </motion.div>
         ))}
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 text-center flex flex-col items-center w-full mix-blend-difference">
        
        {/* Static, Clean Title */}
        <div className="relative">
            <h1 className="text-[18vw] leading-none font-black tracking-tighter text-white">
                PASTO<sup className="text-[4vw] align-top">©</sup>
            </h1>
        </div>
        
        <div className="mt-12 flex gap-4 pointer-events-auto">
             <button data-hover="true" className="group relative px-12 py-6 bg-[#ccff00] text-black font-mono text-xl font-bold overflow-hidden hover:invert transition-all">
                <span className="relative z-10 group-hover:animate-pulse">SHOP DROP 1</span>
             </button>
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;