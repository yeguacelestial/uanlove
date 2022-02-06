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
					Subir foto
				</Text>

				<Text style={{
          fontSize: 14,
          color: 'gray',
          height: 30,
          marginBottom: 10
        }}>
					Esta será la foto principal de tu perfil.
				</Text>

				<PanelButton
					text="Subir desde la galería"
          onPress={onPressChooseFromLibrary}
				/>

				<PanelButton
					text="Abrir la cámara"
          onPress={onPressTakePhoto}
				/>

				<PanelButton
					text="Cancelar"
					onPress={onPressCancel}
				/>
			</View>
		</View>	
  );
};

export default RenderInnerBottomSheet;