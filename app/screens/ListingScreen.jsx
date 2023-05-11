import { StyleSheet, View, Platform, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { withAuthenticator } from "aws-amplify-react-native";
import { Auth } from "aws-amplify";
import ImagePlaceHolder from "../components/listing/ImagePlaceHolder";
import Category from "../components/listing/Category";
import Screen from "../components/Screen";
import { COLORS } from "../utils/theme";
import AppTextInput from "../shared/forms/AppTextInput";
import AppButton from "../shared/forms/AppButton";

const ListingScreen = () => {
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const fetchUserEmail = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        setUserEmail(user.attributes.email);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserEmail();
  }, []);

  return (
    <Screen color={COLORS.secondary}>
      <ScrollView>
        <View style={styles.container}>
          <ImagePlaceHolder />
          <Category placeholder="Select Category" />
          <Category placeholder="Select Location" />
          <AppTextInput placeholder="Title" />
          <AppTextInput half placeholder="Add Value of stuff" />
          <AppTextInput
            multiline={true}
            numberOfLines={10}
            placeholder="Write a description"
            textarea
          />
          <AppButton title="Post Advertisement" />
        </View>
      </ScrollView>
    </Screen>
  );
};

export default withAuthenticator(ListingScreen);

const styles = StyleSheet.create({
  container: {
    marginVertical: Platform.OS === "ios" ? "1%" : "5%",
    marginHorizontal: 20,
  },
});
