import React from 'react';
import FloatingParticles from './components/FloatingParticles.tsx';
import ClickSparkles from './components/ClickSparkles.tsx';
import HeroSection from './components/HeroSection.tsx';
import MessageSection from './components/MessageSection.tsx';
import TributeSection from './components/TributeSection.tsx';
import FinaleSection from './components/FinaleSection.tsx';
import AudioControl from './components/AudioControl.tsx';

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
      <AudioControl />
      <FloatingParticles />
      <ClickSparkles />

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