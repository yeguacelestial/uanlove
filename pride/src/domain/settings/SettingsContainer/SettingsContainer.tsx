import React from 'react';
import { View, ViewStyle } from 'react-native';

import { ms } from 'react-native-size-matters';

import Text from '@components/Text';
import useTheme from '@hooks/useTheme';

export interface SettingsContainerProps {
  children?: React.ReactNode;
  title?: string;
  spacing?: number;
  style?: ViewStyle;
  contentStyle?: ViewStyle;
}

const SettingsContainer: React.FC<SettingsContainerProps> = ({
  children,
  title,
  spacing = ms(10),
  style = {},
  contentStyle = {}
}: SettingsContainerProps) => {
  const {
    settings: { container }
  } = useTheme();

  return (
    <View
      style={{
        marginBottom: spacing,
        ...style
      }}
    >
      <View
        style={{
          padding: ms(15),
          paddingBottom: ms(8)
        }}
      >
        {title ? (
          <Text
            color={container.titleColor}
            size={ms(10)}
            transform="uppercase"
            weight="bold"
          >
            {title}
          </Text>
        ) : null}
      </View>
      <View
        style={{
          backgroundColor: container.backgroundColor,
          ...contentStyle
        }}
      >
        {children}
      </View>
    </View>
  );
};

export default SettingsContainer;
