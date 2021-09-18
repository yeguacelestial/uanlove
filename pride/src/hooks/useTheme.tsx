import { ThemeContext, ThemeContextState } from '@context/theme';
import { useContext } from 'react';

const useTheme = (): ThemeContextState => useContext(ThemeContext);

export default useTheme;
