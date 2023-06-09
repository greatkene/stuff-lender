import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../utils/theme";

const Category = ({ placeholder }) => {
  return (
    <View style={styles.categoryContainer}>
      <Text style={{ fontSize: 16 }}>{placeholder}</Text>
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
    paddingVertical: 12,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    padding: 5,
    marginVertical: 10,
  },
});
