import React from 'react';
import { View } from 'react-native';
import { ms } from 'react-native-size-matters';
import Text from '@components/Text';
import Setting, { SettingProps } from '../Setting';
import { MaterialIcons } from '@expo/vector-icons';

export interface SettingValueProps extends SettingProps {
  value: string;
  arrow?: boolean;
}

const SettingValue: React.FC<SettingValueProps> = ({
  value,
  arrow = true,
  ...props
}: SettingValueProps) => {
  return (
    <Setting
      {...props}
      renderValue={() => {
        return (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            <Text>{value}</Text>
            {arrow ? (
              <MaterialIcons
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
