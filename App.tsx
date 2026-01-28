import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import CustomCursor from './components/CustomCursor.tsx';
import Navigation from './components/Navigation.tsx';
import Hero from './components/Hero.tsx';
import Marquee from './components/Marquee.tsx';
import Product3DCard from './components/Product3DCard.tsx';
import Manifesto from './components/Manifesto.tsx';
import { Product } from './types.ts';

// Only Drop 1 Product
const PRODUCTS: Product[] = [
  { 
    id: '1', 
    name: 'The OG Beanie', 
    price: 45.00, 
    // REPLACE WITH YOUR IMAGE URL
    image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&q=80&w=800', 
    color: 'Maroon / Pink' 
  },
];

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load for drama
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
      return (
          <div className="h-screen w-screen bg-black flex items-center justify-center text-[#ccff00] font-mono overflow-hidden">
             <motion.div 
                animate={{ 
                    scale: [1, 5, 1], 
                    rotate: [0, 90, 180, 270, 360],
                    borderRadius: ["20%", "50%", "20%"]
                }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                className="w-24 h-24 border-8 border-[#ccff00] bg-black"
             />
             <div className="absolute bottom-10 animate-pulse text-xl tracking-widest">LOADING DROP 1...</div>
          </div>
      )
  }

  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-[#ccff00] selection:text-black overflow-x-hidden">
      <CustomCursor />
      <Navigation />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-[#ccff00] origin-left z-50 mix-blend-exclusion"
        style={{ scaleX }}
      />
      
      <main className="relative z-10">
        <Hero />
        
        <div className="relative rotate-1 z-20 mix-blend-difference">
            <Marquee text="ÚSALO FUERTE /// SIN FEKA ///" className="bg-[#ccff00] text-black border-y-4 border-black" />
        </div>
        
        <div className="relative -rotate-1 z-10 scale-110">
            <Marquee text="ENVÍOS GLOBALES /// ETHOS DIGITAL ///" direction="right" className="bg-transparent text-white border-b-4 border-white py-4 backdrop-blur-sm" outline />
        </div>

        <section id="shop" className="py-32 px-4 container mx-auto relative min-h-[80vh] flex flex-col justify-center">
             {/* Warped Background Element */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-r from-purple-900 to-blue-900 rounded-full blur-[100px] opacity-20 animate-pulse pointer-events-none"></div>

            <div className="flex flex-col items-center mb-16 border-b-4 border-white pb-8">
                <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter hover:text-outline-acid transition-all duration-300 hover:skew-x-6 cursor-none text-center">
                    DROP <span className="text-[#ccff00]">1</span>
                </h2>
                <div className="font-mono text-[#ccff00] mt-4 flex gap-8">
                    <p className="animate-pulse">AVAILABLE NOW</p>
                    <p>LIMITED STOCK</p>
                </div>
            </div>

            <div className="flex justify-center w-full">
                <div className="w-full max-w-md">
                    {PRODUCTS.map((product, index) => (
                        <Product3DCard key={product.id} product={product} index={index} />
                    ))}
                </div>
            </div>
        </section>

        <Manifesto />

        <section className="h-[80vh] flex flex-col items-center justify-center relative overflow-hidden bg-black">
             <video 
                autoPlay 
                muted 
                loop 
                className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity scale-125"
                src="https://assets.mixkit.co/videos/preview/mixkit-glitch-effect-on-a-black-background-3624-large.mp4" 
            />
            {/* Overlay Grid */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            
            <div className="relative z-10 text-center space-y-6 max-w-2xl mx-auto px-4">
                <h3 className="text-5xl md:text-8xl font-black uppercase text-white mix-blend-overlay hover:mix-blend-normal transition-all duration-300">Únete al culto</h3>
                <div className="flex w-full border-4 border-white hover:border-[#ccff00] transition-colors bg-black transform hover:scale-105 duration-200">
                    <input type="email" placeholder="TU EMAIL AQUÍ" className="bg-transparent w-full p-6 outline-none font-mono text-white placeholder-gray-500 text-xl uppercase" />
                    <button data-hover="true" className="bg-white text-black px-12 font-black text-xl hover:bg-[#ccff00] transition-colors border-l-4 border-black">ENVIAR</button>
                </div>
                <p className="font-mono text-xs text-gray-500 tracking-[0.5em] animate-pulse">HACEMOS SPAM DURO.</p>
            </div>
        </section>

        <Marquee text="PASTO" speed={2} className="py-0 opacity-50 pointer-events-none absolute bottom-0 z-0 mix-blend-overlay" outline />

        <footer className="bg-[#050505] py-12 border-t border-[#333] relative z-20">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-end">
                <div className="group">
                    <h1 className="text-[15vw] leading-[0.8] font-black tracking-tighter text-[#ccff00] opacity-20 group-hover:opacity-100 transition-all duration-100 group-hover:skew-x-12">PASTO</h1>
                </div>
                <div className="flex flex-col md:flex-row gap-8 font-mono text-sm mt-8 md:mt-0 text-gray-500">
                    <a href="#" className="hover:text-[#ccff00] hover:scale-125 transition-transform inline-block">INSTAGRAM</a>
                    <a href="#" className="hover:text-[#ccff00] hover:scale-125 transition-transform inline-block">TIKTOK</a>
                    <a href="#" className="hover:text-[#ccff00] hover:scale-125 transition-transform inline-block">DISCORD</a>
                    <span className="text-[#333]">///</span>
                    <a href="#" className="hover:text-white transition-colors">LEGAL</a>
                </div>
            </div>
        </footer>
      </main>
    </div>
  );
};

export default App;