import React from 'react';
import FloatingParticles from './components/FloatingParticles';
import ClickSparkles from './components/ClickSparkles';
import AudioControl from './components/AudioControl';
import HeroSection from './components/HeroSection';
import MessageSection from './components/MessageSection';
import TributeSection from './components/TributeSection';
import FinaleSection from './components/FinaleSection';

const App: React.FC = () => {
  const scrollToMessage = () => {
    const element = document.getElementById('message-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="relative w-full min-h-screen overflow-hidden selection:bg-pink-200 selection:text-pink-900">
      {/* Global Effects */}
      <FloatingParticles />
      <ClickSparkles />
      <AudioControl />

      {/* Sections */}
      <HeroSection onScrollDown={scrollToMessage} />
      <MessageSection />
      <TributeSection />
      <FinaleSection />

      {/* Footer */}
      <footer className="py-8 text-center relative z-10 glass-card mt-12">
        <p className="text-gray-600 font-serif">Made with ❤️ by your students</p>
      </footer>
    </main>
  );
};

export default App;