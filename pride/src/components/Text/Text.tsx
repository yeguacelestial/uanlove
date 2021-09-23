import React from 'react';
import { Text, TextProps, TextStyle } from 'react-native';
import { ms } from 'react-native-size-matters';

export interface TextWrapperProps extends TextProps {
  size?: number;
  color?: string;
  weight?: TextStyle['fontWeight'];
  transform?: TextStyle['textTransform'];
}

const TextWrapper: React.FC<TextWrapperProps> = ({
  size = ms(14),
  color = 'black',
  weight = 'normal',
  transform = 'none',
  style,
  ...props
}: TextWrapperProps) => {
  return (
    <Text
      style={[
        {
          fontSize: size,
          fontWeight: weight,
          textTransform: transform,
          color
        },
        style
      ]}
      {...props}
    />
  );
};

export default TextWrapper;
