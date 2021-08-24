import { StyleSheet } from 'react-native';

const backgroundColor = 'white';
const margin = 20;
const height = 70;

// Content padding-bottom = 2 * margin + height

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    margin: margin,
    height: height,
    borderRadius: height * 2,
    backgroundColor: backgroundColor,
    flexDirection: 'row',
    overflow: 'hidden'
  }
});
