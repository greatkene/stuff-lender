import { StyleSheet, View } from "react-native";
import React from "react";
import Constants from "expo-constants";

const Screen = ({ children, color }) => {
  return (
    <View
      style={{
        flex: 1,
        marginTop: Constants.statusBarHeight + 10,
        backgroundColor: color,
        marginHorizontal: 25,
      }}
    >
      {children}
    </View>
  );
};

export default Screen;

const styles = StyleSheet.create({});
