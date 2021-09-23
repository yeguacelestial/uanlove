import React from 'react';
import { Switch } from 'react-native';
import Setting, { SettingProps } from '../Setting';

// import { Switch } from '@components/Switch/Switch';

export interface SettingSwitchProps extends SettingProps {
  value: boolean;
  onValueChange?: (value: boolean) => void;
}

const SettingSwitch: React.FC<SettingSwitchProps> = ({
  value,
  onValueChange,
  ...props
}: SettingSwitchProps) => {
  return (
    <Setting
      {...props}
      renderValue={() => {
        return <Switch value={value} onValueChange={onValueChange} />;
        // return (
        //   <Switch
        //     isOn={value}
        //     style={{ marginBottom: 10 }}
        //     onToggle={onValueChange}
        //   />
        // );
      }}
    />
  );
};

export default SettingSwitch;
