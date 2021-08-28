import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import FloatingTabBarItem from './Item';

export type FloatingTabBarProps = BottomTabBarProps;

const FloatingTabBar: React.FC<FloatingTabBarProps> = ({
  state,
  descriptors,
  navigation
}: FloatingTabBarProps) => {
  return (
    <View style={styles.root}>
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

const backgroundColor = 'white';
const margin = 20;
const height = 70;

// Content padding-bottom = 2 * margin + height

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    margin: margin,
    height: height,
    borderRadius: height * 2,
    backgroundColor: backgroundColor,
    flexDirection: 'row',
    overflow: 'hidden'
  }
});

export default FloatingTabBar;
