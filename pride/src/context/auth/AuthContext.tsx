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
    school: 'Facultad de Ingenieria Mecanica y Electrica'
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
