import React from 'react';
import { Text, View, TextInput } from 'react-native';

import { ms } from 'react-native-size-matters';

import ScreenScrollView from '@domain/ScreenScrollView';
import { SettingsContainer, SettingValue } from '@domain/settings';
import useAuth from '@hooks/useAuth';
import { ProfileEditScreenProps } from '@navigation/AppNavigator';

import Picture from './Picture';

const MAX_PICTURES = 12;

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
      <SettingsContainer
        contentStyle={{
          flexDirection: 'row',
          padding: ms(12),
          flexWrap: 'wrap'
        }}
        title="Pictures"
      >
        {user.pictures.map((picture, index) => {
          return (
            <Picture
              key={index}
              src={picture}
              style={{
                width: '25%',
                height: ms(120),
                padding: ms(4)
              }}
            />
          );
        })}
        {MAX_PICTURES - user.pictures.length > 0
          ? new Array(MAX_PICTURES - user.pictures.length)
              .fill(null)
              .map((_, index) => {
                return (
                  <Picture
                    key={index}
                    style={{
                      width: '25%',
                      height: ms(120),
                      padding: ms(4)
                    }}
                  />
                );
              })
          : null}
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
