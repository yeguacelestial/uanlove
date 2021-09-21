import React from 'react';
import { View, Text } from 'react-native';
import { ScaledSheet, ms } from 'react-native-size-matters';

export interface SettingProps {
  label: string;
  separation?: boolean;
  value?: string;
}

const Setting: React.FC<SettingProps> = ({
  label,
  separation = true
}: SettingProps) => {
  return (
    <View style={styles.setting}>
      <View style={styles.content}>
        <Text>{label}</Text>
      </View>
      <View style={styles.separator} />
    </View>
  );
};

const styles = ScaledSheet.create({
  setting: {
    backgroundColor: 'white'
    // borderWidth: 1,
    // borderColor: '#DEDEDE'
  },
  content: {
    padding: '15@ms'
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#dedede'
  }
});

export default Setting;
