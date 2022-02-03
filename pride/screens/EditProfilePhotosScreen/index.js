import GalleryContainer from '../../components/GalleryContainer';

import slides from '../Onboarding/slides';

const EditProfilePhotosScreen = ({ navigation }) => {
  const images = slides.map(slide => {
    return {
      url: slide.image,
    }
  });

  return (
      <GalleryContainer
        images={images}
      />
  );
};

export default EditProfilePhotosScreen;