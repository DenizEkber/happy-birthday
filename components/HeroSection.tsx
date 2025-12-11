import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onScrollDown: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollDown }) => {
  const text = "Happy Birthday, Dear Teacher!";
  
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative z-10 p-4">
      {/* Balloons Decoration (Static SVGs with float animation) */}
      <motion.div 
        animate={{ y: [0, -20, 0] }} 
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute top-10 left-[10%] opacity-80"
      >
        <span className="text-6xl filter drop-shadow-md">🎈</span>
      </motion.div>
      <motion.div 
        animate={{ y: [0, -30, 0] }} 
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
        className="absolute top-20 right-[15%] opacity-80"
      >
        <span className="text-7xl filter drop-shadow-md">✨</span>
      </motion.div>

      {/* Main Content */}
      <div className="text-center max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-serif text-gray-800 mb-8 font-bold leading-tight">
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {char}
            </motion.span>
          ))}
        </h1>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <button
            onClick={onScrollDown}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-xl font-bold text-white transition-all duration-200 bg-gradient-to-r from-pink-400 to-purple-400 font-sans rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-400 hover:scale-105 hover:shadow-xl"
          >
            Tap to Reveal Surprise 🎁
            <div className="absolute -inset-3 rounded-full bg-pink-300 opacity-20 group-hover:opacity-40 blur-lg transition-opacity duration-200" />
          </button>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-10 text-gray-400"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default HeroSection;