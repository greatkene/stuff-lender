import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";

import Header from "../components/home/Header";
import Screen from "../components/Screen";
import SearchInput from "../components/home/SearchInput";
import { COLORS } from "../utils/theme";
import Category from "../components/home/Category";
import ListingCard from "../components/home/ListingCard";

const HomeScreen = () => {
  return (
    <ScrollView>
      <Screen color={COLORS.secondary}>
        <View
          style={{
            marginHorizontal: 20,
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

export default HomeScreen;

const styles = StyleSheet.create({});
