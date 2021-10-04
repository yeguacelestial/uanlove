import React from 'react';

import { AuthProvider } from '@context/auth';
import { SettingsProvider } from '@context/settings';

export interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }: ProvidersProps) => {
  return (
    <AuthProvider>
      <SettingsProvider>{children}</SettingsProvider>
    </AuthProvider>
  );
};

export default Providers;
