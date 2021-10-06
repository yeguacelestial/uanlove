import React from 'react';
import Setting, { SettingProps } from '../Setting';
import { MaterialIcons } from '@expo/vector-icons';
import { ms } from 'react-native-size-matters';
import useTheme from '@hooks/useTheme';

export interface SettingArrowProps extends SettingProps {
  size?: number;
}

const SettingArrow: React.FC<SettingArrowProps> = ({
  size = ms(24),
  ...props
}: SettingArrowProps) => {
  const {
    settings: { item }
  } = useTheme();

  return (
    <Setting
      {...props}
      renderValue={() => {
        return (
          <MaterialIcons
            color={item.arrowColor}
            name="navigate-next"
            size={size}
          />
        );
      }}
    />
  );
};

export default SettingArrow;
