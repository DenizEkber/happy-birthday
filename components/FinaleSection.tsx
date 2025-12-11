import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Gift, Cake } from 'lucide-react';

const FinaleSection: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => {
    if (isOpened) return;
    setIsOpened(true);
    
    // Trigger confetti
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#f472b6', '#c084fc', '#fbbf24']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#f472b6', '#c084fc', '#fbbf24']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative z-10 pb-20">
      <div className="relative w-full max-w-md h-96 flex items-center justify-center">
        <AnimatePresence>
          {!isOpened ? (
            <motion.div
              key="gift"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0, rotate: 180 }}
              whileHover={{ scale: 1.1, rotate: [-2, 2, -2] }}
              onClick={handleOpen}
              className="cursor-pointer flex flex-col items-center"
            >
              <Gift size={200} className="text-pink-500 drop-shadow-2xl" strokeWidth={1} />
              <p className="mt-8 text-2xl font-serif text-gray-600 animate-pulse">Click to open!</p>
            </motion.div>
          ) : (
            <motion.div
              key="cake"
              initial={{ scale: 0, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ type: "spring", bounce: 0.5, duration: 1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative group">
                 {/* Simplified Cake SVG Construction */}
                 <div className="relative">
                    <Cake size={240} className="text-pink-500 drop-shadow-2xl" strokeWidth={1} />
                    {/* Animated Candles Overlay (Simulated) */}
                    <motion.div 
                        className="absolute top-2 left-1/2 -translate-x-1/2 -translate-y-4 flex gap-4 opacity-80"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                         {[1, 2, 3].map((i) => (
                             <motion.div 
                                key={i}
                                className="w-2 h-6 bg-yellow-400 rounded-full blur-[2px]"
                                animate={{ scaleY: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                                transition={{ repeat: Infinity, duration: 0.2, delay: i * 0.1 }}
                             />
                         ))}
                    </motion.div>
                 </div>
              </div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-5xl md:text-7xl font-handwriting font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mt-8 drop-shadow-sm"
              >
                Happy Birthday, Teacher!
              </motion.h1>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FinaleSection;