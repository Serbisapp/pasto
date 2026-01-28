import React from 'react';
import { motion } from 'framer-motion';

const Manifesto: React.FC = () => {
  return (
    <section className="bg-[#ccff00] text-black py-32 relative overflow-hidden">
      
      {/* Moving pattern background */}
      <motion.div 
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-[200%] h-[200%] bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] opacity-20 pointer-events-none"
      ></motion.div>

      {/* Floating Shapes */}
      <motion.div 
         animate={{ rotate: 360 }}
         transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
         className="absolute -top-20 -right-20 w-96 h-96 border-4 border-black rounded-full border-dashed"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4 font-mono text-sm border-t border-black pt-4">
                <motion.div animate={{ x: [-2, 2, -2] }} transition={{ duration: 0.2, repeat: Infinity }}>
                    <p>EST. 2024</p>
                    <p>SECTOR 7</p>
                    <p>TIERRA</p>
                </motion.div>
            </div>
            <div className="lg:col-span-8 mix-blend-hard-light">
                <motion.h2 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter uppercase"
                >
                    <motion.span 
                        className="inline-block"
                        whileHover={{ scale: 1.1, rotate: 2, color: "#fff" }}
                    >
                        No solo vendemos gorros.
                    </motion.span> 
                    <br/>
                    <span className="text-white bg-black px-2 inline-block transform -skew-x-12 hover:skew-x-12 transition-transform">Vendemos armadura</span> <br/>
                    para tu <br/>
                    <motion.span 
                        className="italic inline-block text-outline font-serif"
                        animate={{ skewX: [0, -20, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        lóbulo frontal.
                    </motion.span>
                </motion.h2>
                <p className="mt-8 text-xl md:text-3xl font-bold max-w-2xl leading-none uppercase">
                    El headwear tradicional ha muerto. Pasto es un fallo en la simulación. Diseñado en el vacío, usado en las calles.
                </p>
                
                <div className="mt-12 grid grid-cols-2 gap-4">
                    <div className="border-4 border-black p-8 hover:bg-black hover:text-[#ccff00] hover:scale-105 transition-all cursor-crosshair">
                        <span className="block text-5xl font-black mb-2">100%</span>
                        <span className="font-mono text-xs uppercase animate-pulse">Acrílico Sin Sintéticos</span>
                    </div>
                     <div className="border-4 border-black p-8 hover:bg-black hover:text-[#ccff00] hover:scale-105 transition-all cursor-crosshair">
                        <span className="block text-5xl font-black mb-2">∞</span>
                        <span className="font-mono text-xs uppercase animate-pulse">Duración de Garantía</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;