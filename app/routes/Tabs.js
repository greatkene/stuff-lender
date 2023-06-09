import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CardDetailsScreen from "../screens/CardDetailsScreen";
import HomeScreen from "../screens/HomeScreen";
import ListingScreen from "../screens/ListingScreen";
import TabBar from "./TabBar";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Details" component={CardDetailsScreen} />
      <Tab.Screen name="Listing" component={ListingScreen} />
    </Tab.Navigator>
  );
};

export default Tabs;
