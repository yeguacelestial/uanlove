import User from '@shared/User';

interface AuthContextState {
  signUp: () => Promise<void>;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
  user: User | null;
  setUser: (_: AuthContextState['user']) => void;
}

export const DefaultAuthContextState: AuthContextState = {
  user: {
    name: 'Gabriel Emilio',
    age: '21',
    description: 'Mi descripcion',
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

export default AuthContextState;
