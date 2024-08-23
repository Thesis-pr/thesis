import { View, Text, StyleSheet } from "react-native";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import Octicons from "@expo/vector-icons/Octicons";
import AntDesign from "@expo/vector-icons/AntDesign";

import React from "react";

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
    paddingHorizontal: 40,
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 50,
  },
});
