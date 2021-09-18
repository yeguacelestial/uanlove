import { Theme as ThemeNavigation } from '@react-navigation/native';

export default interface Theme {
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
}
