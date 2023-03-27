import { StyleSheet, View } from "react-native";
import HomeScreen from "./app/screens/HomeScreen";

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
      <View>
        <HomeScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
