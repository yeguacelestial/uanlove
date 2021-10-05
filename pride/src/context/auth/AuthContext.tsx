import { createContext } from 'react';
import User from '@shared/User';

export type AuthContextType = {
  signUp: () => Promise<void>;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
  user: User | null;
  setUser: (_: AuthContextType['user']) => void;
};

export const DefaultAuthContextState: AuthContextType = {
  user: {
    gender: 'Man',
    name: 'Gabriel Emilio',
    age: '21',
    bio: 'Mi bio',
    email: 'gabriel.emilio@uanl.edu.mx',
    school: 'Facultad de Ingenieria Mecanica y Electrica',
    pictures: [
      'https://image.shutterstock.com/image-photo/head-shot-portrait-smiling-middle-600w-1339318991.jpg',
      'https://i.pinimg.com/originals/69/59/fa/6959fa736605235642d0f057e6cf9795.jpg',
      'https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-600w-1640944705.jpg'
    ]
  },
  signUp: async () => {
    return;
  },
  signIn: async () => {
    return;
  },
  signOut: async () => {
    return;
  },
  setUser: () => {
    return;
  }
};

const AuthContext = createContext<AuthContextType>(DefaultAuthContextState);

export default AuthContext;
