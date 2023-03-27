import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "../../utils/theme";

const SearchInput = () => {
  return (
    <View style={styles.searchByTextWrapper}>
      <Feather name="search" size={24} color="black" />
      <TextInput
        placeholder="Search in Rent.com"
        style={styles.searchPlaceholder}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  searchByTextWrapper: {
    backgroundColor: COLORS.gray,
    flexDirection: "row",
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
  searchPlaceholder: {
    width: "100%",
    marginLeft: 5,
  },
});
