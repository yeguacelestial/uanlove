import React from 'react';
import { Pressable, StyleSheet, PressableProps } from 'react-native';

export interface IconProps {
  color: string;
  size: number;
}

export interface FloatingActionButtonProps extends PressableProps {
  getIcon: (props: IconProps) => React.ReactNode;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  style,
  getIcon,
  ...props
}: FloatingActionButtonProps) => {
  const icon = getIcon({
    color: 'white',
    size: 24
  });

  return (
    <Pressable style={StyleSheet.flatten([styles.root, style])} {...props}>
      {icon}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    // TODO: Get backgroundColor from a variable.
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 100
  }
});

export default FloatingActionButton;
