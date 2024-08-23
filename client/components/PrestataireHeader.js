import { View, Text, Image, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";

const PrestatairePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundImage}>
        <Image style={styles.image} source={require("../assets/7.png")} />
      </View>
      <View>
        <View style={styles.details}>
          <Text style={{ fontWeight: "bold" }}>Ahmed Ghizouini</Text>
          <AntDesign name="downcircleo" size={24} color="black" />
          <Text style={{ fontWeight: "bold" }}>90DT/h</Text>
        </View>
        <Text>⭐ 4.7 </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "flex-start",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    marginHorizontal: 20,
    gap: 10,
  },
  backgroundImage: {
    paddingHorizontal: 7,
    paddingVertical: 7,
    backgroundColor: "#F1D3CE",
    borderRadius: 60,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
    alignSelf: "center",
  },
  details: {
    flexDirection: "row",
    gap: 20,
  },
});

export default PrestatairePage;
