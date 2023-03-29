import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import { COLORS, FONTS } from "../utils/theme";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray,
        indicatorStyle: {
          height: 0,
          backgroundColor: "transparent",
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabelStyle: {
            ...FONTS.body5,
          },
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="home-outline"
              type="ionicon"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
