import { useCallback, useState } from 'react';

import { AuthContextType, DefaultAuthContextState } from './AuthContext';

const useAuthProvider = (): AuthContextType => {
  const [user, setUser] = useState<AuthContextType['user']>(
    DefaultAuthContextState.user
  );

  // TODO: Implement sign up.
  const signUp = useCallback(async () => {}, []);

  // TODO: Implement sign in.
  const signIn = useCallback(async () => {
    setUser({
      gender: 'Man',
      name: 'Gabriel Emilio',
      bio: 'Mi bio',
      age: '21',
      email: 'gabriel.emilio@uanl.edu.mx',
      school: 'Facultad de Ingenieria Mecanica y Electrica',
      pictures: [
        'https://image.shutterstock.com/image-photo/head-shot-portrait-smiling-middle-600w-1339318991.jpg',
        'https://i.pinimg.com/originals/69/59/fa/6959fa736605235642d0f057e6cf9795.jpg',
        'https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-600w-1640944705.jpg'
      ]
    });
  }, [setUser]);

  // TODO: Implement sign out.
  const signOut = useCallback(async () => {
    // TODO: Error should sign out too.
    setUser(null);
  }, [setUser]);

  return {
    signUp,
    signIn,
    signOut,
    user,
    setUser
  };
};

export default useAuthProvider;
