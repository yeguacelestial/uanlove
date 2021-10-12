import React from 'react';
import { Text, View, TextInput } from 'react-native';

import { ms } from 'react-native-size-matters';

import ScreenScrollView from '@domain/ScreenScrollView';
import { SettingsContainer, SettingValue } from '@domain/settings';
import useAuth from '@hooks/useAuth';
import { ProfileEditScreenProps } from '@navigation/AppNavigator';

import PicturesGrid from './PicturesGrid';

// TODO: Test component.
const ProfileEditScreen: React.FC<ProfileEditScreenProps> = () => {
  // TODO: Move component logic to a custom hook.
  const { user } = useAuth();

  // TODO: Handle without user.
  if (!user)
    return (
      <View>
        <Text>Without user</Text>
      </View>
    );

  return (
    <ScreenScrollView fullHeight>
      <SettingsContainer title="Pictures">
        <PicturesGrid pictures={user.pictures} />
      </SettingsContainer>

      <SettingsContainer title="About me">
        <TextInput
          // eslint-disable-next-line react-native/no-color-literals
          style={{
            height: ms(120),
            color: '#525252',
            textAlignVertical: 'top',
            fontSize: ms(13),
            padding: ms(16)
          }}
          value={user.bio}
        />
      </SettingsContainer>

      <SettingsContainer title="Interests">
        <SettingValue separator={false} value="Minecraft" />
      </SettingsContainer>

      <SettingsContainer title="City">
        <SettingValue separator={false} value="Monterrey, N.L." />
      </SettingsContainer>

      <SettingsContainer title="Gender">
        <SettingValue separator={false} value={user.gender} />
      </SettingsContainer>

      <SettingsContainer spacing={0} title="Sexual Orientation">
        <SettingValue separator={false} value="Straight" />
      </SettingsContainer>
    </ScreenScrollView>
  );
};

export default ProfileEditScreen;
