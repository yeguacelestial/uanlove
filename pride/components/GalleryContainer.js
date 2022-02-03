import { Dimensions, TouchableOpacity, View, Image, ImageBackground } from 'react-native';
import { MainStyles } from '../styles/core';

import {
  MaterialCommunityIcons,
} from '@expo/vector-icons';

import * as ImagePicker from 'expo-image-picker';
import { useEffect, useState } from 'react';


const GalleryContainer = ({ navigation, images, style, editMode }) => {
  const [image1, setImage1] = useState(null);

  const pickImage1 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage1(result.uri)
    }
  }

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
            onPress={pickImage1}
          >
            {
              editMode ? (
                <ImageBackground
                  source={image1 ? image1.uri : image.url}
                  style={{
                    height: deviceHeight / 3.5,
                    width: deviceWidth / 3 - 6,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: '#dddddd',
                    margin: 2,
                    backgroundColor: 'black',
                    opacity: 0.7
                  }}
                  imageStyle={{
                    opacity: 0.7
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