import React from 'react';
import { View, ViewProps } from 'react-native';
import { ms } from 'react-native-size-matters';

const ScreenView: React.FC<ViewProps> = ({ style, ...props }: ViewProps) => {
  return (
    <View
      style={[
        style,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          flexGrow: 1,
          // TODO: Get paddingBottom value from a variable.
          paddingBottom: ms(32 + 65)
        }
      ]}
      {...props}
    />
  );
};

export default ScreenView;
