// @refresh reset
import { useCallback, useEffect, useState } from 'react';
import { FlatList } from 'react-native';

export interface usePicturesProps {
  pictures?: string[];
  initialPicture?: number;
  onPictureChange?: (index: number) => void;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const usePictures = ({
  pictures = [],
  initialPicture = 0,
  onPictureChange = () => {
    return;
  }
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

  const [index, setIndex] = useState(initialPicture);

  const scrollToIndex = useCallback(
    (index: number) => {
      if (pictures.length === 0 || index > pictures.length - 1 || index < 0)
        return;

      flatList?.scrollToIndex({
        index
      });

      setIndex(index);
    },
    [flatList, pictures]
  );

  const onPressNext = useCallback(() => {
    scrollToIndex(index + 1);
  }, [index, scrollToIndex]);

  const onPressPrevious = useCallback(() => {
    scrollToIndex(index - 1);
  }, [index, scrollToIndex]);

  useEffect(() => {
    onPictureChange(index);
  }, [index, onPictureChange]);

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
