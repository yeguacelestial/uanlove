import { useState } from 'react';
import { View } from 'react-native';

import { TextInput } from 'react-native-paper'

import DropDown from "react-native-paper-dropdown";
import { MainStyles } from '../../../styles/core';

const CustomDropDownInput = ({ label, value, setValue, list, leftIcon, multiSelect }) => {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <View style={{
      marginTop: 10,
      marginBottom: 10
    }}>
      <DropDown
        label={label}
        mode={"outlined"}
        visible={showDropDown}
        showDropDown={() => setShowDropDown(true)}
        onDismiss={() => setShowDropDown(false)}
        value={value}
        setValue={setValue}
        list={list}
        inputProps={{
          left: <TextInput.Icon name={ () => leftIcon }/>,
          outlineColor: 'red',
          activeOutlineColor: 'red',
          style: MainStyles.textInput
        }}
        multiSelect={multiSelect ? multiSelect : false}
      />
    </View>
  );
};

export default CustomDropDownInput;