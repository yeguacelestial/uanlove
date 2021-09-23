import React, { useState } from 'react';
import { Switch, View } from 'react-native';
import {
  SettingsContainer,
  SettingSwitch,
  SettingValue,
  SettingRange
} from '@components/settings';
import useSettings, { SettingName } from '@hooks/useSettings';
import { SettingsScreenProps } from '@navigation/AppNavigator';
import Text from '@components/Text';

const SettingsScreen: React.FC<SettingsScreenProps> = ({
  navigation
}: SettingsScreenProps) => {
  const [settings, setSetting] = useSettings();
  const [low, setLow] = useState(18);
  const [high, setHigh] = useState(25);

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
          value={settings.showMe}
          onPress={() => navigation.push('settings-show-me')}
        />
        <SettingRange
          high={settings.ageRange.high}
          label="Age"
          low={settings.ageRange.low}
          separator={false}
          onValueChange={(low, high) => {
            setSetting({
              name: SettingName.AgeRange,
              value: { low, high }
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
              Only Show People Of This Age
            </Text>
            <Switch
              value={settings.onlyShowAgeRange}
              onValueChange={() =>
                setSetting({
                  name: SettingName.OnlyShowAgeRange,
                  value: !settings.onlyShowAgeRange
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
          value={settings.notifications}
          onValueChange={() =>
            setSetting({
              name: SettingName.Notifications,
              value: !settings.notifications
            })
          }
        />
      </SettingsContainer>
    </View>
  );
};

export default SettingsScreen;
