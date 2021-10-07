import { useEffect, useState } from 'react';

import Theme, { DefaultTheme } from '@shared/Theme';

import { ThemeContextType } from './ThemeContext';

export interface useThemeProviderProps {
  initialTheme?: Theme;
}

const useThemeProvider = ({
  initialTheme = DefaultTheme
}: useThemeProviderProps): ThemeContextType => {
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    if (theme.name !== initialTheme.name) setTheme(initialTheme);
  }, [initialTheme, theme.name]);

  return [theme, setTheme];
};

export default useThemeProvider;
