import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../utils/theme";

const AppText = ({ children, style }) => {
  return (
    <View>
      <Text style={[styles.text, style]}>{children}</Text>
    </View>
  );
};

export default AppText;

const styles = StyleSheet.create({
  text: {
    color: COLORS.primary,
    ...FONTS.body3,
  },
});
