import React from 'react';
import {
  ScrollView as ScrollViewBase,
  ScrollViewProps as ScrollViewBaseProps
} from 'react-native';

export type ScrollViewProps = ScrollViewBaseProps;

const ScrollView: React.FC<ScrollViewProps> = ({
  style,
  ...props
}: ScrollViewProps) => {
  return (
    <ScrollViewBase
      style={[
        style,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          paddingBottom: 110
        }
      ]}
      {...props}
    />
  );
};

export default ScrollView;
