import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import styles from './Item.styles';

export interface FloatingTabBarItemProps {
  options: BottomTabNavigationOptions;
  focused?: boolean;
  onPress?: () => void;
  onLongPress?: () => void;
}

const FloatingTabBarItem: React.FC<FloatingTabBarItemProps> = ({
  options,
  focused = false,
  onLongPress,
  onPress
}: FloatingTabBarItemProps) => {
  const color = focused ? '#27aae3' : 'inherit';

  const icon =
    options.tabBarIcon &&
    options.tabBarIcon({
      focused,
      color,
      size: 24
    });

  return (
    <TouchableOpacity
      accessibilityLabel={options.tabBarAccessibilityLabel}
      accessibilityRole="button"
      accessibilityState={focused ? { selected: true } : {}}
      style={styles.container}
      testID={options.tabBarTestID}
      onLongPress={onLongPress}
      onPress={onPress}
    >
      <Text>{icon}</Text>
    </TouchableOpacity>
  );
};

export default FloatingTabBarItem;
