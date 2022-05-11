import { useCallback, useMemo, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";

import BottomSheet from '@gorhom/bottom-sheet';
import PanelButton from "./PanelButton";
import usePickImage from "../hooks/usePickImage";

const CustomBottomSheet = ({ bottomSheetParams, setBottomSheetParams }) => {
  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['35%', '35%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index, number) => {
    console.log('handleSheetChanges[index,number]: ', index, number);
    if (index === 1) {
      setBottomSheetParams({ ...bottomSheetParams, visible: true });
    } else {
      setBottomSheetParams({ ...bottomSheetParams, visible: false });
    }
  }, []);

  const { pickedImage, pickImage, takePhoto, firebaseState } = usePickImage();

  return (
    <BottomSheet
      enablePanDownToClose
      backgroundStyle={{ backgroundColor: '#f5f5f5' }}
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
    >
      <View style={styles.contentContainer}>
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginTop: 10,
          marginBottom: 10,
        }}>Selecciona una opción</Text>
        <PanelButton
          text={'Abrir camara'}
          onPress={() => takePhoto(bottomSheetParams.imageReference)}
          style={{
            width: '80%',
          }}
        />
        <PanelButton
          text={'Subir desde galería'}
          onPress={() => pickImage(bottomSheetParams.imageReference)}
          style={{
            width: '80%',
          }}
        />
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