import React, { useState } from 'react';
import { View } from 'react-native';
import Text from '@components/Text';
import Setting from '@components/Setting';
import SettingValue from '@components/SettingValue';
import SettingSwitch from '@components/SettingSwitch';
import SettingArrow from '@components/SettingArrow';
import SettingsContainer from '@components/SettingsContainer';

const SettingsScreen: React.FC = () => {
  const [value, setValue] = useState(false);

  return (
    <View>
      <SettingsContainer title="Title">
        <SettingValue label="Label" value="Test" />

        <SettingSwitch
          label="Switch"
          value={value}
          onValueChange={() => setValue(prev => !prev)}
        />

        <SettingArrow label="Arrow" separation={false} />
      </SettingsContainer>
      <SettingsContainer title="Title">
        <SettingValue label="Label" value="Test" />

        <SettingSwitch
          label="Switch"
          value={value}
          onValueChange={() => setValue(prev => !prev)}
        />

        <SettingArrow label="Arrow" separation={false} />
      </SettingsContainer>
      <SettingsContainer spacing={0} title="Title">
        <Setting label="KKTUA" separation={false}>
          <Text>KKuate</Text>
          <Text>Slider</Text>
        </Setting>
      </SettingsContainer>
    </View>
  );
};

export default SettingsScreen;
