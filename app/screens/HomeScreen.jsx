import { StyleSheet, View } from "react-native";
import React from "react";
import Constants from "expo-constants";

import Header from "../components/home/Header";
import Screen from "../components/Screen";
import SearchInput from "../components/home/SearchInput";
import { COLORS } from "../utils/theme";

const Home = () => {
  return (
    <Screen color={COLORS.secondary}>
      <View
        style={{
          marginHorizontal: 20,
          marginTop: Constants.statusBarHeight + 10,
        }}
      >
        <Header />
        {/* <SearchInput /> */}
      </View>
    </Screen>
  );
};

export default Home;

const styles = StyleSheet.create({});
