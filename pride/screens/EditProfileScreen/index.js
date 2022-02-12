import { useEffect, useState } from 'react';
import { ActivityIndicator, Platform, ScrollView, View } from 'react-native';

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
import useUserMe from '../../hooks/affair/useUserMe';
import useGenderList from '../../hooks/affair/useGenderList';
import useSexPreferenceList from '../../hooks/affair/useSexPreferenceList';


const EditProfileScreen = ({ navigation }) => {
	// backend hooks
	const { fetchedUserInfo } = useUserMe();
	const { genderList } = useGenderList();
	const { sexPreferenceList } = useSexPreferenceList();

	const [userInfo, setUserInfo] = useState(null);

	useEffect(() => {
		if(fetchedUserInfo) {
			setUserInfo(fetchedUserInfo)
		}
	}, [fetchedUserInfo])

	const today = new Date();

	const maximumDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
	const minimumDate = new Date(today.getFullYear() - 110, today.getMonth(), today.getDate());

	const [age, setAge] = useState(today.getFullYear() - maximumDate.getFullYear());
	const [gender, setGender] = useState("");
	const [preference, setPreference] = useState("");
	const [term, setTerm] = useState("");
	const [major, setMajor] = useState("");

	const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');
	const [datePickerValue, setDatePickerValue] = useState(maximumDate);

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

		if (datePickerValue) {
			setAge(today.getFullYear() - datePickerValue.getFullYear());
		}
	}, [pickedImage, datePickerValue])

	const formattedGenderList = genderList ? genderList.map(gender => {
		return {
			label: gender.name,
			value: gender.id
		}
	}) : []

	const formattedSexPreferenceList = sexPreferenceList ? sexPreferenceList.map(sexPreference => {
		return {
			label: sexPreference.name,
			value: sexPreference.id
		}
	}) : []

	const termList = [
		{
			label: "1er semestre",
			value: "1",
		},
		{
			label: "2do semestre",
			value: "2",
		},
		{
			label: "3er semestre",
			value: "3",
		},
	]

	const majorList = [
		{
			label: "Ingeniería en Administración de Sistemas",
			value: "IAS",
		},
		{
			label: "Ingeniería en Tecnologías de Software",
			value: "ITS",
		},
		{
			label: "Ingeniería en Mecatrónica",
			value: "IMTC",
		},
	]

	const fall = new Animated.Value(1)


	return fetchedUserInfo && genderList ? (
		<KeyboardAwareScrollView
			extraScrollHeight={Platform.OS === 'ios' ? 100 : 0}
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
							placeholder={'Nombre(s)'}
							valueText={userInfo.first_name}
							multiline={Platform.OS === 'ios' ? true : false}
							disabled
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
							placeholder={'Apellidos'}
							valueText={userInfo.last_name}
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
								valueText={fetchedUserInfo && fetchedUserInfo.birthday ? fetchedUserInfo.birthday : datePickerValue.toDateString()}
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
									maximumDate={maximumDate}
									minimumDate={minimumDate}
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
							placeholder={'Edad calculada'}
							keyboardType={'numeric'}
							valueText={`${age}`}
							disabled
						/>

						<CustomDropDownInput
							label={'Soy...'}
							value={gender}
							setValue={setGender}
							list={formattedGenderList}
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
							list={formattedSexPreferenceList}
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
									name='map-marker-outline'
									color={MainColours.textInputIconColor}
									size={MainStyles.iconSize}
									style={MainStyles.textInputIcon}
								/>
							}
							placeholder={'Ubicación'}
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
							valueText={userInfo.email}
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
							valueText={userInfo.faculty}
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
							valueText={userInfo.student_type}
							disabled
						/>

						<CustomDropDownInput
							label={'Semestre'}
							value={term}
							setValue={setTerm}
							list={termList}
							leftIcon={
								<Entypo
									name='book'
									color={MainColours.textInputIconColor}
									size={MainStyles.iconSize}
									style={MainStyles.textInputIcon}
								/>
							}
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
	) : (
		<KeyboardAwareScrollView
			contentContainerStyle={MainStyles.container}
		>
			<ActivityIndicator size="large" color="#FF6347" />
		</KeyboardAwareScrollView>
	)
};

export default EditProfileScreen;