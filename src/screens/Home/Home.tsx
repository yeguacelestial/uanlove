import React from 'react';
import { ScrollView, Text, View } from 'react-native';

const Home: React.FC = () => {
  return (
    <ScrollView
      style={{
        paddingBottom: 60
      }}
    >
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
