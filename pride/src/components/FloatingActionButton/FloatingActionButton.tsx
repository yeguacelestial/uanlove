import React from 'react';
import { Pressable, StyleSheet, PressableProps } from 'react-native';

import { ms } from 'react-native-size-matters';

export interface IconProps {
  color: string;
  size: number;
}

export interface FloatingActionButtonProps extends PressableProps {
  getIcon: (props: IconProps) => React.ReactNode;
  color?: string;
  backgroundColor?: string;
  size?: number;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  style,
  getIcon,
  backgroundColor = 'transparent',
  color = 'white',
  size = ms(55),
  ...props
}: FloatingActionButtonProps) => {
  const icon = getIcon({
    color: color,
    size: size / 2.3
  });

  return (
    <Pressable
      style={StyleSheet.flatten([
        styles.root,
        {
          borderColor: color,
          backgroundColor,
          width: size,
          height: size
        },
        style
      ])}
      {...props}
    >
      {icon}
    </Pressable>
  );
};

const backgroundColor = 'transparent';

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor,
    borderWidth: 1,
    borderRadius: 100
  }
});

export default FloatingActionButton;
