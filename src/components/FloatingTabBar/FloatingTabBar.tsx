import React from 'react';
import { View } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import styles from './FloatingTabBar.styles';
import FloatingTabBarItem from './Item';

export type FloatingTabBarProps = BottomTabBarProps;

const FloatingTabBar: React.FC<FloatingTabBarProps> = ({
  state,
  descriptors,
  navigation
}: FloatingTabBarProps) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const focused = state.index === index;

        return (
          <FloatingTabBarItem
            key={route.key}
            focused={focused}
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

export default FloatingTabBar;
