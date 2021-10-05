import React from 'react';
import { View } from 'react-native';
import { ms, ScaledSheet } from 'react-native-size-matters';

interface IndicatorsProps {
  picture: number;
  pictures: unknown[];
  color?: string;
  horizontalPadding?: number;
  topPadding?: number;
}

const Indicators: React.FC<IndicatorsProps> = ({
  picture,
  pictures,
  color = 'rgba(255, 255, 255, 0.6)',
  horizontalPadding = ms(4),
  topPadding = ms(4)
}: IndicatorsProps) => {
  return (
    <View
      style={[
        styles.root,
        {
          top: topPadding,
          left: horizontalPadding,
          right: horizontalPadding
        }
      ]}
    >
      {pictures.map((_, index) => {
        const visible = index === picture;

        return (
          <View
            key={index}
            accessibilityLabel={`${
              visible ? 'visible-' : ''
            }picture-indicator-${index + 1}`}
            style={[
              styles.indicator,
              // eslint-disable-next-line react-native/no-color-literals
              {
                backgroundColor: visible ? color : 'transparent'
              }
            ]}
          />
        );
      })}
    </View>
  );
};

const styles = ScaledSheet.create({
  root: {
    zIndex: 1,
    flexDirection: 'row',
    position: 'absolute',
    height: '2@ms'
  },
  indicator: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: '1@ms'
  }
});

export default Indicators;
