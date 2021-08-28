import React from 'react';
import { Pressable, StyleSheet, PressableProps } from 'react-native';
import scale from '@utils/scale';

export interface IconProps {
  color: string;
  size: number;
}

export interface FloatingActionButtonProps extends PressableProps {
  getIcon: (props: IconProps) => React.ReactNode;
  color?: string;
  size?: number;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  style,
  getIcon,
  color,
  size = scale(55),
  ...props
}: FloatingActionButtonProps) => {
  const icon = getIcon({
    color: color || 'white',
    size: size / 2.3
  });

  return (
    <Pressable
      style={StyleSheet.flatten([
        styles.root,
        color
          ? {
              borderColor: color
            }
          : {},
        {
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
const borderColor = 'white';

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor,
    borderWidth: 1,
    borderColor,
    borderRadius: 100
  }
});

export default FloatingActionButton;
