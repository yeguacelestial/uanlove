import React, { useEffect } from 'react';
import { Text, View, TextInput } from 'react-native';

import { ms } from 'react-native-size-matters';

import Button from '@components/Button';
import ScreenScrollView from '@domain/ScreenScrollView';
import { SettingsContainer, SettingValue } from '@domain/settings';
import useAuth from '@hooks/useAuth';
import useTheme from '@hooks/useTheme';
import { ProfileEditScreenProps } from '@navigation/AppNavigator';

import Picture from './Picture';

// TODO: Test component.
const ProfileEditScreen: React.FC<ProfileEditScreenProps> = ({
  navigation
}: ProfileEditScreenProps) => {
  const { user } = useAuth();
  const { colors } = useTheme();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          style={{
            paddingHorizontal: ms(6),
            paddingVertical: ms(4),
            backgroundColor: colors.primary
          }}
          text="Save"
        />
      )
    });
  }, [navigation, colors.primary]);

  // TODO: Handle without user.
  if (!user)
    return (
      <View>
        <Text>Without user</Text>
      </View>
    );

  return (
    <ScreenScrollView fullHeight>
      <SettingsContainer
        contentStyle={{ flexDirection: 'row', padding: ms(8) }}
        title="Pictures"
      >
        {user.pictures.map((picture, index) => {
          return (
            <Picture
              key={index}
              src={picture}
              style={{
                width: '25%',
                height: ms(120)
              }}
            />
          );
        })}
      </SettingsContainer>

      <SettingsContainer title="About me">
        <TextInput
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

      <SettingsContainer title="Sexual Orientation">
        <SettingValue separator={false} value="Straight" />
      </SettingsContainer>
    </ScreenScrollView>
  );
};

export default ProfileEditScreen;
