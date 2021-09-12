import React from 'react';
import {
  FlatList,
  ImageBackground,
  Pressable,
  View,
  ViewStyle
} from 'react-native';
import { ms, ScaledSheet } from 'react-native-size-matters';
import usePictures from './usePictures';
import Indicators from './Indicators';

export interface PicturesProps {
  pictures?: string[];
  initialPicture?: number;
  style?: ViewStyle;
  onPictureChange?: (index: number) => void;
  indicatorColor?: string;
  indicatorsHorizontalPadding?: number;
  indicatorsTopPadding?: number;
}

const Pictures: React.FC<PicturesProps> = ({
  pictures = [],
  initialPicture = 0,
  style = {},
  indicatorColor = 'rgba(255, 255, 255, 0.6)',
  indicatorsHorizontalPadding = ms(4),
  indicatorsTopPadding = ms(4),
  onPictureChange
}: PicturesProps) => {
  const {
    picture,
    setFlatList,
    layout,
    setLayout,
    getItemLayout,
    onPressNext,
    onPressPrevious
  } = usePictures({
    pictures,
    initialPicture,
    onPictureChange
  });

  return (
    <View
      style={[styles.root, style]}
      onLayout={e => setLayout(e.nativeEvent.layout)}
    >
      <Indicators
        color={indicatorColor}
        horizontalPadding={indicatorsHorizontalPadding}
        picture={picture}
        pictures={pictures}
        topPadding={indicatorsTopPadding}
      />
      <Pressable
        accessibilityLabel="previous-picture"
        focusable={false}
        style={styles.prev}
        onPress={onPressPrevious}
      />
      <Pressable
        accessibilityLabel="next-picture"
        focusable={false}
        style={styles.next}
        onPress={onPressNext}
      />
      <FlatList
        ref={flatList => setFlatList(flatList)}
        horizontal
        pagingEnabled
        data={pictures}
        getItemLayout={getItemLayout}
        initialScrollIndex={initialPicture}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <ImageBackground
              accessibilityLabel={`picture-${index + 1}`}
              accessibilityRole="image"
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
    opacity: 0,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: '50%',
    right: 0,
    zIndex: 1
  },
  prev: {
    opacity: 0,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: '50%',
    zIndex: 1
  }
});

export default Pictures;
