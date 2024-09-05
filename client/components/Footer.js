import { View, Text, StyleSheet } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import Octicons from "@expo/vector-icons/Octicons";
import AntDesign from "@expo/vector-icons/AntDesign";

import { horizontalScale, verticalScale, moderateScale } from "../components/responsiveDesign/responsivedesign";

export default function Footer() {
  return (
    <View style={styles.container}>
      <SimpleLineIcons name="home" size={24} color="#7D7C7C" />
      <Octicons name="bookmark" size={24} color="#7D7C7C" />
      <AntDesign name="pluscircleo" size={24} color="#0078FA" />
      <MaterialCommunityIcons
        name="message-text-outline"
        size={24}
        color="#7D7C7C"
      />
      <FontAwesome6 name="user" size={24} color="#7D7C7C" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   backgroundColor: "#eee",
    paddingHorizontal: horizontalScale(40),
    paddingVertical: verticalScale(20),
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    gap: moderateScale(100),
    bottom:0
  },
});
