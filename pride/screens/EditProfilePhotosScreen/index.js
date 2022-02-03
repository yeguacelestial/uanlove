import GalleryContainer from '../../components/GalleryContainer';

import slides from '../Onboarding/slides';

const EditProfilePhotosScreen = ({ navigation }) => {
  const images = slides.map(slide => {
    return {
      url: slide.image,
    }
  });

  const placeholders = 6 - images.length;

  if (placeholders > 0) {
    for (let i = 0; i < placeholders; i++) {
      images.push({
        addImagePlaceholder: true,
      });
    }
  }

  return (
      <GalleryContainer
        images={images}
        editMode
      />
  );
};

export default EditProfilePhotosScreen;