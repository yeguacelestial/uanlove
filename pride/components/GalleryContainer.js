import { Dimensions, TouchableOpacity, View, Image, ImageBackground } from 'react-native';
import { MainStyles } from '../styles/core';

import {
  MaterialCommunityIcons,
} from '@expo/vector-icons';

const GalleryContainer = ({ navigation, images, style, editMode }) => {
  const deviceWidth = Dimensions.get('window').width;
  const deviceHeight = Dimensions.get('window').height;

  return (
    <View style={[style, {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginLeft: 3,
    }]}>
      {
        images.map((image, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => { }}
          >
            {
              editMode ? (
                <ImageBackground
                  source={image.url}
                  style={{
                    height: deviceHeight / 3.5,
                    width: deviceWidth / 3 - 6,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: '#dddddd',
                    margin: 2,
                    backgroundColor: 'black',
                    opacity: 0.6
                  }}
                >
                  <View style={MainStyles.container}>
                    {
                      image.addImagePlaceholder ? (
                        <MaterialCommunityIcons
                          name="plus"
                          size={35}
                          color="#fff"
                          style={[
                            MainStyles.alignCenter,
                            MainStyles.justifyCenter,
                          ]}
                        />
                      ) : (
                        <MaterialCommunityIcons
                          name="camera"
                          size={35}
                          color="#fff"
                          style={[
                            MainStyles.alignCenter,
                            MainStyles.justifyCenter,
                          ]}
                        />
                      )
                    }

                  </View>
                </ImageBackground>
              ) : (
                <Image source={image.url} style={{
                  height: deviceHeight / 3.5,
                  width: deviceWidth / 3 - 6,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: '#dddddd',
                  margin: 2
                }} />
              )
            }

          </TouchableOpacity>
        ))
      }
    </View>
  );
};

export default GalleryContainer;