import React from 'react';
import SettingsContext from './SettingsContext';
import useSettingsProvider from './useSettingsProvider';

export interface ThemeProviderProps {
  children: React.ReactNode;
}

const SettingsProvider: React.FC<ThemeProviderProps> = ({
  children
}: ThemeProviderProps) => {
  const value = useSettingsProvider();

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
