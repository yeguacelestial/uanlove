import React from 'react';
import { ScrollView, ScrollViewProps } from 'react-native';
import { ms } from 'react-native-size-matters';

const ScreenScrollView: React.FC<ScrollViewProps> = ({
  contentContainerStyle,
  ...props
}: ScrollViewProps) => {
  return (
    <ScrollView
      contentContainerStyle={[
        contentContainerStyle,
        {
          // TODO: Get paddingBottom value from a variable.
          paddingBottom: ms(32 + 65)
        }
      ]}
      {...props}
    />
  );
};

export default ScreenScrollView;
