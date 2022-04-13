import { useState, useEffect } from 'react';
import { LogBox } from 'react-native';

import uuid from "uuid";
import * as ImagePicker from 'expo-image-picker';
import { getApps, initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAlZruO2T_JNOWn4ysfX6AryR6Dzm_VVaA",
  authDomain: "blobtest-36ff6.firebaseapp.com",
  databaseURL: "https://blobtest-36ff6.firebaseio.com",
  storageBucket: "blobtest-36ff6.appspot.com",
  messagingSenderId: "506017999540",
};

// Editing this file with fast refresh will reinitialize the app on every refresh, let's not do that
if (!getApps().length) {
  initializeApp(firebaseConfig);
}

// Firebase sets some timers for a long period, which will trigger some warnings.
LogBox.ignoreLogs([`Setting a timer for a long period`]);

const usePickImage = () => {
  const [firebaseState, setFirebaseState] = useState({
    image: null,
    uploading: false
  })
  const [pickedImage, setPickedImage] = useState(null);

  // If permissions are not granted, ask for them
  useEffect(async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }, []);

  // If user picks an image, upload it to firebase and get the URL
  useEffect(async () => {
    if (pickedImage) {
      setFirebaseState({
        loading: true,
      });

      const imageFirebaseUrl = await firebaseUploadImageAsync(pickedImage.uri)
      setFirebaseState({
        image: imageFirebaseUrl,
        loading: false,
      })
    }
  }, [pickedImage]);

  const pickImage = async (reference) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
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

  const takePhoto = async (reference) => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.cancelled) {
      setPickedImage({
        reference,
        uri: result.uri
      });
    }
  }

  return { pickedImage, pickImage, takePhoto, firebaseState };
};

async function firebaseUploadImageAsync(uri) {
  // why use XMLHttpRequest instead of fetch?
  // https://github.com/expo/expo/issues/2402#issuecomment-443726662

  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    }
    xhr.onerror = function (e) {
      console.log(e);
      reject(new TypeError('Network request failed'));
    }
    xhr.responseType = 'blob';
    xhr.open('GET', uri, true);
    xhr.send(null);
  })

  const firebaseFileRef = ref(getStorage(), uuid.v4());
  const firebaseResult = await uploadBytes(firebaseFileRef, blob);

  blob.close();

  return await getDownloadURL(firebaseFileRef);
}

export default usePickImage;