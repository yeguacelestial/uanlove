/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { TextStyle, View, ViewStyle } from 'react-native';

import { ms } from 'react-native-size-matters';

import Button from '@components/Button';
import Modal from '@components/Modal';
import Text from '@components/Text';

export interface ConfirmationModalProps {
  title?: string;
  message?: string;
  visible?: boolean;
  titleStyle?: TextStyle;
  cancelButtonStyle?: ViewStyle;
  confirmButtonStyle?: ViewStyle;
  onPressCancel?: () => void;
  onPressConfirm?: () => void;
  cancelText?: string;
  cancelTextStyle?: TextStyle;
  confirmText?: string;
  confirmTextStyle?: TextStyle;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  title,
  message,
  visible,
  titleStyle = {},
  cancelButtonStyle = {},
  confirmButtonStyle = {},
  onPressCancel,
  onPressConfirm,
  cancelText,
  cancelTextStyle = {},
  confirmText,
  confirmTextStyle = {}
}: ConfirmationModalProps) => {
  return (
    <Modal visible={visible} onPressOutside={onPressCancel}>
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
          fontSize: ms(12)
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
            marginRight: ms(4),
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
