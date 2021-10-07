import React from 'react';
import { View } from 'react-native';

import { ms } from 'react-native-size-matters';

import Text from '@components/Text';
import useTheme from '@hooks/useTheme';

export interface SettingsContainerProps {
  children?: React.ReactNode;
  title?: string;
  spacing?: number;
}

const SettingsContainer: React.FC<SettingsContainerProps> = ({
  children,
  title,
  spacing = ms(10)
}: SettingsContainerProps) => {
  const {
    settings: { container }
  } = useTheme();

  return (
    <View
      style={{
        marginBottom: spacing
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
          backgroundColor: container.backgroundColor
        }}
      >
        {children}
      </View>
    </View>
  );
};

export default SettingsContainer;
