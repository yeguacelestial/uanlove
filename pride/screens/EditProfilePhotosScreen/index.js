import { View } from 'react-native';

import GalleryContainer from '../../components/GalleryContainer';
import { MainStyles } from '../../styles/core';

import slides from '../Onboarding/slides';

const EditProfilePhotosScreen = ({ navigation }) => {
  const dummyImages = slides.map(slide => {
    return {
      url: slide.image,
    }
  });

  const addImagePlaceholders = 6 - dummyImages.length;

  if (addImagePlaceholders > 0) {
    for (let i = 0; i < addImagePlaceholders; i++) {
      dummyImages.push({
        addImagePlaceholder: true,
      });
    }
  }

  return (
    <View style={MainStyles.container}>
      <GalleryContainer
        images={dummyImages}
        editMode
      />
    </View>
  );
};

export default EditProfilePhotosScreen;