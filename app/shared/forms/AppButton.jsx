import { StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

import AppText from "../AppText";
import { COLORS, FONTS, SIZES } from "../../utils/theme";

export default function AppButton({ title, onPress, disabled }) {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.container, disabled && { backgroundColor: "#B4C8C7" }]}
      onPress={onPress}
    >
      <AppText style={styles.text}>{title}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    width: "100%",
    borderRadius: SIZES.radius,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },
  text: {
    color: COLORS.white,
    ...FONTS.body4,
  },
});
