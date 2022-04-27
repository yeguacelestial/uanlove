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
import useTermList from '../../hooks/affair/useTermList';
import useFetchFaculty from '../../hooks/affair/useFetchFaculty';
import useFetchStudentType from '../../hooks/affair/useFetchStudentType';
import useFetchProfilePhotos from '../../hooks/affair/useFetchProfilePhotos';


const EditProfileScreen = ({ navigation }) => {
	// custom hooks
	const { pickedImage, pickImage } = usePickImage();

	// backend hooks
	const { fetchedUserInfo } = useUserMe();
	const { genderList } = useGenderList();
	const { sexPreferenceList } = useSexPreferenceList();
	const { termList } = useTermList();
	const { fetchedFaculty, checkFaculty } = useFetchFaculty();
	const { fetchedStudentType, checkStudentType } = useFetchStudentType();

	// dates
	const today = new Date();
	const maximumDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
	const minimumDate = new Date(today.getFullYear() - 110, today.getMonth(), today.getDate());

	// profile
	const [imageUri, setImageUri] = useState("https://thispersondoesnotexist.com/image")
	const [userInfo, setUserInfo] = useState(null);
	const [age, setAge] = useState(today.getFullYear() - maximumDate.getFullYear());
	const [gender, setGender] = useState(userInfo ? userInfo.gender : "");
	const [preference, setPreference] = useState(userInfo ? userInfo.sex_preference : "");
	const [term, setTerm] = useState(userInfo ? userInfo.term : "");
	const [facultyName, setFacultyName] = useState();
	const [studentTypeName, setStudentTypeName] = useState();

	// date picker
	const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');
	const [datePickerValue, setDatePickerValue] = useState(maximumDate);

	const onChangeBirthdayPicker = (event, selectedDate) => {
		const currentDate = selectedDate || datePickerValue;

		setDatePickerValue(currentDate);
		setShowDatePicker(Platform.OS === 'ios');
	};

	// effects
	useEffect(() => {
		if (pickedImage) {
			setImageUri(pickedImage.uri);
		}
	}, [pickedImage])

	useEffect(() => {
		if (fetchedUserInfo) {
			checkFaculty(fetchedUserInfo.faculty);
			checkStudentType(fetchedUserInfo.student_type);
			setUserInfo(fetchedUserInfo)
		}
	}, [fetchedUserInfo])

	useEffect(() => {
		if (fetchedFaculty) {
			setFacultyName(fetchedFaculty.name);
		}
	}, [fetchedFaculty])

	useEffect(() => {
		if (fetchedStudentType) {
			setStudentTypeName(fetchedStudentType.name);
		}
	}, [fetchedStudentType])

	useEffect(() => {
		if (datePickerValue) {
			setAge(today.getFullYear() - datePickerValue.getFullYear());
		}
	}, [datePickerValue])

	// formatted lists from backend hooks
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

	const formattedTermList = termList ? termList.map(fetchedTerm => {
		return {
			label: `${fetchedTerm.number}`,
			value: fetchedTerm.id
		}
	}) : []

	const fall = new Animated.Value(1)

	return (
		fetchedUserInfo &&
		genderList &&
		sexPreferenceList &&
		termList
	) ? (
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
							valueText={userInfo.first_name ? userInfo.first_name : ''}
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
							valueText={userInfo.last_name ? userInfo.last_name : ''}
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
								valueText={userInfo.birthday ? userInfo.birthday : datePickerValue.toDateString()}
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
							list={formattedGenderList ? formattedGenderList : []}
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
							list={formattedSexPreferenceList ? formattedSexPreferenceList : []}
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
							valueText={userInfo.location}
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
							valueText={userInfo.email ? userInfo.email : ''}
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
							valueText={facultyName}
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
							valueText={studentTypeName}
							disabled
						/>

						<CustomDropDownInput
							label={'Semestre'}
							value={term ? term : ''}
							setValue={setTerm}
							list={formattedTermList ? formattedTermList : []}
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
							valueText={userInfo.bio}
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
		<KeyboardAwareScrollView contentContainerStyle={MainStyles.container}>
			<ActivityIndicator size="large" color="#FF6347" />
		</KeyboardAwareScrollView>
	)
};

export default EditProfileScreen;