import { View, Text, Image, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";

const PrestataireHeader = () => {
  return (
    <View style={styles.containerHeader}>
      <View style={styles.backgroundImageHeader}>
        <Image style={styles.imageHeader} source={require("../assets/7.png")} />
      </View>
      <View>
        <View style={styles.detailsHeader}>
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
  containerHeader: {
    flexDirection: "row",
    alignSelf: "flex-start",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    marginHorizontal: 20,
    gap: 10,
  },
  backgroundImageHeader: {
    paddingHorizontal: 7,
    paddingVertical: 7,
    backgroundColor: "#F1D3CE",
    borderRadius: 60,
  },
  imageHeader: {
    width: 80,
    height: 80,
    borderRadius: 50,
    alignSelf: "center",
  },
  detailsHeader: {
    flexDirection: "row",
    gap: 20,
  },
});

export default PrestataireHeader;
