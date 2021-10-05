import React from 'react';
import { View } from 'react-native';
import {
  SettingsContainer,
  SettingSwitch,
  SettingValue,
  SettingRange
} from '@domain/settings';
import useSettings, { SettingsActionKind } from '@hooks/useSettings';
import useAuth from '@hooks/useAuth';
import { SettingsScreenProps } from '@navigation/AppNavigator';
import Text from '@components/Text';
import ScreenScrollView from '@domain/ScreenScrollView';
import useTheme from '@hooks/useTheme';

const SettingsScreen: React.FC<SettingsScreenProps> = ({
  navigation
}: SettingsScreenProps) => {
  const { user } = useAuth();
  const { discovery, notifications, general, dispatch } = useSettings();
  const {
    settings: { deleteAccount }
  } = useTheme();

  // TODO: Handle without user.
  if (!user)
    return (
      <View>
        <Text>Without user</Text>
      </View>
    );

  return (
    <ScreenScrollView fullHeight>
      <SettingsContainer title="Account">
        <SettingValue
          arrow={false}
          label="Email"
          separator={false}
          value={user.email}
        />
      </SettingsContainer>
      <SettingsContainer title="General">
        <SettingSwitch
          label="Dark theme"
          separator={false}
          value={general.darkTheme}
          onChange={() =>
            dispatch({
              name: SettingsActionKind.SET_DARK_THEME,
              value: !general.darkTheme
            })
          }
        />
      </SettingsContainer>
      <SettingsContainer title="Discovery">
        <SettingValue
          label="Show Me"
          value={discovery.showMe}
          onPress={() => navigation.push('settings-show-me')}
        />
        <SettingRange
          ranged
          label="Age"
          rangeValue={[18, 100]}
          separator={false}
          valueRanged={discovery.age.range}
          onRangedValueChange={value => {
            dispatch({
              name: SettingsActionKind.SET_AGE_RANGE,
              value: value
            });
          }}
        />
        <SettingSwitch
          label="Only show people of this age"
          separator={false}
          value={discovery.age.active}
          onChange={() =>
            dispatch({
              name: SettingsActionKind.SET_AGE_RANGE_ACTIVE,
              value: !discovery.age.active
            })
          }
        />
      </SettingsContainer>
      <SettingsContainer title="Notifications">
        <SettingSwitch
          label="Notifications"
          separator={false}
          value={notifications}
          onChange={() =>
            dispatch({
              name: SettingsActionKind.SET_NOTIFICATIONS,
              value: !notifications
            })
          }
        />
      </SettingsContainer>
      <SettingsContainer title="Security">
        <SettingValue
          arrow={false}
          label="Comunity Principles"
          onPress={() => console.log('Click comunity')}
        />
        <SettingValue
          arrow={false}
          label="Security and Politics"
          onPress={() => console.log('Click security politics')}
        />
        <SettingValue
          arrow={false}
          label="Security Advice"
          separator={false}
          onPress={() => console.log('Click security advice')}
        />
      </SettingsContainer>
      <SettingsContainer title="">
        <SettingValue
          arrow={false}
          label="Sign Out"
          separator={false}
          onPress={() => console.log('Sign Out')}
        />
      </SettingsContainer>
      <SettingsContainer title="Version 6.9">
        <SettingValue
          arrow={false}
          label="Delete Account"
          labelStyle={{ color: deleteAccount.color }}
          separator={false}
          style={{ backgroundColor: deleteAccount.backgroundColor }}
          onPress={() => console.log('Click security advice')}
        />
      </SettingsContainer>
    </ScreenScrollView>
  );
};

export default SettingsScreen;
