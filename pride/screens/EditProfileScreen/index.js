import { useRef } from 'react';
import { ScrollView, View } from 'react-native';

import {
	Entypo,
	Ionicons,
	FontAwesome,
	MaterialIcons,
	MaterialCommunityIcons
} from '@expo/vector-icons';

import BottomSheet from 'reanimated-bottom-sheet'
import Animated from 'react-native-reanimated'

import { MainColours, MainStyles } from '../../styles/core';
import RenderInnerBottomSheet from './components/RenderInnerBottomSheet';
import RenderHeaderBottomSheet from './components/RenderHeaderBottomSheet';
import CustomTextInput from './components/CustomTextInput';
import PanelButton from '../../components/PanelButton';
import ProfilePreviewContainer from './components/ProfilePreviewContainer';

const EditProfileScreen = ({ navigation }) => {
	const bs = useRef(0)
	const fall = new Animated.Value(1)

	return (
		<View style={MainStyles.fx1}>
			<BottomSheet
				ref={bs}
				snapPoints={[330, 0]}
				renderContent={() => <RenderInnerBottomSheet onPressCancel={() => bs.current.snapTo(1)} />}
				renderHeader={RenderHeaderBottomSheet}
				initialSnap={1}
				callbackNode={fall}
				enabledGestureInteraction={true}
			/>
			<ScrollView>
				<Animated.View style={{
					margin: 20,
					opacity: Animated.add(0.1, Animated.multiply(fall, 1))
				}}>
					<View style={MainStyles.alignCenter}>
						<ProfilePreviewContainer
							fullName={'John Doe'}
							imageUri='https://avatars.githubusercontent.com/u/52676055?s=400&u=18d95ed91216e90edacde8a5b0c7ecb8399657b5&v=4'
							onPress={() => bs.current.snapTo(0)}
						/>
					</View>

					<PanelButton
						text={'Editar fotos'}
						onPress={() => navigation.navigate('EditProfilePhotos')}
					/>

					<CustomTextInput
						icon={
							<Ionicons
								name='person-outline'
								color={MainColours.textInputIconColor}
								size={MainStyles.iconSize}
								style={MainStyles.textInputIcon}
							/>
						}
						placeholder={'Nombre completo'}
					/>

					<CustomTextInput
						icon={
							<MaterialIcons
								name='elderly'
								color={MainColours.textInputIconColor}
								size={MainStyles.iconSize}
								style={MainStyles.textInputIcon}
							/>
						}
						placeholder={'Edad'}
					/>

					<CustomTextInput
						icon={
							<MaterialCommunityIcons
								name='city-variant-outline'
								color={MainColours.textInputIconColor}
								size={MainStyles.iconSize}
								style={MainStyles.textInputIcon}
							/>
						}
						placeholder={'Municipio de residencia'}
					/>

					<CustomTextInput
						icon={
							<FontAwesome
								name='envelope-o'
								color={MainColours.textInputIconColor}
								size={MainStyles.iconSize}
								style={MainStyles.textInputIcon}
							/>
						}
						placeholder={'Correo universitario'}
					/>

					<CustomTextInput
						icon={
							<FontAwesome
								name='university'
								color={MainColours.textInputIconColor}
								size={MainStyles.iconSize}
								style={MainStyles.textInputIcon}
							/>
						}
						placeholder={'Facultad'}
					/>

					<CustomTextInput
						icon={
							<Ionicons
								name='school-outline'
								color={MainColours.textInputIconColor}
								size={MainStyles.iconSize}
								style={MainStyles.textInputIcon}
							/>
						}
						placeholder={'Escolaridad'}
					/>

					<CustomTextInput
						icon={
							<Entypo
								name='book'
								color={MainColours.textInputIconColor}
								size={MainStyles.iconSize}
								style={MainStyles.textInputIcon}
							/>
						}
						placeholder={'Semestre'}
					/>

					<CustomTextInput
						icon={
							<MaterialCommunityIcons
								name='script-text-outline'
								color={MainColours.textInputIconColor}
								size={MainStyles.iconSize}
								style={MainStyles.textInputIcon}
							/>
						}
						placeholder={'Biografía'}
					/>

					<PanelButton
						text={'Enviar'}
					/>

				</Animated.View>
			</ScrollView>
		</View>
	);
};

export default EditProfileScreen;