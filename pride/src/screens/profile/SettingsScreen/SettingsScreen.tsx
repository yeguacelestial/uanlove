import React from 'react';
import { View } from 'react-native';
import {
  SettingsContainer,
  SettingSwitch,
  SettingValue
} from '@components/settings';
import useSettings, { SettingName } from '@hooks/useSettings';

const SettingsScreen: React.FC = () => {
  const [settings, setSetting] = useSettings();

  return (
    <View>
      <SettingsContainer title="Account">
        <SettingValue
          arrow={false}
          label="Email"
          separation={false}
          value="test@test.com"
        />
      </SettingsContainer>
      <SettingsContainer title="Discovery">
        <SettingValue
          label="Show Me"
          separation={false}
          value={settings.showMe}
        />
      </SettingsContainer>
      <SettingsContainer title="Notifications">
        <SettingSwitch
          label="Notifications"
          separation={false}
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
