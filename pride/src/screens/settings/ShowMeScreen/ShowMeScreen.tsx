import React from 'react';
import { View, Pressable } from 'react-native';
import Text from '@components/Text';
import useSettings, { SettingsActionKind } from '@hooks/useSettings';
import { ms } from 'react-native-size-matters';
import { DiscoverySettings } from '@shared/Settings';
import { SettingsShowMeScreenProps } from '@navigation/AppNavigator';
import { SettingsContainer } from '@domain/settings';
import { FontAwesome } from '@expo/vector-icons';
import useTheme from '@hooks/useTheme';

const showMeText: DiscoverySettings['showMe'][] = ['Women', 'Men', 'Everyone'];

const ShowMeScreen: React.FC<SettingsShowMeScreenProps> = ({
  navigation
}: SettingsShowMeScreenProps) => {
  const {
    discovery: { showMe },
    dispatch
  } = useSettings();

  const {
    settings: { item },
    colors
  } = useTheme();

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
            <Pressable key={i} onPress={() => onPress(value)}>
              <View
                style={{
                  padding: ms(15),
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Text color={item.labelColor}>{value}</Text>
                {showMe === value ? (
                  <FontAwesome color={colors.primary} name="check" size={16} />
                ) : null}
              </View>
              <View
                // eslint-disable-next-line react-native/no-color-literals
                style={{
                  marginHorizontal: ms(15),
                  backgroundColor: item.separatorColor,
                  height: i === showMeText.length - 1 ? 0 : 1
                }}
              />
            </Pressable>
          );
        })}
      </SettingsContainer>
    </View>
  );
};

export default ShowMeScreen;
