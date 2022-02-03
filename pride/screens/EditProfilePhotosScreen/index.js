import { View } from 'react-native';
import GalleryContainer from '../../components/GalleryContainer';
import { MainStyles } from '../../styles/core';

import slides from '../Onboarding/slides';

const EditProfilePhotosScreen = ({ navigation }) => {
  const images = slides.map(slide => {
    return {
      url: slide.image,
    }
  });

  const addImagePlaceholders = 6 - images.length;

  if (addImagePlaceholders > 0) {
    for (let i = 0; i < addImagePlaceholders; i++) {
      images.push({
        addImagePlaceholder: true,
      });
    }
  }

  return (
    <View style={MainStyles.container}>
      <GalleryContainer
        images={images}
        editMode
      />
    </View>
  );
};

export default EditProfilePhotosScreen;