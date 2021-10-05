import React from 'react';
import Setting, { SettingProps } from '../Setting';
import Switch from '@components/Switch';
import useTheme from '@hooks/useTheme';

export interface SettingSwitchProps extends SettingProps {
  value: boolean;
  onChange?: (value: boolean) => void;
}

const SettingSwitch: React.FC<SettingSwitchProps> = ({
  value,
  onChange,
  ...props
}: SettingSwitchProps) => {
  const {
    toggle: { onColor, offColor }
  } = useTheme();

  return (
    <Setting
      {...props}
      renderValue={() => {
        return (
          <Switch
            isOn={value}
            offColor={offColor}
            onColor={onColor}
            onToggle={onChange}
          />
        );
      }}
    />
  );
};

export default SettingSwitch;
