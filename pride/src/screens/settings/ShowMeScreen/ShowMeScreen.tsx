import React from 'react';
import { View, Pressable } from 'react-native';
import Text from '@components/Text';
import useSettings, { SettingsActionKind } from '@hooks/useSettings';
import { ms } from 'react-native-size-matters';
import { DiscoverySettings } from '@shared/Settings';
import { SettingsShowMeScreenProps } from '@navigation/AppNavigator';
import { SettingsContainer, SettingSelect } from '@domain/settings';

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
