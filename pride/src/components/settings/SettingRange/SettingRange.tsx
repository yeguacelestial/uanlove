import React from 'react';
import Setting, { SettingProps } from '../Setting';
import { ms } from 'react-native-size-matters';
import Text from '@components/Text';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { View } from 'react-native';

export interface SettingRangeProps extends SettingProps {
  onValueChange?: (low: number, high: number) => void;
  children?: React.ReactNode;
  low: number;
  high: number;
}

const SettingRange: React.FC<SettingRangeProps> = ({
  onValueChange = () => {},
  children,
  low,
  high,
  ...props
}: SettingRangeProps) => {
  return (
    <Setting
      {...props}
      renderValue={() => {
        return (
          <Text>
            {low} - {high}
          </Text>
        );
      }}
    >
      <MultiSlider
        enabledOne
        enabledTwo
        containerStyle={{ alignItems: 'center' }}
        isMarkersSeparated={true}
        markerStyle={{ backgroundColor: '#5783D7', height: 20, width: 20 }}
        max={100}
        min={18}
        selectedStyle={{ backgroundColor: '#5783D7' }}
        sliderLength={ms(300)}
        unselectedStyle={{ borderRadius: 100 }}
        values={[low, high]}
        onValuesChange={value => onValueChange(value[0], value[1])}
      />
      {children}
    </Setting>
  );
};

export default SettingRange;
