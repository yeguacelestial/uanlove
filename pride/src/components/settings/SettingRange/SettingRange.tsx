/* eslint-disable react-native/no-color-literals */
import React, { useState } from 'react';
import Setting, { SettingProps } from '../Setting';
import { ms } from 'react-native-size-matters';
import Text from '@components/Text';
import MultiSlider, {
  MultiSliderProps
} from '@ptomasroos/react-native-multi-slider';
import { View } from 'react-native';

export interface SettingRangeProps extends SettingProps {
  onRangedValueChange?: (value: [number, number]) => void;
  onSingleValueChange?: (value: number) => void;
  children?: React.ReactNode;
  valueSingle?: number;
  valueRanged?: [number, number];
  sliderProps?: MultiSliderProps;
  color?: string;
  ranged?: boolean;
  endLabel?: string;
  rangeValue?: [number, number];
}

const SettingRange: React.FC<SettingRangeProps> = ({
  onSingleValueChange,
  children,
  valueSingle = 2,
  color = '#5783D7',
  sliderProps = {},
  ranged = false,
  valueRanged = [0, 0],
  onRangedValueChange,
  endLabel,
  rangeValue = [0, 1],

  ...props
}: SettingRangeProps) => {
  const [width, setWidth] = useState(0);
  const paddingHorizontal = ms(8);

  let containerStyle = sliderProps.containerStyle || {};
  containerStyle = {
    height: 0,
    paddingVertical: ms(12),
    paddingHorizontal,
    ...containerStyle
  };

  return (
    <Setting
      {...props}
      renderValue={() => {
        return (
          <View>
            {ranged ? (
              <Text>
                {valueRanged[0]} - {valueRanged[1]}
              </Text>
            ) : (
              <Text>
                {valueSingle}
                {endLabel}
              </Text>
            )}
          </View>
        );
      }}
    >
      <View
        style={{
          marginTop: ms(8),
          marginBottom: children ? ms(15) : 0
        }}
        onLayout={e =>
          setWidth(e.nativeEvent.layout.width - 2 * paddingHorizontal)
        }
      >
        {ranged ? (
          <MultiSlider
            isMarkersSeparated={true}
            markerStyle={{ backgroundColor: color, height: 20, width: 20 }}
            max={rangeValue[1]}
            min={rangeValue[0]}
            selectedStyle={{ backgroundColor: color }}
            sliderLength={width}
            unselectedStyle={{ borderRadius: 10 }}
            {...sliderProps}
            containerStyle={containerStyle}
            values={valueRanged}
            onValuesChange={valueRanged =>
              onRangedValueChange &&
              onRangedValueChange([valueRanged[0], valueRanged[1]])
            }
          />
        ) : (
          <MultiSlider
            markerStyle={{ backgroundColor: color, height: 20, width: 20 }}
            max={rangeValue[1]}
            min={rangeValue[0]}
            selectedStyle={{ backgroundColor: color }}
            sliderLength={width}
            unselectedStyle={{ borderRadius: 10 }}
            {...sliderProps}
            containerStyle={containerStyle}
            values={[valueSingle]}
            onValuesChange={value =>
              onSingleValueChange && onSingleValueChange(value[0])
            }
          />
        )}
      </View>
      {children}
    </Setting>
  );
};

export default SettingRange;
