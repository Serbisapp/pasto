import React, { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-6 flex justify-between items-start mix-blend-difference text-white pointer-events-none">
        <div className="pointer-events-auto">
          <a href="#" className="font-black text-2xl tracking-tighter">PASTO®</a>
        </div>
        
        <div className="flex gap-4 pointer-events-auto">
          <button data-hover="true" className="font-mono text-sm hidden md:block hover:underline">CARRITO (0)</button>
          <button 
            data-hover="true"
            onClick={() => setIsOpen(!isOpen)} 
            className="flex flex-col gap-1.5 items-end justify-center w-8 h-8 group"
          >
             <div className={`h-[2px] bg-white transition-all ${isOpen ? 'w-8 rotate-45 translate-y-2' : 'w-8'}`}></div>
             <div className={`h-[2px] bg-white transition-all ${isOpen ? 'opacity-0' : 'w-6 group-hover:w-8'}`}></div>
             <div className={`h-[2px] bg-white transition-all ${isOpen ? 'w-8 -rotate-45 -translate-y-2' : 'w-4 group-hover:w-8'}`}></div>
          </button>
        </div>
      </nav>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-[#ccff00] z-30 flex items-center justify-center text-black"
          >
             <div className="flex flex-col text-center space-y-4">
                {['Tienda', 'Colecciones', 'Nosotros', 'Contacto'].map((item, i) => (
                    <motion.a
                        key={item}
                        href="#"
                        data-hover="true"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * i + 0.3 }}
                        className="text-7xl md:text-9xl font-black uppercase tracking-tighter hover:text-white transition-colors hover:italic"
                        onClick={() => setIsOpen(false)}
                    >
                        {item}
                    </motion.a>
                ))}
             </div>
             
             <div className="absolute bottom-10 left-10 font-mono text-sm">
                <p>PASTO WORLDWIDE INC.</p>
                <p>© 2025</p>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;