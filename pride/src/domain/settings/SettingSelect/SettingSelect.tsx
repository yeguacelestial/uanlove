import { FontAwesome } from '@expo/vector-icons';
import useTheme from '@hooks/useTheme';
import React from 'react';
import Setting, { SettingProps } from '../Setting';

export interface SettingSelectProps extends SettingProps {
  selected?: boolean;
}

const SettingSelect: React.FC<SettingSelectProps> = ({
  selected,
  ...props
}: SettingSelectProps) => {
  const { colors } = useTheme();

  return (
    <Setting
      {...props}
      renderValue={() =>
        selected ? (
          <FontAwesome color={colors.primary} name="check" size={16} />
        ) : null
      }
    />
  );
};

export default SettingSelect;
