import { StyleSheet, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import AppText from "../../shared/AppText";
import { COLORS, FONTS } from "../../utils/theme";

const Header = () => {
  return (
    <View style={styles.wrapper}>
      <View>
        <AppText
          style={{
            ...FONTS.body4,
          }}
        >
          Your location
        </AppText>
        <AppText
          style={{
            ...FONTS.h3,
          }}
        >
          Ikorodu, LG
        </AppText>
      </View>
      <View
        style={{
          marginTop: 12,
        }}
      >
        <Ionicons color={COLORS.primary} name="notifications" size={28} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    width: "100%",
  },
});
