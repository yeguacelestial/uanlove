import React from 'react';
import { View } from 'react-native';
import Text from '@components/Text';
import { SettingsShowMeScreenProps } from '@navigation/AppNavigator';

const ShowMeScreen: React.FC<SettingsShowMeScreenProps> = ({
  navigation
}: SettingsShowMeScreenProps) => {
  return (
    <View>
      <Text>Value</Text>
    </View>
  );
};

export default ShowMeScreen;
