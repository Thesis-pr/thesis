import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { setStatusBarBackgroundColor } from "expo-status-bar";

export default function PageDeGarde() {
  return (
    <View style={styles.container}>
      <Text></Text>
      <Image style={styles.image} source={require("../assets/logo.jpg")} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0078FA",
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 180,
    height: 100,
    marginTop: 40,
  },
});
