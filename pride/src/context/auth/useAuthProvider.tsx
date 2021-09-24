import { useCallback, useState } from 'react';
import AuthContextState, { DefaultAuthContextState } from './AuthContextState';

const useAuthProvider = (): AuthContextState => {
  const [user, setUser] = useState<AuthContextState['user']>(
    DefaultAuthContextState.user
  );

  // TODO: Implement sign up.
  const signUp = useCallback(async () => {}, []);

  // TODO: Implement sign in.
  const signIn = useCallback(async () => {
    setUser({
      name: 'Gabriel Emilio',
      description: 'Mi descripcion',
      age: '21',
      email: 'gabriel.emilio@uanl.edu.mx',
      school: 'Facultad de Ingenieria Mecanica y Electrica'
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
