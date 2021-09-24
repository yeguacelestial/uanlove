import { createContext } from 'react';
import ThemeContextState, {
  DefaultThemeContextState
} from './ThemeContextState';

const ThemeContext = createContext<ThemeContextState>(DefaultThemeContextState);

export default ThemeContext;
