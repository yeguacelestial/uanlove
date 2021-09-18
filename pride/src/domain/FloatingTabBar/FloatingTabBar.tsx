import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import FloatingTabBarItem from './Item';
import useTheme from '@hooks/useTheme';

export type FloatingTabBarProps = BottomTabBarProps;

const FloatingTabBar: React.FC<FloatingTabBarProps> = ({
  state,
  descriptors,
  navigation
}: FloatingTabBarProps) => {
  const { theme } = useTheme();

  return (
    <View
      style={[
        {
          margin: theme.tabBar.margin,
          height: theme.tabBar.height,
          borderRadius: theme.tabBar.height / 2,
          backgroundColor: theme.tabBar.backgroundColor
        },
        styles.root
      ]}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const focused = state.index === index;

        return (
          <FloatingTabBarItem
            key={route.key}
            backgroundColor={theme.tabBar.backgroundColor}
            color={theme.tabBar.item.color}
            focused={focused}
            focusedColor={theme.tabBar.item.focusedColor}
            options={options}
            onLongPress={() => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key
              });
            }}
            onPress={() => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true
              });

              if (!focused && !event.defaultPrevented) {
                navigation.navigate(route.name, {
                  merge: true
                });
              }
            }}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    overflow: 'hidden'
  }
});

export default FloatingTabBar;
