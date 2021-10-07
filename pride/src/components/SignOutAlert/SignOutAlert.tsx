//TODO: fix
/* eslint-disable react-native/no-color-literals */
import useTheme from '@hooks/useTheme';
import React from 'react';
import {
  Dimensions,
  Modal,
  Text,
  View
} from 'react-native';
import { TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

interface SignOutAlertProps {
  visible: boolean;
  onDismiss: () => void;
  onAccept: () => Promise<void>;
}

const SignOutAlert: React.FC<SignOutAlertProps> = ({ visible, onDismiss, onAccept }) => {
  const windowWidth = Dimensions.get('window').width;
  const {
    settings
  } = useTheme();
  return (
    <Modal transparent animationType="fade" visible={visible}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.4)',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <View style={[styles.modal, { width: windowWidth * 0.8, backgroundColor: settings.container.backgroundColor }]}>
          <View style={styles.modalTextContainer}>
            <Text style={[styles.title, {color: settings.item.labelColor}]}>¿Sign Out?</Text>
            <Text style={styles.message}>¿You really want to sign out?</Text>
          </View>
          <View style={styles.modalButtonContainer}>
            <TouchableOpacity
              style={{}}
              onPress={() => onDismiss()}
            >
              <Text style={styles.cancelTextButton}>CANCEL</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{}}
              onPress={() => onAccept()}
            >
              <Text style={styles.signOutTextButton}>SIGN OUT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = ScaledSheet.create({
  modal: {
    height: 200,
    backgroundColor: '#FFFFFF',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    elevation: 10,
    borderRadius: 20
  },
  modalTextContainer: {
    padding: 20
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 45,
    right: 10,
    left: 10,
    bottom: 20,
    position: 'absolute'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4B4B4B',
    paddingBottom: 10
  },
  message: {
    color: '#C6C6C6',
    fontSize: 16
  },
  cancelTextButton: {
    fontSize: 20,
    color: '#C4C4C4'
  },
  signOutTextButton: {
    fontSize: 20,
    color: '#FBC02E'
  }
});

export default SignOutAlert;
