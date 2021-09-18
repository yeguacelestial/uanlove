import {
  //DarkTheme as DarkThemeNavigation,
  DefaultTheme as DefaultThemeNavigation
} from '@react-navigation/native';
import Theme from '@shared/Theme';
import { ms } from 'react-native-size-matters';

const tabBar = {
  height: ms(65),
  margin: ms(16)
};

export const DefaultTheme: Theme = {
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
