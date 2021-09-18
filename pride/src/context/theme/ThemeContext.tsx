import { createContext } from 'react';
import ThemeContextState, {
  themeContextDefaultState
} from './ThemeContextState';

const ThemeContext = createContext<ThemeContextState>(themeContextDefaultState);

export default ThemeContext;
