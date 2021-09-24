import { createContext } from 'react';
import AuthContextState, { DefaultAuthContextState } from './AuthContextState';

const AuthContext = createContext<AuthContextState>(DefaultAuthContextState);

export default AuthContext;
