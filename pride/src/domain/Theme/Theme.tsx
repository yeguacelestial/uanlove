import React from 'react';

import { ThemeProvider } from '@context/theme';
import useSettings from '@hooks/useSettings';
import { DefaultTheme, DarkTheme } from '@shared/Theme';

export interface ThemeProps {
  children?: React.ReactNode;
}

const Theme: React.FC<ThemeProps> = ({ children }: ThemeProps) => {
  const { general } = useSettings();

  return (
    <ThemeProvider theme={general.darkTheme ? DarkTheme : DefaultTheme}>
      {children}
    </ThemeProvider>
  );
};

export default Theme;
