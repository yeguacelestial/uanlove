import React from 'react';

import { AuthProvider } from '@context/auth';
import { ThemeProvider } from '@context/theme';
import { Themes } from '@styles';

export interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }: ProvidersProps) => {
  return (
    <AuthProvider>
      <ThemeProvider theme={Themes.DefaultTheme}>{children}</ThemeProvider>
    </AuthProvider>
  );
};

export default Providers;
