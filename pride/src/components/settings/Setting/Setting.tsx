import React from 'react';
import { Pressable, PressableProps, View } from 'react-native';
import { ScaledSheet, ms } from 'react-native-size-matters';
import Text from '@components/Text';

export interface SettingProps extends PressableProps {
  label: string;
  renderValue?: () => JSX.Element;
  children?: React.ReactNode;
  separator?: boolean;
  height?: number;
  padding?: number;
  sepatatorColor?: string;
}

const Setting: React.FC<SettingProps> = ({
  label,
  renderValue,
  children,
  separator = true,
  height = ms(45),
  padding = ms(15),
  sepatatorColor = '#dedede',
  ...props
}: SettingProps) => {
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
          style={{
            flex: 1
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
              backgroundColor: sepatatorColor
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
