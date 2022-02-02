import { TouchableOpacity, Text } from 'react-native';
import { MainStyles } from '../styles/core';

const PanelButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={MainStyles.panelButton} onPress={onPress}>
      <Text style={MainStyles.panelButtonTitle}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default PanelButton;