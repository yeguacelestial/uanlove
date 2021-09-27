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
  onRangedValuesChange?: (value: [number, number]) => void;
  onValuesChange?: (value: number) => void;
  children?: React.ReactNode;
  value?: number;
  valuesRanged?: [number, number];
  sliderProps?: MultiSliderProps;
  color?: string;
  ranged?: boolean;
}

const SettingRange: React.FC<SettingRangeProps> = ({
  onValuesChange,
  children,
  value = 2,
  color = '#5783D7',
  sliderProps = {},
  ranged = false,
  valuesRanged = [0, 0],
  onRangedValuesChange,

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
                {valuesRanged[0]} - {valuesRanged[1]}
              </Text>
            ) : (
              <Text>{value}Km.</Text>
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
            values={valuesRanged}
            onValuesChange={valuesRanged =>
              onRangedValuesChange &&
              onRangedValuesChange([valuesRanged[0], valuesRanged[1]])
            }
          />
        ) : (
          <MultiSlider
            enabledOne={false}
            isMarkersSeparated={true}
            markerStyle={{ backgroundColor: color, height: 20, width: 20 }}
            max={150}
            selectedStyle={{ backgroundColor: color }}
            sliderLength={width}
            unselectedStyle={{ borderRadius: 10 }}
            {...sliderProps}
            containerStyle={containerStyle}
            values={[2, value]}
            onValuesChange={values =>
              onValuesChange && onValuesChange(values[1])
            }
          />
        )}
      </View>
      {children}
    </Setting>
  );
};

export default SettingRange;
