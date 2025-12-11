import React from 'react';
import { motion } from 'framer-motion';
import { STUDENT_MESSAGES } from '../constants';
import { Heart, Star, BookOpen, Lightbulb } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Heart: <Heart className="w-6 h-6 text-white" fill="currentColor" />,
  Star: <Star className="w-6 h-6 text-white" fill="currentColor" />,
  BookOpen: <BookOpen className="w-6 h-6 text-white" />,
  Lightbulb: <Lightbulb className="w-6 h-6 text-white" />,
};

const TributeSection: React.FC = () => {
  return (
    <section className="min-h-screen py-20 flex flex-col items-center justify-center relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-serif text-gray-800 mb-16 text-center"
      >
        With Love, From Your Students ❤️
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 max-w-6xl w-full">
        {STUDENT_MESSAGES.map((student, index) => (
          <motion.div
            key={student.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            animate={{ 
              y: [0, -10, 0] 
            }}
            // Add randomness to float
            //@ts-ignore - TS sometimes complains about transition on animate props in loops, but it is valid framer syntax
            transition={{ 
                y: {
                    repeat: Infinity,
                    duration: 3 + Math.random(),
                    ease: "easeInOut",
                    delay: Math.random()
                }
            }}
            className="flex flex-col items-center"
          >
            <div className={`w-24 h-24 rounded-full ${student.avatarColor} flex items-center justify-center shadow-lg mb-4 transform hover:scale-110 transition-transform duration-300`}>
              {iconMap[student.icon]}
            </div>
            <div className="glass-card p-4 rounded-xl text-center w-full min-h-[120px] flex flex-col justify-center">
              <p className="text-gray-700 italic font-handwriting text-xl mb-2">"{student.message}"</p>
              <p className="text-gray-500 text-sm font-bold font-sans">- {student.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TributeSection;