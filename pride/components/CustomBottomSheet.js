import { useCallback, useMemo, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";

import BottomSheet from '@gorhom/bottom-sheet';

const CustomBottomSheet = ({ setShowBottomSheet }) => {
  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '25%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index, number) => {
    console.log('handleSheetChanges[index,number]: ', index, number);
    if (index === 1) {
      setShowBottomSheet(true);
    } else {
      setShowBottomSheet(false);
    }
  }, []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      enablePanDownToClose
    >
      <View style={styles.contentContainer}>
        <Text>Awesome!</Text>
      </View>
    </BottomSheet>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  }
});

export default CustomBottomSheet;