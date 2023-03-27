import React from "react";

import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "./theme";

export const filterData = [
  {
    name: "House",
    icon: <AntDesign name="home" size={30} color={COLORS.secondary} />,
    id: "0",
  },
  {
    name: "Apartment",
    icon: <MaterialIcons name="apartment" size={30} color={COLORS.secondary} />,
    id: "1",
  },
  {
    name: "Books",
    icon: <Entypo name="open-book" size={30} color={COLORS.secondary} />,
    id: "2",
  },
  {
    name: "Town Hall",
    icon: (
      <MaterialCommunityIcons
        name="town-hall"
        size={30}
        color={COLORS.secondary}
      />
    ),
    id: "3",
  },
  {
    name: "Event Center",
    icon: (
      <MaterialIcons
        name="event-available"
        size={30}
        color={COLORS.darkGray2}
      />
    ),
    id: "4",
  },
];
