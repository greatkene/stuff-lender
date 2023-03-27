import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

import { filterData } from "../../utils/data";
import { COLORS, FONTS, SIZES } from "../../utils/theme";
import AppText from "../../shared/AppText";

const Category = () => {
  const [indexCheck, setIndexCheck] = useState("1");

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 5,
        }}
      >
        <Text style={{ ...FONTS.h5 }}>Top Categories</Text>
        <TouchableOpacity onPress={() => console.log("first")}>
          <Text style={{ ...FONTS.h5, color: COLORS.primary }}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={filterData}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        extraData={indexCheck}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              setIndexCheck(item.id);
            }}
          >
            <View
              style={
                indexCheck === item.id
                  ? { ...styles.categoryContainer }
                  : { ...styles.categoryContainerSelected }
              }
            >
              <View style={styles.icon}>{item.icon}</View>
              <AppText
                style={{
                  ...FONTS.body5,
                  color: COLORS.secondary,
                }}
              >
                {item.name}
              </AppText>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    paddingVertical: SIZES.padding,
  },
  categoryContainer: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.radius,
    justifyContent: "center",
    alignItems: "center",
    width: 130,
    height: 70,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  categoryContainerSelected: {
    backgroundColor: COLORS.primaryLight,
    borderRadius: SIZES.radius,
    justifyContent: "center",
    alignItems: "center",
    width: 130,
    height: 70,
    marginHorizontal: 5,
    marginVertical: 10,
  },
});
