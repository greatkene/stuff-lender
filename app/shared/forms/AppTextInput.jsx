import { StyleSheet, View, Platform, TextInput } from "react-native";

import React from "react";
import { SIZES, COLORS, FONTS } from "../../utils/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../AppText";

const AppTextInput = ({
  icon,
  label,
  errors,
  half,
  textarea,
  ...otherProps
}) => {
  return (
    <View style={[half && { width: "48%" }]}>
      <AppText style={{ ...FONTS.body5, color: COLORS.black }}>{label}</AppText>
      <View
        style={[
          styles.container,
          half && styles.half,
          textarea && styles.textarea,
        ]}
      >
        {icon && (
          <MaterialCommunityIcons
            name={icon}
            size={20}
            color={COLORS.primary400}
            style={styles.icon}
          />
        )}
        <TextInput
          style={[styles.text, textarea && styles.textareaText]}
          {...otherProps}
        />
      </View>

      {errors}
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    borderRadius: SIZES.radius,
    flexDirection: "row",
    width: "100%",
    height: 50,
    paddingHorizontal: 12,
    borderWidth: 1.5,
    borderColor: COLORS.gray2,
    color: COLORS.black,
    backgroundColor: COLORS.white,
  },
  textarea: {
    height: 150,
  },
  text: {
    ...FONTS.body4,
    width: 310,
  },
  textareaText: {
    marginBottom: Platform.OS === "ios" ? 0 : 100,
  },
  icon: {
    marginRight: 10,
    top: Platform.OS === "ios" ? 16 : 12,
  },
});
