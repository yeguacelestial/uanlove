import { View } from 'react-native';
import { MainStyles } from '../../../styles/core';

const RenderHeaderBottomSheet = () => {
  return (
    <View style={{
      backgroundColor: '#ffffff',
      shadowColor: '#333333',
      shadowOffset: { width: -1, height: -3 },
      shadowRadius: 2,
      shadowOpacity: 0.4,
      paddingTop: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    }}>
			<View style={MainStyles.alignCenter}>
				<View style={{
          width: 40,
          height: 8,
          borderRadius: 4,
          backgroundColor: '#00000040',
          marginBottom: 10,
        }}/>
			</View>
		</View>
  );
};

export default RenderHeaderBottomSheet;
