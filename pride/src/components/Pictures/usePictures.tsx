// @refresh reset
import { useCallback, useState } from 'react';
import { FlatList } from 'react-native';

export interface usePicturesProps {
  pictures?: string[];
  picture?: number;
  setPicture?: (current: number) => void;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const usePictures = ({
  pictures = [],
  picture = 0,
  setPicture
}: usePicturesProps) => {
  const [layout, setLayout] = useState({
    width: 0,
    height: 0
  });

  const getItemLayout = useCallback(
    (_, index: number) => ({
      length: layout.width,
      offset: layout.width * index,
      index
    }),
    [layout]
  );

  const [flatList, setFlatList] = useState<FlatList<string> | null>(null);

  const scrollToIndex = useCallback(
    (index: number) => {
      if (pictures.length === 0 || index > pictures.length - 1 || index < 0)
        return;

      if (setPicture) {
        flatList?.scrollToIndex({
          index
        });

        setPicture(index);
      }
    },
    [flatList, setPicture, pictures.length]
  );

  const onPressNext = useCallback(() => {
    scrollToIndex(picture + 1);
  }, [picture, scrollToIndex]);

  const onPressPrevious = useCallback(() => {
    scrollToIndex(picture - 1);
  }, [picture, scrollToIndex]);

  return {
    setFlatList,
    layout,
    setLayout,
    getItemLayout,
    onPressNext,
    onPressPrevious
  };
};

export default usePictures;
