import {
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import {
  MaterialCommunityIcons,
} from '@expo/vector-icons';

import { MainStyles } from '../../../styles/core';

const ProfilePreviewContainer = ({ imageUri, onPress }) => {
  return (
    <View style={MainStyles.alignCenter}>
      <TouchableOpacity onPress={onPress}>
        <View style={[
          MainStyles.alignCenter,
          MainStyles.justifyCenter,
          {
          height: 130,
          }
        ]}>
          <ImageBackground
            source={{
              uri: imageUri
            }}
            style={{
              height: 115,
              width: 115,
            }}
            imageStyle={{
              borderRadius: 150
            }}
          >
            <View style={MainStyles.container}>
              <MaterialCommunityIcons
                name="pencil"
                size={35}
                color="#fff"
                style={[
                  MainStyles.alignCenter,
                  MainStyles.justifyCenter,
                  {
                    opacity: 0.5,
                  }
                ]}
              />
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProfilePreviewContainer;