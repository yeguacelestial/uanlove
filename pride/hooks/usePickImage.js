import { useState } from 'react';

import * as ImagePicker from 'expo-image-picker';

const usePickImage = () => {
  const [pickedImage, setPickedImage] = useState(null);

  const pickImage = async (reference) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setPickedImage({
        reference,
        uri: result.uri
      });
    }
  }

  return { pickedImage, pickImage };
};

export default usePickImage;