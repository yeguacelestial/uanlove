import { View } from 'react-native';
import { MainStyles } from '../../../styles/core';

import { TextInput } from 'react-native-paper'
import { useState } from 'react';

const CustomTextInput = ({ style, icon, placeholder, keyboardType, multiline, showRemainingCharacters }) => {
  const [text, setText] = useState('');
  const [remainingCharacters, setRemainingCharacters] = useState(500);

  const onChangeText = (text) => {
    setText(text);
    setRemainingCharacters(500 - text.length);

    if (text.length > 499) {
      setText(text.substring(0, 499));
      setRemainingCharacters(0);
    }
  }

  return (
    <View style={[MainStyles.action, style]}>
      <TextInput
        left={<TextInput.Icon name={() => icon} />}
        label={showRemainingCharacters ? `${placeholder} (${remainingCharacters})` : placeholder}
        mode='outlined'
        outlineColor='red'
        activeOutlineColor='red'
        style={MainStyles.textInput}
        keyboardType={keyboardType ? keyboardType : 'default'}
        multiline={multiline ? multiline : false}
        onChangeText={onChangeText}
        value={text}
      />
    </View>
  );
};

export default CustomTextInput;