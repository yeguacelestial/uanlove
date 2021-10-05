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
  picture?: number;
  style?: ViewStyle;
  indicatorColor?: string;
  indicatorsHorizontalPadding?: number;
  indicatorsTopPadding?: number;
  backgroundColor?: string;
  setPicture?: (picture: number) => void;
}

const Pictures: React.FC<PicturesProps> = ({
  pictures = [],
  picture = 0,
  style = {},
  backgroundColor = 'black',
  indicatorColor = 'rgba(255, 255, 255, 0.6)',
  indicatorsHorizontalPadding = ms(4),
  indicatorsTopPadding = ms(4),
  setPicture
}: PicturesProps) => {
  const {
    setFlatList,
    layout,
    setLayout,
    getItemLayout,
    onPressNext,
    onPressPrevious
  } = usePictures({
    pictures,
    picture,
    setPicture
  });

  return (
    <View
      style={[
        {
          backgroundColor,
          flexGrow: 1
        },
        style
      ]}
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
        initialScrollIndex={picture}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <ImageBackground
              accessibilityLabel={`${
                index === picture ? 'visible-' : ''
              }picture-${index + 1}`}
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

const styles = ScaledSheet.create({
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
