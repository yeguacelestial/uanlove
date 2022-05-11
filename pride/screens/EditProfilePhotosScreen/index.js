import { useState } from 'react';

import { View } from 'react-native';
import CustomBottomSheet from '../../components/CustomBottomSheet';

import GalleryContainer from '../../components/GalleryContainer';
import useFetchProfilePhotos from '../../hooks/affair/useFetchProfilePhotos';
import { MainStyles } from '../../styles/core';

const EditProfilePhotosScreen = ({ navigation }) => {
  const [bottomSheetParams, setBottomSheetParams] = useState({
    imageReference: null,
    visible: false,
  });

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
      <GalleryContainer
        images={imageContainers}
        editMode
        bottomSheetParams={bottomSheetParams}
        setBottomSheetParams={setBottomSheetParams}
      />
      {bottomSheetParams.visible ? (
        <CustomBottomSheet
          bottomSheetParams={bottomSheetParams}
          setBottomSheetParams={setBottomSheetParams}
        />
      ) : (
        null
      )}
    </View>
  );
};

export default EditProfilePhotosScreen;