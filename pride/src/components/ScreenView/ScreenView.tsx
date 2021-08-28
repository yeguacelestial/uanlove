import scale from '@utils/scale';
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
          // TODO: Get paddingBottom value from a variable.
          paddingBottom: scale(32 + 65)
        }
      ]}
      {...props}
    />
  );
};

export default ScreenView;
