/* eslint-disable react-native/no-color-literals */
import React from 'react';

import ConfirmationModal from '@components/ConfirmationModal';

export interface SignOutConfirmationModalProps {
  onPressConfirm?: () => void;
  onPressCancel?: () => void;
  visible?: boolean;
}

const SignOutConfirmationModal: React.FC<SignOutConfirmationModalProps> = ({
  onPressConfirm,
  onPressCancel,
  visible
}: SignOutConfirmationModalProps) => {
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
      title="Sign Out"
      visible={visible}
      onPressCancel={onPressCancel}
      onPressConfirm={onPressConfirm}
    />
  );
};

export default SignOutConfirmationModal;
