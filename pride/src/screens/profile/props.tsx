import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type ProfileScreensParamList = {
  profile: undefined;
  'profile-edit': undefined;
  'profile-detail': {
    initialPicture?: number;
  };
  settings: undefined;
};

export type ScreenProps<ScreenName extends keyof ProfileScreensParamList> =
  NativeStackScreenProps<ProfileScreensParamList, ScreenName>;

export type ProfileScreenProps = ScreenProps<'profile'>;
export type ProfileEditScreenProps = ScreenProps<'profile-edit'>;
export type ProfileDetailScreenProps = ScreenProps<'profile-detail'>;
export type SettingsScreenProps = ScreenProps<'settings'>;
