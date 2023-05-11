import { StyleSheet, View } from "react-native";
import { Amplify, Analytics, Auth } from "aws-amplify";
import awsconfig from "./src/aws-exports";
Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true,
  },
});

import {
  useFonts,
  Spartan_100Thin,
  Spartan_200ExtraLight,
  Spartan_300Light,
  Spartan_400Regular,
  Spartan_500Medium,
  Spartan_600SemiBold,
  Spartan_700Bold,
  Spartan_800ExtraBold,
  Spartan_900Black,
} from "@expo-google-fonts/spartan";
import Router from "./app/routes/Router";

export default function App() {
  let [fontsLoaded] = useFonts({
    Spartan_100Thin,
    Spartan_200ExtraLight,
    Spartan_300Light,
    Spartan_400Regular,
    Spartan_500Medium,
    Spartan_600SemiBold,
    Spartan_700Bold,
    Spartan_800ExtraBold,
    Spartan_900Black,
  });

  if (!fontsLoaded) {
    return <View></View>;
  } else {
    return (
      <>
        <Router />
      </>
    );
  }
}

const styles = StyleSheet.create({});
