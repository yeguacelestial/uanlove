import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import FloatingTabBarItem from './Item';
import { ms } from 'react-native-size-matters';

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

const backgroundColor = 'black';
const margin = 16;
const height = 65;

// Content padding-bottom = 2 * margin + height

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    margin: ms(margin),
    height: ms(height),
    borderRadius: 100,
    backgroundColor: backgroundColor,
    flexDirection: 'row',
    overflow: 'hidden'
  }
});

export default FloatingTabBar;
