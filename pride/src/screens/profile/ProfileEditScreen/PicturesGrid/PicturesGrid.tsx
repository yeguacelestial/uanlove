import React from 'react';
import { View } from 'react-native';

import { ms } from 'react-native-size-matters';

import Picture from '../Picture';

export interface PicturesGridProps {
  pictures: string[];
  maxPictures?: number;
}

const PicturesGrid: React.FC<PicturesGridProps> = ({
  pictures,
  maxPictures = 12
}: PicturesGridProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: ms(12),
        flexWrap: 'wrap'
      }}
    >
      {pictures.map((picture, index) => {
        return (
          <Picture
            key={index}
            src={picture}
            style={{
              width: '25%',
              height: ms(120),
              padding: ms(4)
            }}
          />
        );
      })}
      {maxPictures - pictures.length > 0
        ? new Array(maxPictures - pictures.length)
            .fill(null)
            .map((_, index) => {
              return (
                <Picture
                  key={index}
                  style={{
                    width: '25%',
                    height: ms(120),
                    padding: ms(4)
                  }}
                />
              );
            })
        : null}
    </View>
  );
};

export default PicturesGrid;
