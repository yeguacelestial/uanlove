import React from 'react';
import { View } from 'react-native';
import {
  SettingsContainer,
  SettingSwitch,
  SettingValue,
  SettingRange
} from '@components/settings';
import useSettings, { SettingsActionKind } from '@hooks/useSettings';
import useAuth from '@hooks/useAuth';
import { SettingsScreenProps } from '@navigation/AppNavigator';
import Text from '@components/Text';

const SettingsScreen: React.FC<SettingsScreenProps> = ({
  navigation
}: SettingsScreenProps) => {
  const { user } = useAuth();
  const [{ discovery, notifications }, dispatch] = useSettings();

  // TODO: Handle without user.
  if (!user)
    return (
      <View>
        <Text>Without user</Text>
      </View>
    );

  return (
    <View>
      <SettingsContainer title="Account">
        <SettingValue
          arrow={false}
          label="Email"
          separator={false}
          value={user.email}
        />
      </SettingsContainer>
      <SettingsContainer title="Discovery">
        <SettingRange
          color="#F3BFB3"
          endLabel="Km."
          label="Maximum Distance"
          rangeValue={[2, 151]}
          valueSingle={discovery.distance.max}
          onSingleValueChange={value => {
            dispatch({
              name: SettingsActionKind.SET_DISTANCE_MAX,
              value: value
            });
          }}
        />
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
          onValueChange={() =>
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
          onValueChange={() =>
            dispatch({
              name: SettingsActionKind.SET_NOTIFICATIONS,
              value: !notifications
            })
          }
        />
      </SettingsContainer>
    </View>
  );
};

export default SettingsScreen;
