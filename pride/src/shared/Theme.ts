import {
  Theme as ThemeNavigation,
  DefaultTheme as DefaultThemeNavigation
} from '@react-navigation/native';
import Colors, { DefaultColors } from './Colors';
import Spacing, { DefaultSpacing } from './Spacing';
import { ms } from 'react-native-size-matters';

type Theme = {
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
  profileUserCard: {
    settingsIconColor: 'white',
    signOutIconColor: '#de4b4b',
    editIconColor: 'white'
  }
};

export default Theme;
