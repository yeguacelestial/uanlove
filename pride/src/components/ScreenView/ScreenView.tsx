import React from 'react';
import { View, ViewProps } from 'react-native';
import { Colors, Layout } from '@styles';
import { StatusBar, StatusBarProps } from 'expo-status-bar';

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
  return (
    <View
      style={[
        {
          flexGrow: 1,
          paddingBottom: fullHeight ? 0 : Layout.screenTabBarHeight,
          backgroundColor: Colors.screenBackgroundColor
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
