import { StyleSheet, View } from "react-native";
import React from "react";

const Screen = ({ children, color }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: color,
      }}
    >
      {children}
    </View>
  );
};

export default Screen;

const styles = StyleSheet.create({});
