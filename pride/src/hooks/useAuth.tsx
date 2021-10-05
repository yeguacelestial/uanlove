import { AuthContext } from '@context/auth';
import { useContext } from 'react';

const useAuth = () => useContext(AuthContext);

export default useAuth;
