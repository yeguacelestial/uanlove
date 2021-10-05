import React from 'react';
import { View } from 'react-native';

export interface SettingSelectProps {
  children?: React.ReactNode;
}

const SettingSelect: React.FC<SettingSelectProps> = ({
  children
}: SettingSelectProps) => {
  return (
    <View>
      {children}
    </View>
  );
}

export default SettingSelect;
