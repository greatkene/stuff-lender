import { StyleSheet, View } from "react-native";
import React from "react";
import AppText from "../../shared/AppText";

const Header = () => {
  return (
    <View style={styles.wrapper}>
      <AppText>Header</AppText>
      <AppText>Header</AppText>
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
