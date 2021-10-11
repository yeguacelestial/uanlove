/* eslint-disable react-native/no-color-literals */
import React from 'react';
import {
  View,
  Modal as ModalBase,
  ModalProps as ModalBaseProps,
  ViewStyle,
  Pressable
} from 'react-native';

import { ms } from 'react-native-size-matters';

export interface ModalProps extends ModalBaseProps {
  children?: React.ReactNode;
  style?: ViewStyle;
  onPressOutside?: () => void;
}

const Modal: React.FC<ModalProps> = ({
  children,
  style = {},
  visible = false,
  onPressOutside,
  ...props
}: ModalProps) => {
  return (
    <ModalBase transparent animationType="fade" visible={visible} {...props}>
      <View
        style={{
          position: 'relative',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.4)'
        }}
      >
        <Pressable
          style={{
            position: 'absolute',
            opacity: 0,
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
          }}
          onPress={onPressOutside}
        />
        <View
          style={{
            width: '70%',
            backgroundColor: 'white',
            padding: ms(32),
            borderRadius: ms(4),
            ...style
          }}
        >
          {children}
        </View>
      </View>
    </ModalBase>
  );
};

export default Modal;
