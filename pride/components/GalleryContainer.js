import { useEffect, useState } from 'react';
import { Dimensions, TouchableOpacity, View, Image, ImageBackground } from 'react-native';

import {
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { MainStyles } from '../styles/core';

import usePickImage from '../hooks/usePickImage';

const GalleryContainer = ({ navigation, images, style, editMode }) => {
  const [currentImages, setCurrentImages] = useState(images);

  useEffect(() => {
    if (images) {
      setCurrentImages(images);
    }
  }, [images]);

  // TODO: Handle firebase image uploads
  const { pickedImage, pickImage, takePhoto, firebaseState } = usePickImage();

  const deviceWidth = Dimensions.get('window').width;
  const deviceHeight = Dimensions.get('window').height;

  useEffect(() => {
    if (pickedImage) {
      let shallowCopyCurrentImages = [...currentImages];
      let changingImage = { ...pickedImage.reference };

      changingImage.uri = pickedImage.uri;
      changingImage.addImagePlaceholder = false;

      shallowCopyCurrentImages[pickedImage.reference] = changingImage;
      setCurrentImages(shallowCopyCurrentImages);
    }
  }, [pickedImage]);

  return (
    <View style={[style, {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginLeft: 3,
    }]}>
      {
        currentImages.map((image, index) => {
          return (
            <View key={index}>
              {editMode ? (
                <TouchableOpacity
                  onPress={() => pickImage(index)}
                >
                  <ImageBackground
                    source={typeof image.uri === 'string' ? { uri: image.uri } : image.uri}
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
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => { }}
                >
                  <Image source={typeof image.uri === 'string' ? { uri: image.uri } : image.uri} style={{
                    height: deviceHeight / 3.5,
                    width: deviceWidth / 3 - 6,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: '#dddddd',
                    margin: 2
                  }} />
                </TouchableOpacity>
              )}
            </View>
          )
        })
      }
    </View>
  );
};

export default GalleryContainer;