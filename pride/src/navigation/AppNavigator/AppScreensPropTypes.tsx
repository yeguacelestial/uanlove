import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type AppScreensParamList = {
  // profile screens
  profile: undefined;
  'profile-edit': undefined;
  'profile-detail': {
    initialPicture?: number;
  };
  // Settings screens
  settings: undefined;
  'settings-show-me': undefined;
};

export type ScreenProps<ScreenName extends keyof AppScreensParamList> =
  NativeStackScreenProps<AppScreensParamList, ScreenName>;

// Profile screens
export type ProfileScreenProps = ScreenProps<'profile'>;
export type ProfileEditScreenProps = ScreenProps<'profile-edit'>;
export type ProfileDetailScreenProps = ScreenProps<'profile-detail'>;

// Settings screens
export type SettingsScreenProps = ScreenProps<'settings'>;
export type SettingsShowMeScreenProps = ScreenProps<'settings-show-me'>;
