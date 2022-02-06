import { View } from 'react-native';
import { MainStyles } from '../../../styles/core';

import { TextInput } from 'react-native-paper'

const CustomTextInput = ({ icon, placeholder }) => {
  return (
    <View style={MainStyles.action}>
      <TextInput
        left={<TextInput.Icon name={() => icon} />}
        label={placeholder}
        mode='outlined'
        outlineColor='red'
        activeOutlineColor='red'
        style={MainStyles.textInput}
      />
    </View>
  );
};

export default CustomTextInput;