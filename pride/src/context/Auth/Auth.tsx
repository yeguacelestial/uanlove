import React, { createContext, useState } from 'react';

export interface AuthContextState {
  authenticated: boolean;
  setAuthenticated: (authenticated: boolean) => void;
}

const contextDefaultState: AuthContextState = {
  authenticated: true,
  setAuthenticated: () => {
    return;
  }
};

export const AuthContext = createContext<AuthContextState>(contextDefaultState);

export const AuthConsumer = AuthContext.Consumer;

export interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({
  children
}: AuthProviderProps) => {
  const [authenticated, setAuthenticated] = useState(
    contextDefaultState.authenticated
  );

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        setAuthenticated
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
