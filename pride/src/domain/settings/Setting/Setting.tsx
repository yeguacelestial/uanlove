import React from 'react';
import { Pressable, PressableProps, TextStyle, View } from 'react-native';

import { ScaledSheet, ms } from 'react-native-size-matters';

import Text from '@components/Text';
import useTheme from '@hooks/useTheme';

export interface SettingProps extends PressableProps {
  label: string;
  renderValue?: () => JSX.Element | null;
  children?: React.ReactNode;
  separator?: boolean;
  height?: number;
  padding?: number;
  labelStyle?: TextStyle;
}

const Setting: React.FC<SettingProps> = ({
  label,
  renderValue,
  children,
  separator = true,
  height = ms(45),
  padding = ms(15),
  labelStyle = {},
  ...props
}: SettingProps) => {
  const {
    settings: { item }
  } = useTheme();

  const value = renderValue ? renderValue() : null;

  return (
    <Pressable {...props}>
      <View
        style={[
          styles.content,
          {
            height,
            padding
          }
        ]}
      >
        <Text
          color={item.labelColor}
          style={{
            flex: 1,
            ...labelStyle
          }}
        >
          {label}
        </Text>
        {value}
      </View>
      {children ? (
        <View
          style={{
            padding,
            paddingTop: 0
          }}
        >
          {children}
        </View>
      ) : null}
      {separator ? (
        <View
          style={{
            paddingHorizontal: padding
          }}
        >
          <View
            style={{
              height: 1,
              backgroundColor: item.separatorColor
            }}
          />
        </View>
      ) : null}
    </Pressable>
  );
};

const styles = ScaledSheet.create({
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

export default Setting;
