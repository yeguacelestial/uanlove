import { TouchableOpacity, View } from 'react-native';
import { MainStyles } from '../../../styles/core';

import { TextInput } from 'react-native-paper'
import { useState } from 'react';

const CustomTextInput = ({
  style,
  leftIcon,
  rightIcon,
  placeholder,
  keyboardType,
  multiline,
  showRemainingCharacters,
  disabled,
  onPress,
  editable,
  valueText,
}) => {
  const [text, setText] = useState(valueText);
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
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
    >
      <View style={[MainStyles.action, style]}>
        <TextInput
          left={<TextInput.Icon name={() => leftIcon} />}
          right={<TextInput.Icon name={rightIcon ? () => rightIcon : ''} />}
          label={showRemainingCharacters ? `${placeholder} (${remainingCharacters})` : placeholder}
          mode='outlined'
          outlineColor='red'
          activeOutlineColor='red'
          style={MainStyles.textInput}
          keyboardType={keyboardType ? keyboardType : 'default'}
          multiline={multiline ? multiline : false}
          onChangeText={onChangeText}
          value={valueText}
          autoCorrect={false}
          autoCapitalize='none'
          autoComplete='off'
          autoFocus={false}
          disabled={disabled ? disabled : false}
          editable={editable}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CustomTextInput;