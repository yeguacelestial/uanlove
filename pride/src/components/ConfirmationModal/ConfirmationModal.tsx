/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { TextStyle, View, ViewStyle } from 'react-native';

import { ms } from 'react-native-size-matters';

import Button from '@components/Button';
import Modal from '@components/Modal';
import Text from '@components/Text';

export interface ConfirmationModalProps {
  style?: ViewStyle;
  visible?: boolean;
  title?: string;
  titleStyle?: TextStyle;
  message?: string;
  messageStyle?: TextStyle;
  cancelButtonStyle?: ViewStyle;
  cancelText?: string;
  cancelTextStyle?: TextStyle;
  confirmButtonStyle?: ViewStyle;
  confirmText?: string;
  confirmTextStyle?: TextStyle;
  onPressCancel?: () => void;
  onPressConfirm?: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  style,
  visible,
  title,
  message,
  titleStyle = {},
  cancelButtonStyle = {},
  confirmButtonStyle = {},
  cancelText,
  cancelTextStyle = {},
  confirmText,
  confirmTextStyle = {},
  messageStyle,
  onPressCancel,
  onPressConfirm
}: ConfirmationModalProps) => {
  return (
    <Modal style={style} visible={visible} onPressOutside={onPressCancel}>
      <Text
        style={{
          fontWeight: 'bold',
          ...titleStyle
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          paddingVertical: ms(16),
          fontSize: ms(12),
          ...messageStyle
        }}
      >
        {message}
      </Text>
      <View
        style={{
          flexDirection: 'row'
        }}
      >
        <Button
          style={{
            flex: 1,
            marginRight: ms(8),
            backgroundColor: 'red',
            ...cancelButtonStyle
          }}
          text={cancelText}
          textStyle={cancelTextStyle}
          onPress={onPressCancel}
        />
        <Button
          style={{
            flex: 1,
            backgroundColor: 'green',
            ...confirmButtonStyle
          }}
          text={confirmText}
          textStyle={confirmTextStyle}
          onPress={onPressConfirm}
        />
      </View>
    </Modal>
  );
};

export default ConfirmationModal;
