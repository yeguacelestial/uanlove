import Theme from '@shared/Theme';
import { Themes } from '@styles';

interface ThemeContextState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const DefaultThemeContextState: ThemeContextState = {
  theme: Themes.DefaultTheme,
  setTheme: () => {
    return;
  }
};

export default ThemeContextState;
