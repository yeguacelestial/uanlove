import React from 'react';
import { View, ViewProps } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import useTheme from '@hooks/useTheme';

export interface ScreenViewProps extends ViewProps {
  children?: React.ReactNode;
  fullHeight?: boolean;
}

const ScreenView: React.FC<ScreenViewProps> = ({
  style,
  fullHeight = false,
  children,
  ...props
}: ScreenViewProps) => {
  const { screen, navigation, isDark } = useTheme();

  return (
    <View
      style={[
        {
          flexGrow: 1,
          paddingBottom: fullHeight ? 0 : screen.tabBarHeight,
          backgroundColor: navigation.colors.background
        },
        style
      ]}
      {...props}
    >
      <StatusBar style={isDark ? 'light' : 'dark'} />
      {children}
    </View>
  );
};

export default ScreenView;
