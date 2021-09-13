import React from 'react';
import { Pressable, Text, PressableProps, View } from 'react-native';
import { ScaledSheet, ms } from 'react-native-size-matters';

export interface Button3DProps extends PressableProps {
  text: string;
}

const Button3D: React.FC<Button3DProps> = ({
  text,
  style,
  onPress,
  ...props
}: Button3DProps) => {
  return (
    <Pressable
      style={[style, { paddingBottom: ms(7) }]}
      onPress={e => {
        console.log('kktua');
        if (onPress) onPress(e);
      }}
      {...props}
    >
      <View style={styles.button}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: ms(12) }}>
          {text}
        </Text>
      </View>
      <View style={styles.backdrop}></View>
    </Pressable>
  );
};

const styles = ScaledSheet.create({
  button: {
    width: '100%',
    backgroundColor: '#FBC02E',
    padding: '15@ms',
    borderRadius: '5@ms',
    alignItems: 'center'
  },
  backdrop: {
    top: '7@ms',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#e1a205',
    position: 'absolute',
    zIndex: -1,
    borderRadius: '5@ms'
  }
});

export default Button3D;
