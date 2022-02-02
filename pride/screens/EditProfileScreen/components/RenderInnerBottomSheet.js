import { StyleSheet, Text, View } from 'react-native';
import PanelButton from '../../../components/PanelButton';

const RenderInnerBottomSheet = ({
  onPressChooseFromLibrary,
  onPressTakePhoto,
  onPressCancel,
}) => {
  return (
    <View style={{
      padding: 20,
      backgroundColor: '#ffffff',
    }}>

			{/* BOTTOM SHEET */}
			<View style={{
				alignItems: 'center',
			}}>
				<Text style={{
          fontSize: 27,
          height: 35,
        }}>
					Upload Photo
				</Text>

				<Text style={{
          fontSize: 14,
          color: 'gray',
          height: 30,
          marginBottom: 10
        }}>
					Choose Your Profile Picture
				</Text>

				<PanelButton
					text="Choose From Library"
          onPress={onPressChooseFromLibrary}
				/>

				<PanelButton
					text="Take Photo"
          onPress={onPressTakePhoto}
				/>

				<PanelButton
					text="Cancel"
					onPress={onPressCancel}
				/>
			</View>
		</View>	
  );
};

export default RenderInnerBottomSheet;