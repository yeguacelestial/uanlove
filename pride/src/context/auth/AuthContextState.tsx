import User from '@shared/User';

interface AuthContextState {
  signUp: () => Promise<void>;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
  user: User | null;
  setUser: (_: AuthContextState['user']) => void;
}

export const authContextDefaultState: AuthContextState = {
  user: {
    name: 'Gabriel Emilio',
    age: '21'
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
