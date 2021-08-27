import React from 'react';
import { View, ViewProps } from 'react-native';

const ScreenView: React.FC<ViewProps> = ({ style, ...props }: ViewProps) => {
  return (
    <View
      style={[
        style,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          flexGrow: 1,
          paddingBottom: 110 // TODO: Get paddingBottom value from a variable.
        }
      ]}
      {...props}
    />
  );
};

export default ScreenView;
