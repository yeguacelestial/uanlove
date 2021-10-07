import React from 'react';
import { View } from 'react-native';

import { ms } from 'react-native-size-matters';

import Interest from '@components/Interest/Interest';
import Text from '@components/Text';
import ScreenScrollView from '@domain/ScreenScrollView';

const LikesScreen: React.FC = () => {
  // TODO: Remove dummy data when real data is available.
  const interests = [
    { text: 'Music', coincide: true },
    { text: 'Reading', coincide: false },
    { text: 'Golfing', coincide: true },
    { text: 'Party', coincide: true },
    { text: 'Running', coincide: false }
  ];

  return (
    <ScreenScrollView>
      <Text>Likes Screen</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {interests.map(interest => (
          <Interest
            key={Math.random()}
            coincide={interest.coincide}
            spacing={ms(2)}
            text={interest.text}
          />
        ))}
      </View>
    </ScreenScrollView>
  );
};

export default LikesScreen;
