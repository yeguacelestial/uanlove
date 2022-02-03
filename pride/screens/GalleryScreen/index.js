import { Dimensions, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';

import slides from '../Onboarding/slides';

const GalleryScreen = ({ navigation }) => {
  const deviceWidth = Dimensions.get('window').width;
  const deviceHeight = Dimensions.get('window').height;

  const images = slides.map(slide => {
    return {
      url: slide.image,
    }
  });

  return (
    <ScrollView>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
        {
          images.map((image, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => { }}
            >
              <Image source={image.url} style={{
                height: deviceHeight / 3,
                width: deviceWidth / 3 - 6,
                borderRadius: 10,
                margin: 2
              }} />
            </TouchableOpacity>
          ))
        }
      </View>
    </ScrollView>
  );
};

export default GalleryScreen;

const styles = StyleSheet.create({});
