import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import AppText from "../../shared/AppText";

const ImagePlaceHolder = () => {
  return (
    <View>
      <AppText style={styles.label}>Upload images (Maximum of 5)</AppText>
      <Pressable style={styles.container}>
        <AntDesign name="pluscircle" size={44} />
      </Pressable>
    </View>
  );
};

export default ImagePlaceHolder;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    height: 150,
    width: 200,
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
});
