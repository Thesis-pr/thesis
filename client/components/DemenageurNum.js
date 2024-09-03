import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Header from "./Header";
import Footer from "./Footer";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign";
import ButtonNext from "./ButtonNext";

const DemenageurNum = ({ route }) => {
  const [count, setCount] = useState(0);
  const [savedHelperNum, setSavedHelperNum] = useState({});
  console.log("aaa", route?.params);
  const addNum = () => {
    setCount((prev) => {
      const newCount = prev + 1;
      if (newCount <= 6) {
        let obj = { ...route.params, helper: newCount };
        setSavedHelperNum(obj);
        return newCount;
      }
      return prev;
    });
  };

  const removeNum = () => {
    setCount((prev) => {
      const newCount = prev > 0 ? prev - 1 : 0;

      let obj = { ...route.params, helper: newCount };
      setSavedHelperNum(obj);
      return newCount;
    });
  };

  useEffect(() => {
    let obj = { ...route.params, helper: count };
    setSavedHelperNum(obj);
    console.log("level updated", count);
  }, [count, route.params]);

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
      <View style={styles.fixButton}>
        <ButtonNext
          style={styles.button}
          targetScreen={"HowMuchLevel"}
          buttonColor="white"
          buttonText="Precedent"
          textColor="#0078FA"
        />
        <ButtonNext
          style={styles.button}
          targetScreen={"Demande"}
          params={savedHelperNum}
          buttonColor="#0078FA"
          buttonText="Suivant"
          textColor="white"
        />
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "column",
    gap: 50,
  },
  titleContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 80,
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
  fixButton: {
    flexDirection: "row",
    gap: 40,
    justifyContent: "center",
    marginTop: 95,
  },
});

export default DemenageurNum;
