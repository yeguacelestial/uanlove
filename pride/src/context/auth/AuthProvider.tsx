import React from 'react';
import AuthContext from './AuthContext';
import useAuthProvider from './useAuthProvider';

export interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({
  children
}: AuthProviderProps) => {
  const value = useAuthProvider();

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
