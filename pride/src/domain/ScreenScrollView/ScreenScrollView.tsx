import useTheme from '@hooks/useTheme';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, ScrollViewProps } from 'react-native';

export interface ScreenScrollViewProps extends ScrollViewProps {
  fullHeight?: boolean;
  children?: React.ReactNode;
}

const ScreenScrollView: React.FC<ScreenScrollViewProps> = ({
  contentContainerStyle,
  fullHeight = false,
  children,
  ...props
}: ScreenScrollViewProps) => {
  const { screen, navigation, isDark } = useTheme();

  return (
    <ScrollView
      contentContainerStyle={[
        {
          flexGrow: 1,
          paddingBottom: fullHeight ? 0 : screen.tabBarHeight,
          backgroundColor: navigation.colors.background
        },
        contentContainerStyle
      ]}
      {...props}
    >
      <StatusBar style={isDark ? 'light' : 'dark'} />
      {children}
    </ScrollView>
  );
};

export default ScreenScrollView;
