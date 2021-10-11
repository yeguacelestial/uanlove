import React from 'react';
import { ImageBackground, View, ViewStyle } from 'react-native';

import { ms } from 'react-native-size-matters';

export interface PictureProps {
  src: string;
  style?: ViewStyle;
}

const Picture: React.FC<PictureProps> = ({ src, style }: PictureProps) => {
  return (
    <View
      style={{
        padding: ms(4),
        ...style
      }}
    >
      <View
        style={{
          borderRadius: ms(8),
          overflow: 'hidden'
        }}
      >
        <ImageBackground
          source={{ uri: src }}
          style={{
            width: '100%',
            height: '100%'
          }}
        />
      </View>
    </View>
  );
};

export default Picture;
