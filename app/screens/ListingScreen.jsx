import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { withAuthenticator } from "aws-amplify-react-native";
import { Auth } from "aws-amplify";

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
    <SafeAreaView>
      <View>
        <Text>Images</Text>
        <Text>Category</Text>
      </View>
    </SafeAreaView>
  );
};

export default withAuthenticator(ListingScreen);

const styles = StyleSheet.create({});
