import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Sparkle {
  id: number;
  x: number;
  y: number;
}

const ClickSparkles: React.FC = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newSparkle = { id: Date.now(), x: e.clientX, y: e.clientY };
      setSparkles((prev) => [...prev, newSparkle]);
      
      // Cleanup
      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== newSparkle.id));
      }, 1000);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 1.5, opacity: 0, y: -50 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute text-2xl"
            style={{ left: sparkle.x - 12, top: sparkle.y - 12 }}
          >
            ❤️
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ClickSparkles;