import React from 'react';
import { View } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { ms } from 'react-native-size-matters';

import Text from '@components/Text';
import useTheme from '@hooks/useTheme';

import Setting, { SettingProps } from '../Setting';

export interface SettingValueProps extends SettingProps {
  value?: string;
  arrow?: boolean;
}

const SettingValue: React.FC<SettingValueProps> = ({
  value,
  arrow = true,
  label,
  ...props
}: SettingValueProps) => {
  const {
    settings: { item }
  } = useTheme();

  return (
    <Setting
      label={label}
      {...props}
      renderValue={() => {
        return (
          <View
            style={{
              flexGrow: label ? 0 : 1,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            <Text
              // eslint-disable-next-line react-native/no-color-literals
              style={{
                color: item.valueColor
              }}
            >
              {value}
            </Text>
            {arrow ? (
              <MaterialIcons
                color={item.arrowColor}
                name="navigate-next"
                size={24}
                style={{
                  marginStart: ms(4)
                }}
              />
            ) : null}
          </View>
        );
      }}
    />
  );
};

export default SettingValue;
