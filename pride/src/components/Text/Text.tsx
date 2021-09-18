import React from 'react';
import { Text, TextProps, TextStyle } from 'react-native';
import { ms } from 'react-native-size-matters';

export interface TextWrapperProps extends TextProps {
  size?: number;
  color?: string;
  weight?: TextStyle['fontWeight'];
}

const TextWrapper: React.FC<TextWrapperProps> = ({
  size = ms(12),
  color = 'black',
  weight = 'normal',
  style,
  ...props
}: TextWrapperProps) => {
  return (
    <Text
      style={[
        {
          fontSize: size,
          fontWeight: weight,
          color
        },
        style
      ]}
      {...props}
    />
  );
};

export default TextWrapper;
