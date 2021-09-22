import React, { useCallback } from 'react';
import Setting, { SettingProps } from '../Setting';
import { MaterialIcons } from '@expo/vector-icons';
import { ms } from 'react-native-size-matters';
import Slider from 'rn-range-slider';
import Thumb from './slider/Thumb';
import Rail from './slider/Rail';
import Label from './slider/Label';
import Notch from './slider/Notch';
import RailSelected from './slider/RailSelected';
import Text from '@components/Text';

export interface SettingRangeProps extends SettingProps {
  onValueChange?: (low: number, high: number) => void;
  low: number;
  high: number;
}

const SettingRange: React.FC<SettingRangeProps> = ({
  onValueChange,
  low,
  high,
  ...props
}: SettingRangeProps) => {
  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback(value => <Label text={value} />, []);
  const renderNotch = useCallback(() => <Notch />, []);

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
      <Slider
        floatingLabel
        high={high}
        low={low}
        max={100}
        min={18}
        renderLabel={renderLabel}
        renderNotch={renderNotch}
        renderRail={renderRail}
        renderRailSelected={renderRailSelected}
        renderThumb={renderThumb}
        step={1}
        // style={styles.slider}
        onValueChanged={onValueChange}
      />
    </Setting>
  );
};

export default SettingRange;
