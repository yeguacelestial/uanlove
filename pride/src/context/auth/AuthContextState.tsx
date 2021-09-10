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
    age: '21',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod harum distinctio ad id ut quas inventore, perferendis sed consequatur deserunt eius corrupti minus illo. Perspiciatis iste blanditiis quidem sit mollitia?' +
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod harum distinctio ad id ut quas inventore, perferendis sed consequatur deserunt eius corrupti minus illo. Perspiciatis iste blanditiis quidem sit mollitia?' +
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod harum distinctio ad id ut quas inventore, perferendis sed consequatur deserunt eius corrupti minus illo. Perspiciatis iste blanditiis quidem sit mollitia?' +
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod harum distinctio ad id ut quas inventore, perferendis sed consequatur deserunt eius corrupti minus illo. Perspiciatis iste blanditiis quidem sit mollitia?' +
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod harum distinctio ad id ut quas inventore, perferendis sed consequatur deserunt eius corrupti minus illo. Perspiciatis iste blanditiis quidem sit mollitia?' +
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod harum distinctio ad id ut quas inventore, perferendis sed consequatur deserunt eius corrupti minus illo. Perspiciatis iste blanditiis quidem sit mollitia?' +
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod harum distinctio ad id ut quas inventore, perferendis sed consequatur deserunt eius corrupti minus illo. Perspiciatis iste blanditiis quidem sit mollitia?' +
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod harum distinctio ad id ut quas inventore, perferendis sed consequatur deserunt eius corrupti minus illo. Perspiciatis iste blanditiis quidem sit mollitia?'
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
