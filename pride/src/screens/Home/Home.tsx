import React from 'react';
import { Text } from 'react-native';
import ScrollView from '@components/ScrollView';

const Home: React.FC = () => {
  return (
    <ScrollView>
      <Text
        style={{
          height: 1000
        }}
      >
        Home Screen
      </Text>
      <Text>Long Content</Text>
    </ScrollView>
  );
};

export default Home;
