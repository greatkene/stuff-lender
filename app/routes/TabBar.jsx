import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const TabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            style={[styles.tabButton, isFocused && styles.tabButtonFocused]}
            onPress={onPress}
          >
            <Text
              style={[styles.tabLabel, isFocused && styles.tabLabelFocused]}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#dddddd",
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabButtonFocused: {
    borderBottomWidth: 3,
    borderBottomColor: "#000000",
  },
  tabLabel: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333333",
  },
  tabLabelFocused: {
    color: "#000000",
  },
});

export default TabBar;
