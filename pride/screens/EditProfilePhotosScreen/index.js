import { useState } from 'react';

import { View } from 'react-native';
import CustomBottomSheet from '../../components/CustomBottomSheet';

import GalleryContainer from '../../components/GalleryContainer';
import useFetchProfilePhotos from '../../hooks/affair/useFetchProfilePhotos';
import { MainStyles } from '../../styles/core';

const EditProfilePhotosScreen = ({ navigation }) => {
  const [showBottomSheet, setShowBottomSheet] = useState(false);

  const { profilePhotos } = useFetchProfilePhotos();

  const imageContainers = profilePhotos.map(photoObj => {
    return {
      uri: photoObj.photo_url,
    }
  });

  // Generate add image placeholder
  const imagePlaceholders = 6 - imageContainers.length;

  if (imagePlaceholders > 0) {
    for (let i = 0; i < imagePlaceholders; i++) {
      imageContainers.push({
        addImagePlaceholder: true,
      });
    }
  }

  return (
    <View style={MainStyles.container}>
      {showBottomSheet ? (
        <CustomBottomSheet />
      ) : (
        <GalleryContainer
          images={imageContainers}
          editMode
          setShowBottomSheet={setShowBottomSheet}
        />
      )}
    </View>
  );
};

export default EditProfilePhotosScreen;