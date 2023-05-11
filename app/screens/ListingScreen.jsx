import { StyleSheet, Text, View, Platform } from "react-native";
import React from "react";
import { withAuthenticator } from "aws-amplify-react-native";
import { Auth } from "aws-amplify";
import ImagePlaceHolder from "../components/listing/ImagePlaceHolder";
import Category from "../components/listing/Category";
import Screen from "../components/Screen";
import { COLORS } from "../utils/theme";

const ListingScreen = () => {
  Auth.currentAuthenticatedUser()
    .then((user) => {
      console.log(user.attributes.email);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  return (
    <Screen color={COLORS.secondary}>
      <View style={styles.container}>
        <ImagePlaceHolder />
        <Category />
        <Text>Location</Text>
        <Text>Title</Text>
        <Text>Description</Text>
        <Text>Value</Text>
      </View>
    </Screen>
  );
};

export default withAuthenticator(ListingScreen);

const styles = StyleSheet.create({
  container: {
    marginVertical: Platform.OS === "ios" ? "1%" : "10%",
  },
});
