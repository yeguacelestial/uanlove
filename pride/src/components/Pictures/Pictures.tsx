import React from 'react';
import {
  FlatList,
  ImageBackground,
  Pressable,
  View,
  ViewStyle
} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import usePictures from './usePictures';

export { usePictures };

export interface PicturesProps {
  pictures?: string[];
  initialIndex?: number;
  style?: ViewStyle;
}

// TODO: Test component.
const Pictures: React.FC<PicturesProps> = ({
  pictures = [],
  initialIndex = 0,
  style = {}
}: PicturesProps) => {
  const {
    setFlatList,
    layout,
    setLayout,
    getItemLayout,
    onPressNext,
    onPressPrevious
  } = usePictures(pictures, initialIndex);

  return (
    <View
      style={[styles.root, style]}
      onLayout={e => setLayout(e.nativeEvent.layout)}
    >
      <Pressable style={styles.prev} onPress={onPressPrevious} />
      <Pressable style={styles.next} onPress={onPressNext} />
      <FlatList
        ref={flatList => setFlatList(flatList)}
        horizontal
        pagingEnabled
        data={pictures}
        getItemLayout={getItemLayout}
        initialScrollIndex={initialIndex}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <ImageBackground
              resizeMode="contain"
              source={{
                uri: item
              }}
              style={{
                width: layout.width,
                height: layout.height
              }}
            />
          );
        }}
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const backgroundColor = 'black';

const styles = ScaledSheet.create({
  root: {
    flexGrow: 1,
    backgroundColor
  },
  next: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: '50%',
    right: 0,
    zIndex: 1
  },
  prev: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: '50%',
    zIndex: 1
  }
});

export default Pictures;
