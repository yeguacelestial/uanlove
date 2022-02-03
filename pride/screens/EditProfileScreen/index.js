import { useRef } from 'react';
import { View } from 'react-native';

import {
	FontAwesome,
	Feather
} from '@expo/vector-icons';

import BottomSheet from 'reanimated-bottom-sheet'
import Animated from 'react-native-reanimated'

import { MainStyles } from '../../styles/core';
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
				renderContent={() => <RenderInnerBottomSheet onPressCancel={() => bs.current.snapTo(1)}/>}
				renderHeader={RenderHeaderBottomSheet}
				initialSnap={1}
				callbackNode={fall}
				enabledGestureInteraction={true}
			/>
      <Animated.View style={{
				margin: 20,
				opacity: Animated.add(0.1, Animated.multiply(fall, 1))
			}}>
				<View style={MainStyles.alignCenter}>
					<ProfilePreviewContainer
						fullName={'John Doe'}
						imageUri='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
						onPress={() => bs.current.snapTo(0)}
					/>
				</View>
				
				<CustomTextInput
					icon={
						<FontAwesome
							name='user-o'
							color={'#000'}
							size={20}
						/>
					}
					placeholder={'First Name'}
				/>

				<CustomTextInput
					icon={
						<FontAwesome
							name='user-o'
							color={'#000'}
							size={20}
						/>
					}
					placeholder={'Last Name'}
				/>

				<CustomTextInput
					icon={
						<Feather
							name='phone'
							color={'#000'}
							size={20}
						/>
					}
					placeholder={'Phone'}
				/>

				<CustomTextInput
					icon={
						<FontAwesome
							name='envelope-o'
							color={'#000'}
							size={20}
						/>
					}
					placeholder={'Email'}
				/>

				<PanelButton
					text={'Editar fotos'}
					onPress={() => navigation.navigate('EditProfilePhotos')}
				/>

				<PanelButton
					text={'Submit'}
				/>

			</Animated.View>
    </View>
  );
};

export default EditProfileScreen;