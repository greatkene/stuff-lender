import {
  NativeModules,
  Platform,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import React from "react";

const { StatusBarManager } = NativeModules;

const Screen = ({ children, color }) => {
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBarManager.HEIGHT : 0,
        flex: 1,
        backgroundColor: color,
      }}
    >
      {children}
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({});
