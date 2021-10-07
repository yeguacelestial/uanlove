import React from 'react';
import { View, Pressable } from 'react-native';

import { ms } from 'react-native-size-matters';

import Text from '@components/Text';
import { SettingsContainer, SettingSelect } from '@domain/settings';
import useSettings, { SettingsActionKind } from '@hooks/useSettings';
import { SettingsShowMeScreenProps } from '@navigation/AppNavigator';
import { DiscoverySettings } from '@shared/Settings';

const showMeText: DiscoverySettings['showMe'][] = ['Women', 'Men', 'Everyone'];

const ShowMeScreen: React.FC<SettingsShowMeScreenProps> = ({
  navigation
}: SettingsShowMeScreenProps) => {
  const {
    discovery: { showMe },
    dispatch
  } = useSettings();

  const onPress = (value: DiscoverySettings['showMe']) => {
    dispatch({
      name: SettingsActionKind.SET_SHOW_ME,
      value
    });
    navigation.goBack();
  };

  return (
    <View>
      <SettingsContainer spacing={0} title="Show Me">
        {showMeText.map((value, i) => {
          return (
            <SettingSelect
              key={i}
              label={value}
              selected={showMe === value}
              separator={i !== showMeText.length - 1}
              onPress={() => onPress(value)}
            />
          );
        })}
      </SettingsContainer>
    </View>
  );
};

export default ShowMeScreen;
