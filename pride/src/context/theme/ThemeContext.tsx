import { createContext } from 'react';
import Theme, { DefaultTheme } from '@shared/Theme';

export type ThemeContextType = [Theme, (theme: Theme) => void];

const ThemeContext = createContext<ThemeContextType>([
  DefaultTheme,
  () => {
    return;
  }
]);

export default ThemeContext;
