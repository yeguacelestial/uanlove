import React from 'react';

import { AuthProvider } from '@context/auth';
import { SettingsProvider } from '@context/settings';
import { ThemeProvider } from '@context/theme';
import { DefaultTheme } from '@shared/Theme';

export interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }: ProvidersProps) => {
  return (
    <AuthProvider>
      <SettingsProvider>
        <ThemeProvider theme={DefaultTheme}>{children}</ThemeProvider>
      </SettingsProvider>
    </AuthProvider>
  );
};

export default Providers;
