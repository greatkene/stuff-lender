import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Tabs from "./Tabs";

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScren" component={Tabs} />
    </Stack.Navigator>
  );
};

export default AppStack;
