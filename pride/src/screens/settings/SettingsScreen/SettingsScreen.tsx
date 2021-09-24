import React from 'react';
import { Switch, View } from 'react-native';
import {
  SettingsContainer,
  SettingSwitch,
  SettingValue,
  SettingRange
} from '@components/settings';
import useSettings, { SettingsActionKind } from '@hooks/useSettings';
import { SettingsScreenProps } from '@navigation/AppNavigator';
import Text from '@components/Text';

const SettingsScreen: React.FC<SettingsScreenProps> = ({
  navigation
}: SettingsScreenProps) => {
  const [{ discovery, notifications }, dispatch] = useSettings();

  return (
    <View>
      <SettingsContainer title="Account">
        <SettingValue
          arrow={false}
          label="Email"
          separator={false}
          value="test@test.com"
        />
      </SettingsContainer>
      <SettingsContainer title="Discovery">
        <SettingValue
          label="Show Me"
          value={discovery.showMe}
          onPress={() => navigation.push('settings-show-me')}
        />
        <SettingRange
          label="Age"
          separator={false}
          values={discovery.age.range}
          onValuesChange={values => {
            dispatch({
              name: SettingsActionKind.SET_AGE_RANGE,
              value: values
            });
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Text
              // eslint-disable-next-line react-native/no-color-literals
              style={{
                color: '#525252'
              }}
            >
              Only show people of this age
            </Text>
            <Switch
              value={discovery.age.active}
              onValueChange={() =>
                dispatch({
                  name: SettingsActionKind.SET_AGE_RANGE_ACTIVE,
                  value: !discovery.age.active
                })
              }
            />
          </View>
        </SettingRange>
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
