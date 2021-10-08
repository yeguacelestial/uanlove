import React from 'react';
import { View } from 'react-native';

import SignOutAlert from '@components/SignOutAlert';
import Text from '@components/Text';
import ScreenScrollView from '@domain/ScreenScrollView';
import {
  SettingsContainer,
  SettingSwitch,
  SettingValue,
  SettingRange,
  SettingButton,
  SettingArrow
} from '@domain/settings';
import useAuth from '@hooks/useAuth';
import useSettings, { SettingsActionKind } from '@hooks/useSettings';
import useTheme from '@hooks/useTheme';
import { SettingsScreenProps } from '@navigation/AppNavigator';

import { useSettingsScreen } from './useSettingsScreen';

const SettingsScreen: React.FC<SettingsScreenProps> = ({
  navigation
}: SettingsScreenProps) => {
  const { user, signOut } = useAuth();
  const { discovery, notifications, general, dispatch } = useSettings();
  const { isVisible, setIsVisible, dismiss } = useSettingsScreen();
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
        <SettingArrow label="Comunity Principles" />
        <SettingArrow label="Security and Politics" />
        <SettingArrow label="Security Advice" separator={false} />
      </SettingsContainer>
      <SettingsContainer>
        <SettingButton
          label="Sign Out"
          separator={false}
          onPress={() => setIsVisible(!isVisible)}
        />
      </SettingsContainer>
      <SettingsContainer>
        <SettingButton
          label="Delete Account"
          labelStyle={{ color: deleteAccount.color }}
          separator={false}
          style={{ backgroundColor: deleteAccount.backgroundColor }}
        />
      </SettingsContainer>
      <SignOutAlert
        visible={isVisible}
        onAccept={signOut}
        onDismiss={dismiss}
      ></SignOutAlert>
    </ScreenScrollView>
  );
};

export default SettingsScreen;
