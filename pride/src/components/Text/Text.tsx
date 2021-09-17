import React from 'react';
import { Text, TextProps } from 'react-native';
import { Colors, Typography } from '@styles';

export interface TextWrapperProps extends TextProps {
  size?: number;
  color?: string;
}

const TextWrapper: React.FC<TextWrapperProps> = ({
  size = Typography.textSize,
  color = Colors.textColor,
  style,
  ...props
}: TextWrapperProps) => {
  return (
    <Text
      style={[
        {
          fontSize: size,
          color
        },
        style
      ]}
      {...props}
    />
  );
};

export default TextWrapper;
