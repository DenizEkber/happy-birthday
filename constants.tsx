import { StudentMessage } from './types';
import { BookOpen, Star, Heart, Lightbulb } from 'lucide-react';

export const STUDENT_MESSAGES: StudentMessage[] = [
  {
    id: 1,
    name: "Deniz Akbar",
    avatarColor: "bg-blue-200",
    message: "Thank you for everything",
    icon: "Heart"
  },
  {
    id: 2,
    name: "Elon Musk",
    avatarColor: "bg-pink-200",
    message: "You inspire us daily",
    icon: "Star"
  },
  {
    id: 3,
    name: "Mark Zuckerberg",
    avatarColor: "bg-purple-200",
    message: "We appreciate you",
    icon: "BookOpen"
  },
  {
    id: 4,
    name: "Donald Trump",
    avatarColor: "bg-green-200",
    message: "You're the best teacher! Fantastic!",
    icon: "Lightbulb"
  }
];

// Happy Birthday audio (Reliable MP3 source)
export const AUDIO_URL = "https://media.geeksforgeeks.org/wp-content/uploads/20230524143204/happy-birthday-music.mp3";