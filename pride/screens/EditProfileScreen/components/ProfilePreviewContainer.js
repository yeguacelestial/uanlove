import {
  View,
  TouchableOpacity,
  ImageBackground,
  Text 
} from 'react-native';
import { MainStyles } from '../../../styles/core';

import {
	MaterialCommunityIcons,
} from '@expo/vector-icons';

const ProfilePreviewContainer = ({ imageUri, fullName, onPress }) => {
  return (
    <View style={MainStyles.alignCenter}>
      <TouchableOpacity onPress={onPress}>
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
              uri: imageUri
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
        {fullName}
      </Text>
    </View>
  );
};

export default ProfilePreviewContainer;