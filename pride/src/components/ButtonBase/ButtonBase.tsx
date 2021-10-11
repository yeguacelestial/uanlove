import React from 'react';
import { Pressable, PressableProps, ViewStyle } from 'react-native';

import { ms } from 'react-native-size-matters';

export interface ButtonBaseProps extends PressableProps {
  children?: React.ReactNode;
  style?: ViewStyle;
  fullWidth?: boolean;
}

const ButtonBase: React.FC<ButtonBaseProps> = ({
  children,
  style = {},
  fullWidth = false,
  ...props
}: ButtonBaseProps) => {
  return children ? (
    <Pressable
      style={{
        width: fullWidth ? '100%' : 'auto',
        borderRadius: ms(3),
        paddingHorizontal: ms(12),
        paddingVertical: ms(8),
        ...style
      }}
      {...props}
    >
      {children}
    </Pressable>
  ) : null;
};

export default ButtonBase;
