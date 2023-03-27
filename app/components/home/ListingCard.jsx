import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../../utils/theme";
import AppText from "../../shared/AppText";

const SCREEN_WIDTH = Dimensions.get("window").width;

const ListingCard = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        }}
      />
      <View style={styles.cardSpace}>
        <AppText style={{ ...FONTS.h4, color: COLORS.secondary }}>
          Clean Slate Bicycle Bicycle Again
        </AppText>
        <AppText
          style={{
            ...FONTS.body5,
            color: COLORS.secondary,
            textTransform: "uppercase",
            marginTop: 5,
          }}
        >
          Atlanta
        </AppText>
        <View
          style={{
            paddingVertical: 3,
            backgroundColor: COLORS.primaryLight,
            borderRadius: SIZES.radius,
            width: "100%",
            marginVertical: 10,
          }}
        >
          <AppText
            style={{
              alignSelf: "center",
              ...FONTS.body5,
            }}
          >
            {" "}
            $300,000 / Day
          </AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListingCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: SIZES.radius,
    marginVertical: SIZES.body5,
    padding: 10,
    borderWidth: 1,
    overflow: "hidden",
    width: SCREEN_WIDTH * 0.9175,
    height: SCREEN_WIDTH * 0.3575,
    backgroundColor: COLORS.primary,
  },
  img: {
    width: "40%",
    height: "100%",
    borderRadius: SIZES.radius,
  },

  cardSpace: {
    paddingLeft: 20,
    justifyContent: "center",
    width: "60%",
  },
});
