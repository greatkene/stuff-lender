import { StyleSheet, View } from "react-native";
import React from "react";
import Constants from "expo-constants";

const Screen = ({ children, color }) => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: Constants.statusBarHeight + 10,
        paddingHorizontal: 20,
        backgroundColor: color,
      }}
    >
      {children}
    </View>
  );
};

export default Screen;

const styles = StyleSheet.create({});
