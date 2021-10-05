import {
  Theme as ThemeNavigation,
  DefaultTheme as DefaultThemeNavigation,
  DarkTheme as DarkThemeNavigation
} from '@react-navigation/native';

import Colors, { DefaultColors } from './Colors';
import Spacing, { DefaultSpacing } from './Spacing';

import { ms } from 'react-native-size-matters';

// TODO: Refactor, move type names and definitions to another file.

export enum ThemeName {
  DEFAULT = 'DEFAULT',
  DARK = 'DARK'
}

type Theme = {
  name: ThemeName;
  isDark: boolean;
  colors: Colors;
  spacing: Spacing;
  tabBar: {
    height: number;
    margin: number;
    backgroundColor: string;
    item: {
      color: string;
      focusedColor: string;
    };
  };
  screen: {
    tabBarHeight: number;
  };
  userCard: {
    gradientColors: string[];
    gradientLocations: number[];
    color: string;
    backgroundColor: string;
    detailIconColor: string;
    indicatorColor: string;
  };
  userCardDetail: {
    color: string;
    picturesBackgroundColor: string;
    backgroundColor: string;
    indicatorColor: string;
  };
  profileUserCard: {
    settingsIconColor: string;
    signOutIconColor: string;
    editIconColor: string;
  };
  navigation: ThemeNavigation;
};

const tabBar = {
  height: ms(65),
  margin: ms(16)
};

export const DefaultTheme: Theme = {
  name: ThemeName.DEFAULT,
  isDark: false,
  colors: DefaultColors,
  spacing: DefaultSpacing,
  navigation: DefaultThemeNavigation,
  tabBar: {
    ...tabBar,
    backgroundColor: 'black',
    item: {
      color: 'white',
      focusedColor: '#27aae3'
    }
  },
  screen: {
    tabBarHeight: tabBar.height + 2 * tabBar.margin
  },
  userCard: {
    gradientColors: ['#00000000', '#000000'],
    gradientLocations: [0, 0.6],
    color: 'white',
    backgroundColor: 'black',
    detailIconColor: 'white',
    indicatorColor: 'rgba(255, 255, 255, 0.6)'
  },
  userCardDetail: {
    color: 'black',
    picturesBackgroundColor: 'black',
    backgroundColor: 'white',
    indicatorColor: 'rgba(255, 255, 255, 0.6)'
  },
  profileUserCard: {
    settingsIconColor: 'white',
    signOutIconColor: '#de4b4b',
    editIconColor: 'white'
  }
};

export const DarkTheme: Theme = {
  name: ThemeName.DARK,
  isDark: true,
  colors: DefaultColors,
  spacing: DefaultSpacing,
  navigation: DarkThemeNavigation,
  tabBar: {
    ...tabBar,
    backgroundColor: '#121212',
    item: {
      color: 'white',
      focusedColor: '#27aae3'
    }
  },
  screen: {
    tabBarHeight: tabBar.height + 2 * tabBar.margin
  },
  userCard: {
    gradientColors: ['#12121200', '#121212'],
    gradientLocations: [0, 0.6],
    color: 'white',
    backgroundColor: '#121212',
    detailIconColor: 'white',
    indicatorColor: 'rgba(255, 255, 255, 0.6)'
  },
  userCardDetail: {
    color: 'white',
    picturesBackgroundColor: 'black',
    backgroundColor: '#121212',
    indicatorColor: 'rgba(255, 255, 255, 0.6)'
  },
  profileUserCard: {
    settingsIconColor: 'white',
    signOutIconColor: '#de4b4b',
    editIconColor: 'white'
  }
};

export default Theme;
