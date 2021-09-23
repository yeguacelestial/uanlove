import React, { useCallback } from 'react';
import Setting, { SettingProps } from '../Setting';
import { MaterialIcons } from '@expo/vector-icons';
import { ms, ScaledSheet } from 'react-native-size-matters';
//TODO: npm unistall rn-range-slider
import Slider from 'rn-range-slider';
import Thumb from './slider/Thumb';
import Rail from './slider/Rail';
import Label from './slider/Label';
import Notch from './slider/Notch';
import RailSelected from './slider/RailSelected';
import Text from '@components/Text';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { Dimensions } from 'react-native';

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
      {/* <Slider
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
      /> */}

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
        //TODO: Fix posibly undefined?
        onValuesChange={value => onValueChange(value[0], value[1])}
      />

      {/* <MultiSlider
        enableLabel
        enabledOne
        enabledTwo
        max={100}
        min={18}
        values={[low, high]}
        onValuesChange={value => onValueChange(value[0], value[1])}
        // customMarkerLeft={e => {
        //   return <CustomSliderMarkerLeft currentValue={e.currentValue} />;
        // }}
        // customMarkerRight={e => {
        //   return <CustomSliderMarkerRight currentValue={e.currentValue} />;
        // }}
      /> */}
    </Setting>
  );
};

const styles = ScaledSheet.create({
  rangeDot: {
    color: 'blue'
  }
});

export default SettingRange;
