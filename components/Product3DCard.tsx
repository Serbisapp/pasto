import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Product } from '../types.ts';

interface Props {
  product: Product;
  index: number;
}

const Product3DCard: React.FC<Props> = ({ product, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 1000, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 1000, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["35deg", "-35deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-35deg", "35deg"]);
  const skewX = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="relative w-full aspect-[3/4] perspective-1000 group cursor-none mb-12"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          skewX,
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full relative"
      >
        {/* Edgy wireframe box */}
        <div className="absolute -inset-4 border-2 border-[#ccff00] opacity-0 group-hover:opacity-100 transition-opacity duration-75 z-0" 
             style={{ transform: "translateZ(-40px) rotate(5deg)" }}></div>
        
        <div className="absolute inset-0 bg-[#000] border border-[#333] group-hover:border-[#ccff00] group-hover:bg-[#111] transition-colors z-10"></div>

        {/* Glitchy Image Layer */}
        <div 
            style={{ transform: "translateZ(30px)" }}
            className="absolute inset-2 overflow-hidden bg-white"
        >
            <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-150 transition-all duration-100 group-hover:scale-125 group-hover:hue-rotate-90"
            />
             {/* Random glitch bars on hover */}
             <div className="absolute inset-0 bg-[#ccff00] opacity-0 group-hover:opacity-20 mix-blend-color-burn"></div>
        </div>

        {/* Floating Info */}
        <div 
             style={{ transform: "translateZ(80px)" }}
             className="absolute -top-4 -right-4 bg-white text-black font-black text-xl px-4 py-2 border-2 border-black rotate-3 group-hover:-rotate-3 transition-transform"
        >
            ${product.price}
        </div>

        <div 
             style={{ transform: "translateZ(60px)" }}
             className="absolute bottom-4 left-4 right-4"
        >
            <h3 className="text-4xl font-black uppercase leading-none text-white mix-blend-difference group-hover:animate-pulse">{product.name}</h3>
            <div className="h-1 w-full bg-[#ccff00] mt-2 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Product3DCard;