import { useCallback, useState } from 'react';
import AuthContextState, { authContextDefaultState } from './AuthContextState';

const useAuthProvider = (): AuthContextState => {
  const [user, setUser] = useState<AuthContextState['user']>(
    authContextDefaultState.user
  );

  // TODO: Implement sign up.
  const signUp = useCallback(async () => {}, []);

  // TODO: Implement sign in.
  const signIn = useCallback(async () => {
    setUser({
      name: 'Gabriel Emilio',
      age: '21'
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
