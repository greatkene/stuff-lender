import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import Constants from "expo-constants";

import Header from "../components/home/Header";
import Screen from "../components/Screen";
import SearchInput from "../components/home/SearchInput";
import { COLORS } from "../utils/theme";
import Category from "../components/home/Category";
import ListingCard from "../components/home/ListingCard";

const Home = () => {
  return (
    <ScrollView>
      <Screen color={COLORS.secondary}>
        <View
          style={{
            marginHorizontal: 20,
            marginTop: Constants.statusBarHeight + 10,
          }}
        >
          <Header />
          <SearchInput />
          <Category />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
        </View>
      </Screen>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
