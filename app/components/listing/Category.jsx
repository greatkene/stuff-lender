import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../utils/theme";

const Category = () => {
  return (
    <View style={styles.categoryContainer}>
      <Text style={{ fontSize: 16 }}>Category</Text>
      <AntDesign name="right" size={24} />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  categoryContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    margin: 10,
    paddingVertical: 10,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 5,
  },
});
