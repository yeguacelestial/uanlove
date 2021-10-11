/* eslint-disable react-native/no-color-literals */
import React from 'react';

import ConfirmationModal from '@components/ConfirmationModal';
import useTheme from '@hooks/useTheme';

export interface SignOutConfirmationModalProps {
  onPressConfirm?: () => void;
  onPressCancel?: () => void;
  visible?: boolean;
}

// TODO: Create theme for modals.

const SignOutConfirmationModal: React.FC<SignOutConfirmationModalProps> = ({
  onPressConfirm,
  onPressCancel,
  visible
}: SignOutConfirmationModalProps) => {
  const {
    settings: { container, item }
  } = useTheme();

  return (
    <ConfirmationModal
      cancelButtonStyle={{
        backgroundColor: 'rgba(222, 67, 67, 0.9)'
      }}
      cancelText="Cancel"
      confirmButtonStyle={{
        backgroundColor: 'rgba(67, 222, 116, 0.9)'
      }}
      confirmText="Confirm"
      message="Do you really want to sign out?"
      messageStyle={{
        color: item.labelColor
      }}
      style={{
        backgroundColor: container.backgroundColor
      }}
      title="Sign Out"
      titleStyle={{
        color: item.labelColor
      }}
      visible={visible}
      onPressCancel={onPressCancel}
      onPressConfirm={onPressConfirm}
    />
  );
};

export default SignOutConfirmationModal;
