import { AuthContext, AuthContextState } from '@context/auth';
import { useContext } from 'react';

const useAuth = (): AuthContextState => {
  return useContext(AuthContext);
};

export default useAuth;
