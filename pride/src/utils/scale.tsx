import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;

const scale = (size: number): number => (width / guidelineBaseWidth) * size;

export default scale;
