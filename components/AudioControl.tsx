import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { AUDIO_URL } from '../constants';

const AudioControl: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(AUDIO_URL);
    audioRef.current.loop = true;
    
    // Attempt autoplay on load - browsers often block this
    const attemptPlay = async () => {
      try {
        if (audioRef.current) {
          await audioRef.current.play();
          setIsPlaying(true);
        }
      } catch (err) {
        // Autoplay failed, waiting for interaction
        console.log("Autoplay blocked, waiting for user interaction");
      }
    };

    attemptPlay();

    // Global click listener to start audio if it hasn't started
    const handleFirstInteraction = () => {
      if (audioRef.current && audioRef.current.paused) {
         audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    };

    window.addEventListener('click', handleFirstInteraction, { once: true });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      window.removeEventListener('click', handleFirstInteraction);
    };
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={toggleAudio}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/50 backdrop-blur-md shadow-lg hover:bg-white/80 transition-all border border-pink-200 text-pink-600"
      aria-label={isPlaying ? "Mute Music" : "Play Music"}
    >
      {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
    </button>
  );
};

export default AudioControl;