import React from 'react';
import { View, Pressable } from 'react-native';
import Text from '@components/Text';
import useSettings, { SettingName } from '@hooks/useSettings';
import { ScaledSheet } from 'react-native-size-matters';
import Settings from '@shared/Settings';
import { SettingsShowMeScreenProps } from '@navigation/AppNavigator';

const ShowMeScreen: React.FC<SettingsShowMeScreenProps> = ({
  navigation
}: SettingsShowMeScreenProps) => {
  const [settings, setSetting] = useSettings();

  const handleChange = (value: Settings['showMe']) => {
    setSetting({
      name: SettingName.ShowMe,
      value
    });
    navigation.goBack();
  };

  const match = (value: Settings['showMe']) => settings.showMe === value;

  return (
    <View>
      <Pressable style={styles.option} onPress={() => handleChange('Man')}>
        <Text>Man</Text>
        {match('Man') ? <Text>*</Text> : null}
      </Pressable>
      <Pressable style={styles.option} onPress={() => handleChange('Woman')}>
        <Text>Woman</Text>
        {match('Woman') ? <Text>*</Text> : null}
      </Pressable>
      <Pressable style={styles.option} onPress={() => handleChange('Other')}>
        <Text>Other</Text>
        {match('Other') ? <Text>*</Text> : null}
      </Pressable>
      <Pressable
        style={[
          styles.option,
          {
            borderBottomWidth: 0
          }
        ]}
        onPress={() => handleChange('All')}
      >
        <Text>All</Text>
        {match('All') ? <Text>*</Text> : null}
      </Pressable>
    </View>
  );
};

const styles = ScaledSheet.create({
  option: {
    padding: '15@ms',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: '#dedede',
    flexDirection: 'row'
  }
});

export default ShowMeScreen;
