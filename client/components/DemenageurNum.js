import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Header from "./Header";
import Footer from "./Footer";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign";
import ButtonNext from "./ButtonNext";

const DemenageurNum = () => {
  const [count, setCount] = useState(0);

  const addNum = () => {
    if (count < 6) {
      setCount(count + 1);
    }
  };

  const removeNum = () => {
    setCount(count > 0 ? count - 1 : 0);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Combien de déménageurs avez-vous besoin ?
        </Text>
      </View>
      <View style={styles.containerIcon}>
        <Pressable onPress={removeNum}>
          <AntDesign name="minuscircle" size={40} color="#0078FA" />
        </Pressable>
        <Text style={styles.countText}>{count}</Text>
        <Pressable onPress={addNum}>
          <FontAwesome5 name="plus-circle" size={40} color="#0078FA" />
        </Pressable>
      </View>
      <ButtonNext />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    gap: 85,
  },
  titleContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  containerIcon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
  },
  countText: {
    fontSize: 30,
    fontWeight: "bold",
    marginHorizontal: 20,
    
  },
});

export default DemenageurNum;
