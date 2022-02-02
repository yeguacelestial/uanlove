import { View, TextInput } from 'react-native';
import { MainStyles } from '../../../styles/core';

const CustomTextInput = ({ icon, placeholder }) => {
  return (
    <View style={MainStyles.action}>
      {icon}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={'#666666'}
        autoCorrect={false}
        style={[
          MainStyles.textInput,
          {
          color: '#000'
          }
        ]}
      />
    </View>
  );
};

export default CustomTextInput;