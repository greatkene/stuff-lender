import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { withAuthenticator } from "aws-amplify-react-native";

const ListingScreen = () => {
  return (
    <SafeAreaView>
      <Text>Listing</Text>
    </SafeAreaView>
  );
};

export default withAuthenticator(ListingScreen);

const styles = StyleSheet.create({});
