import { useEffect, useState } from 'react';
import { Platform, ScrollView, View } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import DateTimePicker from '@react-native-community/datetimepicker';

import {
	Entypo,
	Ionicons,
	FontAwesome,
	MaterialIcons,
	MaterialCommunityIcons
} from '@expo/vector-icons';

import Animated from 'react-native-reanimated'

import { MainColours, MainStyles } from '../../styles/core';
import CustomTextInput from './components/CustomTextInput';
import PanelButton from '../../components/PanelButton';
import ProfilePreviewContainer from './components/ProfilePreviewContainer';

import CustomDropDownInput from './components/CustomDropDownInput';

import usePickImage from '../../hooks/usePickImage';


const EditProfileScreen = ({ navigation }) => {
	const [gender, setGender] = useState("");
	const [preference, setPreference] = useState("");

	const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');
	const [datePickerValue, setDatePickerValue] = useState(new Date(1598051730000));

	const [imageUri, setImageUri] = useState("https://avatars.githubusercontent.com/u/52676055?s=400&u=18d95ed91216e90edacde8a5b0c7ecb8399657b5&v=4")

	const { pickedImage, pickImage } = usePickImage();

	const onChangeBirthdayPicker = (event, selectedDate) => {
		const currentDate = selectedDate || datePickerValue;

		setDatePickerValue(currentDate);
		setShowDatePicker(Platform.OS === 'ios');
	};

	useEffect(() => {
		if (pickedImage) {
			setImageUri(pickedImage.uri);
		}
	}, [pickedImage])

	const genderList = [
		{
			label: "Hombre",
			value: "hombre",
		},
		{
			label: "Mujer",
			value: "mujer",
		},
		{
			label: "Otro",
			value: "otro",
		},
	];

	const fall = new Animated.Value(1)

	return (
		<KeyboardAwareScrollView
			extraScrollHeight={100}
		>
			<View style={MainStyles.fx1}>
				<ScrollView>
					<Animated.View style={{
						marginHorizontal: 20,
						marginTop: 10,
						marginBottom: 40,
						opacity: Animated.add(0.1, Animated.multiply(fall, 1))
					}}>
						<View style={MainStyles.alignCenter}>
							<ProfilePreviewContainer
								imageUri={imageUri}
								onPress={() => pickImage()}
							/>
						</View>

						<PanelButton
							text={'Editar fotos del perfil'}
							onPress={() => navigation.navigate('EditProfilePhotos')}
							style={{
								marginVertical: 15,
							}}
						/>

						<CustomTextInput
							leftIcon={
								<Ionicons
									name='person-outline'
									color={MainColours.textInputIconColor}
									size={MainStyles.iconSize}
									style={MainStyles.textInputIcon}
								/>
							}
							placeholder={'Nombre completo'}
							valueText={'JUAN ALEJANDRO LOPEZ OJEDA'}
							multiline={Platform.OS === 'ios' ? true : false}
							disabled
						/>

						<View>
							<CustomTextInput
								leftIcon={
									<MaterialCommunityIcons
										name='calendar'
										color={MainColours.textInputIconColor}
										size={MainStyles.iconSize}
										style={MainStyles.textInputIcon}
									/>
								}
								placeholder={'Fecha de nacimiento'}
								valueText={datePickerValue.toDateString()}
								editable={false}
								onPress={() => setShowDatePicker(true)}
							/>

							{showDatePicker && (
								<DateTimePicker
									testID="dateTimePicker"
									value={datePickerValue}
									mode={"date"}
									is24Hour={true}
									display="default"
									onChange={onChangeBirthdayPicker}
									style={{
										width: '100%',
										height: '100%',
										position: 'absolute',
										right: 15,
									}}
								/>
							)}
						</View>

						<CustomTextInput
							leftIcon={
								<MaterialIcons
									name='elderly'
									color={MainColours.textInputIconColor}
									size={MainStyles.iconSize}
									style={MainStyles.textInputIcon}
								/>
							}
							placeholder={'Edad'}
							keyboardType={'numeric'}
							valueText={'25'}
							disabled
						/>

						<CustomDropDownInput
							label={'Soy...'}
							value={gender}
							setValue={setGender}
							list={genderList}
							leftIcon={
								<FontAwesome
									name='genderless'
									color={MainColours.textInputIconColor}
									size={MainStyles.iconSize}
									style={MainStyles.textInputIcon}
								/>
							}
						/>

						<CustomDropDownInput
							label={'Busco a alguien que sea...'}
							value={preference}
							setValue={setPreference}
							list={genderList}
							leftIcon={
								<FontAwesome
									name='genderless'
									color={MainColours.textInputIconColor}
									size={MainStyles.iconSize}
									style={MainStyles.textInputIcon}
								/>
							}
							multiSelect
						/>

						<CustomTextInput
							leftIcon={
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
							leftIcon={
								<FontAwesome
									name='envelope-o'
									color={MainColours.textInputIconColor}
									size={MainStyles.iconSize}
									style={MainStyles.textInputIcon}
								/>
							}
							placeholder={'Correo universitario'}
							keyboardType={'email-address'}
							valueText={'juan.perezojd@uanl.edu.mx'}
							disabled
						/>

						<CustomTextInput
							leftIcon={
								<FontAwesome
									name='university'
									color={MainColours.textInputIconColor}
									size={MainStyles.iconSize}
									style={MainStyles.textInputIcon}
								/>
							}
							placeholder={'Facultad'}
							valueText={'FACULTAD DE INGENIERÍA MECÁNICA Y ELÉCTRICA'}
							multiline
							disabled
						/>

						<CustomTextInput
							leftIcon={
								<Ionicons
									name='school-outline'
									color={MainColours.textInputIconColor}
									size={MainStyles.iconSize}
									style={MainStyles.textInputIcon}
								/>
							}
							placeholder={'Escolaridad'}
							valueText={'ALUMNOS SUPERIOR'}
							disabled
						/>

						<CustomTextInput
							leftIcon={
								<Entypo
									name='book'
									color={MainColours.textInputIconColor}
									size={MainStyles.iconSize}
									style={MainStyles.textInputIcon}
								/>
							}
							placeholder={'Semestre'}
							keyboardType={'numeric'}
						/>

						<CustomTextInput
							leftIcon={
								<Entypo
									name='star-outlined'
									color={MainColours.textInputIconColor}
									size={MainStyles.iconSize}
									style={MainStyles.textInputIcon}
								/>
							}
							placeholder={'Carrera'}
							keyboardType={'numeric'}
						/>

						<CustomTextInput
							leftIcon={
								<MaterialCommunityIcons
									name='script-text-outline'
									color={MainColours.textInputIconColor}
									size={MainStyles.iconSize}
									style={MainStyles.textInputIcon}
								/>
							}
							placeholder={'Bio'}
							style={{
								height: 140,
							}}
							multiline
							showRemainingCharacters
						/>

						<PanelButton
							text={'Enviar'}
							style={{
								marginTop: 15,
							}}
						/>

					</Animated.View>
				</ScrollView>
			</View>
		</KeyboardAwareScrollView>
	);
};

export default EditProfileScreen;