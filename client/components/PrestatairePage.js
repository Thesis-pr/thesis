import { View, Text, StyleSheet } from "react-native";
import React from "react";
import PrestataireHeader from "./PrestataireHeader";
import Feather from "@expo/vector-icons/Feather";

export default function PrestatairePage() {
  return (
    <View style={styles.container}>
      <PrestataireHeader />
      <View style={styles.details}>
        <View style={styles.presentaion}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>17</Text>
          <Text>Presentation des demenagement realises</Text>
        </View>
        <View style={styles.award}>
          <Feather name="award" size={24} color="black" />
          <Text>+10 ans d'experience </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  presentaion: {
    flexDirection: "row",
    marginTop: 30,
  },
  details: {
    backgroundColor: "#eee",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    alignSelf: "center",
    marginTop: 40,
  },
  award: {
    flexDirection: "row",
  },
});
