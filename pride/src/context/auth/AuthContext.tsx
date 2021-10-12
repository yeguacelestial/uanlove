import { createContext } from 'react';

import User, { WritableUser } from '@shared/User';

export type AuthContextType = {
  user: User | null;
  signUp: () => Promise<void>;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
  saveUser: (user: Partial<WritableUser>) => Promise<void>;
  setUser: (user: AuthContextType['user']) => void;
};

export const DefaultAuthContextState: AuthContextType = {
  /*
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
  */
  user: null,
  signUp: async () => {
    return;
  },
  signIn: async () => {
    return;
  },
  signOut: async () => {
    return;
  },
  saveUser: async () => {
    return;
  },
  // TODO: Remove setUser all changes need to be made from saveUser.
  setUser: () => {
    return;
  }
};

const AuthContext = createContext<AuthContextType>(DefaultAuthContextState);

export default AuthContext;
