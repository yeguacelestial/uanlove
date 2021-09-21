import React from 'react';
import Setting, { SettingProps } from '@components/Setting';
import { MaterialIcons } from '@expo/vector-icons';
import { ms } from 'react-native-size-matters';

export interface SettingArrowProps extends SettingProps {
  color?: string;
  size?: number;
}

const SettingArrow: React.FC<SettingArrowProps> = ({
  color = 'black',
  size = ms(24),
  ...props
}: SettingArrowProps) => {
  return (
    <Setting
      {...props}
      renderValue={() => {
        return <MaterialIcons color={color} name="navigate-next" size={size} />;
      }}
    />
  );
};

export default SettingArrow;
