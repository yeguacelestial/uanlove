import React from 'react';
import { View } from 'react-native';
import { ms } from 'react-native-size-matters';
import Text from '@components/Text';

export interface SettingsContainerProps {
  children?: React.ReactNode;
  title: string;
  spacing?: number;
  backgroundColor?: string;
  titleColor?: string;
}

const SettingsContainer: React.FC<SettingsContainerProps> = ({
  children,
  title,
  spacing = ms(10),
  backgroundColor = 'white',
  titleColor = '#525252'
}: SettingsContainerProps) => {
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
        <Text
          color={titleColor}
          size={ms(10)}
          transform="uppercase"
          weight="bold"
        >
          {title}
        </Text>
      </View>
      <View
        style={{
          backgroundColor
        }}
      >
        {children}
      </View>
    </View>
  );
};

export default SettingsContainer;
