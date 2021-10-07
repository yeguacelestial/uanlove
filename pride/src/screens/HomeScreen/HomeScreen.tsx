import React from 'react';

import Text from '@components/Text';
import ScreenScrollView from '@domain/ScreenScrollView';

const HomeScreen: React.FC = () => {
  return (
    <ScreenScrollView>
      <Text
        style={{
          height: 1000
        }}
      >
        Home Screen
      </Text>
      <Text>Long Content</Text>
    </ScreenScrollView>
  );
};

export default HomeScreen;
