/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { TextStyle } from 'react-native';

import ButtonBase, { ButtonBaseProps } from '@components/ButtonBase/ButtonBase';
import Text from '@components/Text';

export interface ButtonProps extends ButtonBaseProps {
  text?: string;
  textStyle?: TextStyle;
}

const Button: React.FC<ButtonProps> = ({
  text,
  textStyle = {},
  style = {},
  ...props
}: ButtonProps) => {
  return (
    <ButtonBase
      style={{
        backgroundColor: 'blue',
        ...style
      }}
      {...props}
    >
      <Text
        style={{
          textAlign: 'center',
          color: 'white',
          ...textStyle
        }}
      >
        {text}
      </Text>
    </ButtonBase>
  );
};

export default Button;
