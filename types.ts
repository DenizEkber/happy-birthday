export interface StudentMessage {
  id: number;
  name: string;
  avatarColor: string;
  message: string;
  icon: string;
}

export interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
}
