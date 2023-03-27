import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { COLORS, FONTS } from "../../utils/theme";

const SearchInput = () => {
  return (
    <View style={styles.searchByTextWrapper}>
      <TextInput placeholder="Search" style={styles.searchPlaceholder} />
      <Feather name="search" size={24} color={COLORS.primaryLight} />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  searchByTextWrapper: {
    backgroundColor: COLORS.white,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 5,
    marginTop: "17%",
    elevation: 20,
    shadowColor: COLORS.gray2,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
  },
  searchPlaceholder: {
    width: "80%",
    marginLeft: 5,
    ...FONTS.body4,
  },
});
