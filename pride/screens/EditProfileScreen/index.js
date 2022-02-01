import { useRef } from 'react';

import {
	ImageBackground,
	Text,
	TextInput,
	TouchableOpacity,
	View 
} from 'react-native';

import {
	MaterialCommunityIcons,
	FontAwesome,
	Feather
} from '@expo/vector-icons';

import BottomSheet from 'reanimated-bottom-sheet'
import Animated from 'react-native-reanimated'
import { MainStyles } from '../../styles/core';

const EditProfileScreen = ({ navigation }) => {
  const renderInner = () => (
		<View style={{
      padding: 20,
      backgroundColor: '#ffffff',
    }}>

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

				<TouchableOpacity style={MainStyles.panelButton}>
					<Text style={MainStyles.panelButtonTitle}>
						Take Photo
					</Text>
				</TouchableOpacity>

				<TouchableOpacity style={MainStyles.panelButton}>
					<Text style={MainStyles.panelButtonTitle}>
						Choose From Library
					</Text>
				</TouchableOpacity>

				<TouchableOpacity style={MainStyles.panelButton} onPress={() => bs.current.snapTo(1)}>
					<Text style={MainStyles.panelButtonTitle}>
						Cancel
					</Text>
				</TouchableOpacity>
			</View>
		</View>	
	)

	const renderHeader = () => (
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
	)

	const bs = useRef(0)
	const fall = new Animated.Value(1)
	
  return (
    <View style={MainStyles.fx1}>
			<BottomSheet
				ref={bs}
				snapPoints={[330, 0]}
				renderContent={renderInner}
				renderHeader={renderHeader}
				initialSnap={1}
				callbackNode={fall}
				enabledGestureInteraction={true}
			/>
      <Animated.View style={{
				margin: 20,
				opacity: Animated.add(0.1, Animated.multiply(fall, 1))
			}}>
				<View style={MainStyles.alignCenter}>
					<TouchableOpacity onPress={() => bs.current.snapTo(0)}>
						<View style={[
              MainStyles.alignCenter,
              MainStyles.justifyCenter,
              {
							height: 100,
							width: 100,
							borderRadius: 15,
						  }
            ]}>
							<ImageBackground
								source={{
									uri: 'https://avatars.githubusercontent.com/u/52676055?s=400&u=18d95ed91216e90edacde8a5b0c7ecb8399657b5&v=4'
								}}
								style={{
									height: 100,
									width: 100,
								}}
								imageStyle={{
									borderRadius: 15
								}}
							>
								<View style={MainStyles.container}>
									<MaterialCommunityIcons
										name="camera"
										size={35}
										color="#fff"
										style={[
                      MainStyles.alignCenter,
                      MainStyles.justifyCenter,
                      {
                        opacity: 0.7,
                        borderWidth: 1,
                        borderColor: '#fff',
                        borderRadius: 10,
										  }
                    ]}
									/>
								</View>
							</ImageBackground>
						</View>
					</TouchableOpacity>
					<Text style={{
						marginTop: 10,
						fontSize: 18,
						fontWeight: 'bold'
					}}>
						John Doe
					</Text>
				</View>

				<View style={MainStyles.action}>
					<FontAwesome
						name='user-o'
						color={'#000'}
						size={20}
					/>
					<TextInput
						placeholder='First Name'
						placeholderTextColor={'#666666'}
						autoCorrect={false}
						style={[
              MainStyles.textInput,
              {
							color: '#000'
						  }
            ]}
					/>
				</View>

				<View style={MainStyles.action}>
					<FontAwesome
						name='user-o'
						color={'#000'}
						size={20}
					/>
					<TextInput
						placeholder='Last Name'
						placeholderTextColor={'#666666'}
						autoCorrect={false}
						style={[
              MainStyles.textInput, {
							color: '#000'
						}]}
					/>
				</View>

				<View style={MainStyles.action}>
					<Feather
						name='phone'
						color={'#000'}
						size={20}
					/>
					<TextInput
						placeholder='Phone'
						placeholderTextColor={'#666666'}
						autoCorrect={false}
						style={[
              MainStyles.textInput,
              {
							color: '#000'
						  }
            ]}
						keyboardType='number-pad'
					/>
				</View>

				<View style={MainStyles.action}>
					<FontAwesome
						name='envelope-o'
						color={'#000'}
						size={20}
					/>
					<TextInput
						placeholder='Email'
						placeholderTextColor={'#666666'}
						autoCorrect={false}
						style={[
              MainStyles.textInput,
              {
							color: '#000'
						  }
            ]}
						keyboardType='email-address'
					/>
				</View>

				<View style={MainStyles.action}>
					<FontAwesome
						name='globe'
						color={'#000'}
						size={20}
					/>
					<TextInput
						placeholder='Country'
						placeholderTextColor={'#666666'}
						autoCorrect={false}
						style={[
              MainStyles.textInput,
              {
							color: '#000'
						  }
            ]}
					/>
				</View>

				<View style={MainStyles.action}>
					<MaterialCommunityIcons
						name='map-marker-outline'
						color={'#000'}
						size={20}
					/>
					<TextInput
						placeholder='City'
						placeholderTextColor={'#666666'}
						autoCorrect={false}
						style={[
              MainStyles.textInput,
              {
							color: '#000'
						  }
            ]}
					/>
				</View>

				<TouchableOpacity
					style={{
            padding: 15,
            borderRadius: 10,
            backgroundColor: '#FF6347',
            alignItems: 'center',
            marginTop: 10,
          }}
					onPress={() => {}}
				>
					<Text style={MainStyles.panelButtonTitle}>
						Submit
					</Text>
				</TouchableOpacity>
			</Animated.View>
    </View>
  );
};

export default EditProfileScreen;