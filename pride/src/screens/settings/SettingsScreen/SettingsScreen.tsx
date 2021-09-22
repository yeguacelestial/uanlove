import React, { useState } from 'react';
import { View } from 'react-native';
import {
  SettingsContainer,
  SettingSwitch,
  SettingValue,
  SettingRange
} from '@components/settings';
import useSettings, { SettingName } from '@hooks/useSettings';
import { SettingsScreenProps } from '@navigation/AppNavigator';

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
          onPress={() => {}}
        />
        <SettingValue label="Schools" value={settings.showMe} />
        <SettingRange
          high={settings.ageRange.high}
          label="Range"
          low={settings.ageRange.low}
          separator={false}
          onValueChange={(low, high) => {
            /*
            setSetting({
              name: SettingName.AgeRange,
              value: { low, high }
            });
            */
          }}
        />
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
