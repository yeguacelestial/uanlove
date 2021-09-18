import useTheme from '@hooks/useTheme';
import { StatusBar, StatusBarProps } from 'expo-status-bar';
import React from 'react';
import { ScrollView, ScrollViewProps } from 'react-native';

export interface ScreenScrollViewProps extends ScrollViewProps {
  statusBarProps?: StatusBarProps;
  fullHeight?: boolean;
  children?: React.ReactNode;
}

const ScreenScrollView: React.FC<ScreenScrollViewProps> = ({
  contentContainerStyle,
  statusBarProps = {},
  fullHeight = false,
  children,
  ...props
}: ScreenScrollViewProps) => {
  const { theme } = useTheme();

  return (
    <ScrollView
      contentContainerStyle={[
        {
          flexGrow: 1,
          paddingBottom: fullHeight ? 0 : theme.screen.tabBarHeight,
          backgroundColor: theme.navigation.colors.background
        },
        contentContainerStyle
      ]}
      {...props}
    >
      <StatusBar {...statusBarProps} />
      {children}
    </ScrollView>
  );
};

export default ScreenScrollView;
