import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { ms } from 'react-native-size-matters';

export interface FloatingTabBarItemProps {
  options: BottomTabNavigationOptions;
  focused?: boolean;
  backgroundColor?: string;
  focusedColor?: string;
  color?: string;
  onPress?: () => void;
  onLongPress?: () => void;
}

const FloatingTabBarItem: React.FC<FloatingTabBarItemProps> = ({
  options,
  focused = false,
  backgroundColor = 'black',
  focusedColor = '#27aae3',
  color = 'white',
  onLongPress,
  onPress
}: FloatingTabBarItemProps) => {
  const icon = options.tabBarIcon
    ? options.tabBarIcon({
        focused,
        color: focused ? focusedColor : color,
        size: ms(20)
      })
    : null;

  return (
    <TouchableOpacity
      accessibilityLabel={options.tabBarAccessibilityLabel}
      accessibilityRole="button"
      accessibilityState={focused ? { selected: true } : {}}
      style={[
        styles.root,
        {
          backgroundColor
        }
      ]}
      testID={options.tabBarTestID}
      onLongPress={onLongPress}
      onPress={onPress}
    >
      {icon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FloatingTabBarItem;
