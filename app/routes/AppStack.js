import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Tabs from "./Tabs";
import CardDetailsScreen from "../screens/CardDetailsScreen";

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={Tabs} />
    </Stack.Navigator>
  );
};

export default AppStack;
