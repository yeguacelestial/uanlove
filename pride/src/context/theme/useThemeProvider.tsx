import Theme from '@shared/Theme';
import { Themes } from '@styles';
import { useState } from 'react';
import ThemeContextState from './ThemeContextState';

export interface useThemeProviderProps {
  initialTheme?: Theme;
}

const useThemeProvider = ({
  initialTheme = Themes.DefaultTheme
}: useThemeProviderProps): ThemeContextState => {
  const [theme, setTheme] = useState(initialTheme);

  return {
    theme,
    setTheme
  };
};

export default useThemeProvider;
