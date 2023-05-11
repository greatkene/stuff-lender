import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const ImagePlaceHolder = () => {
  return (
    <View>
      <Text style={styles.label}>Upload images (Maximum of 5)</Text>
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
    margin: 20,
    height: 150,
    width: 200,
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
  label: {
    marginHorizontal: 20,
  },
});
