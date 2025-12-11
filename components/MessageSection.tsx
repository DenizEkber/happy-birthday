import React from 'react';
import { motion } from 'framer-motion';

const MessageSection: React.FC = () => {
  return (
    <section id="message-section" className="min-h-screen flex items-center justify-center relative z-10 p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="glass-card max-w-3xl w-full p-8 md:p-12 rounded-3xl relative overflow-hidden"
      >
        {/* Decorative elements inside card */}
        <div className="absolute top-0 right-0 p-4 opacity-20">
          <svg width="100" height="100" viewBox="0 0 100 100">
            <path d="M50 0 L61 35 L98 35 L68 57 L79 91 L50 70 L21 91 L32 57 L2 35 L39 35 Z" fill="#F472B6" />
          </svg>
        </div>

        <div className="text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
             <h2 className="text-3xl md:text-4xl font-serif text-pink-600 mb-6">Dear Teacher,</h2>
             <div className="text-xl md:text-2xl font-handwriting text-gray-700 leading-loose space-y-4">
               <p>
                 Today is not just your birthday — it is a celebration of all the knowledge,
                 kindness, patience, and inspiration you share with us every day.
               </p>
               <p>
                 You make learning meaningful, you make difficult things simple,
                 and you make the classroom feel like a second home.
               </p>
               <p>
                 Thank you for being the heart of our class.
                 We wish you endless happiness, health, and success.
               </p>
               <p className="text-3xl mt-8 font-bold text-pink-500">
                 Happy Birthday! 🎉💐
               </p>
             </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default MessageSection;