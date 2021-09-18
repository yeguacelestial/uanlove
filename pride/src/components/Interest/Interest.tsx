import React from 'react';
import { View } from 'react-native';
import Text from '@components/Text';
import { ScaledSheet } from 'react-native-size-matters';

interface InterestProps {
  text: string;
  coincide?: boolean;
  spacing?: number;
  coincideColor?: string;
  color?: string;
}

const Interest: React.FC<InterestProps> = ({
  text = 'Music',
  coincide = false,
  spacing = 0,
  coincideColor = '#fd546c',
  color = '#667180'
}: InterestProps) => {
  return (
    <View
      style={[
        styles.interest,
        {
          margin: spacing,
          borderColor: coincide ? coincideColor : color
        }
      ]}
    >
      <Text color={coincide ? coincideColor : color}>{text}</Text>
    </View>
  );
};

const styles = ScaledSheet.create({
  interest: {
    paddingHorizontal: '15@ms',
    paddingVertical: '5@ms',
    alignSelf: 'baseline',
    borderWidth: 1,
    backgroundColor: 'transparent',
    borderRadius: '15@ms'
  }
});

export default Interest;
