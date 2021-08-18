import { useContext } from 'react';
import { AuthContext } from '../Auth';

const useAuth = () => useContext(AuthContext);

export default useAuth;
