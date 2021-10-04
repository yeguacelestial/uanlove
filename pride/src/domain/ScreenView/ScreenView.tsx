import React from 'react';
import { View, ViewProps } from 'react-native';
import { StatusBar, StatusBarProps } from 'expo-status-bar';
import useTheme from '@hooks/useTheme';

export interface ScreenViewProps extends ViewProps {
  children?: React.ReactNode;
  fullHeight?: boolean;
  statusBarProps?: StatusBarProps;
}

const ScreenView: React.FC<ScreenViewProps> = ({
  style,
  fullHeight = false,
  statusBarProps = {},
  children,
  ...props
}: ScreenViewProps) => {
  const { screen, navigation } = useTheme();

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
      <StatusBar {...statusBarProps} />
      {children}
    </View>
  );
};

export default ScreenView;
