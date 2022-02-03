import { Dimensions, TouchableOpacity, View, Image} from 'react-native';

const GalleryContainer = ({ navigation, images, style }) => {
  const deviceWidth = Dimensions.get('window').width;
  const deviceHeight = Dimensions.get('window').height;

  return (
      <View style={[style, {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }]}>
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
  );
};

export default GalleryContainer;