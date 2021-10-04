import Theme, { DefaultTheme } from '@shared/Theme';
import { useState } from 'react';
import { ThemeContextType } from './ThemeContext';

export interface useThemeProviderProps {
  initialTheme?: Theme;
}

const useThemeProvider = ({
  initialTheme = DefaultTheme
}: useThemeProviderProps): ThemeContextType => useState(initialTheme);

export default useThemeProvider;
