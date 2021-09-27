import React from 'react';
import Setting, { SettingProps } from '../Setting';
import Switch from '@components/Switch';

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
        return <Switch isOn={value} onToggle={onValueChange} />;
      }}
    />
  );
};

export default SettingSwitch;
