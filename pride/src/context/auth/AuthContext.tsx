import { createContext } from 'react';
import AuthContextState, { authContextDefaultState } from './AuthContextState';

const AuthContext = createContext<AuthContextState>(authContextDefaultState);

export default AuthContext;
