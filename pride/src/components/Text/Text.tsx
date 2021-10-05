import React from 'react';
import {
  Text as TextBase,
  TextProps as TextBaseProps,
  TextStyle
} from 'react-native';
import { ms } from 'react-native-size-matters';

export interface TextProps extends TextBaseProps {
  size?: number;
  color?: string;
  weight?: TextStyle['fontWeight'];
  transform?: TextStyle['textTransform'];
}

const Text: React.FC<TextProps> = ({
  size = ms(14),
  color = 'black',
  weight = 'normal',
  transform = 'none',
  style,
  ...props
}: TextProps) => {
  return (
    <TextBase
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

export default Text;
