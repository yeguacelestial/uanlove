import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

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
  // TODO: Pass colors on props.
  const color = focused ? '#27aae3' : '#000';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FloatingTabBarItem;
