import Theme from '@shared/Theme';
import React from 'react';
import ThemeContext from './ThemeContext';
import useThemeProvider from './useThemeProvider';

export interface ThemeProviderProps {
  children: React.ReactNode;
  theme?: Theme;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme
}: ThemeProviderProps) => {
  const value = useThemeProvider({
    initialTheme: theme
  });

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
