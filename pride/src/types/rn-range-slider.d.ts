declare module 'rn-range-slider' {
  import * as React from 'react';
  import { ViewStyle } from 'react-native';

  interface RangeSliderProps {
    min: number;
    max: number;
    step: number;
    low?: number;
    high?: number;
    floatingLabel?: boolean;
    disableRange?: boolean;
    disabled?: boolean;
    allowLabelOverflow?: boolean;
    renderThumb: () => JSX.Element;
    renderRail: () => JSX.Element;
    renderRailSelected: () => JSX.Element;
    renderLabel?: (value: number) => JSX.Element;
    renderNotch?: () => JSX.Element;
    onValueChanged?: (low: number, high: number, fromUser: boolean) => void;
    style?: ViewStyle;
  }

  export default class RangeSlider extends React.Component<RangeSliderProps> {}
}
