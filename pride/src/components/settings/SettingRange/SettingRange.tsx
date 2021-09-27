/* eslint-disable react-native/no-color-literals */
import React, { useState } from 'react';
import Setting, { SettingProps } from '../Setting';
import { ms } from 'react-native-size-matters';
import Text from '@components/Text';
import MultiSlider, {
  MultiSliderProps
} from '@ptomasroos/react-native-multi-slider';
import { StyleProp, View } from 'react-native';

export interface SettingRangeProps extends SettingProps {
  onValuesChange?: (value: [number, number]) => void;
  children?: React.ReactNode;
  values: [number, number];
  sliderProps?: MultiSliderProps;
  color?: string;
}

const SettingRange: React.FC<SettingRangeProps> = ({
  onValuesChange,
  children,
  values,
  color = '#5783D7',
  sliderProps = {},

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
          <Text>
            {values[0]} - {values[1]}
          </Text>
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
        <MultiSlider
          enabledOne
          enabledTwo
          isMarkersSeparated={true}
          markerStyle={{ backgroundColor: color, height: 20, width: 20 }}
          max={100}
          min={18}
          selectedStyle={{ backgroundColor: color }}
          sliderLength={width}
          unselectedStyle={{ borderRadius: 10 }}
          {...sliderProps}
          containerStyle={containerStyle}
          values={values}
          onValuesChange={values =>
            onValuesChange && onValuesChange([values[0], values[1]])
          }
        />
      </View>
      {children}
    </Setting>
  );
};

export default SettingRange;
