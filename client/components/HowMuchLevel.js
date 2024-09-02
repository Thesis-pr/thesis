import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Header from "./Header";
import Footer from "./Footer";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign";
import ButtonNext from "./ButtonNext";

const HowMuchLevel = ({ route }) => {
  const [count, setCount] = useState(0);

  const [savedLevel, setSavedLevel] = useState({});
  const { homeCategory } = route?.params ?? {};

  console.log("homeCategory", route.params);
  const addNum = () => {
    setCount((prev) => {
      const newCount = prev + 1;
      if (newCount <= 4) {
        let obj = { ...route.params, floors: newCount };
        setSavedLevel(obj);
        return newCount;
      }
      return prev;
    });
  };

  const removeNum = () => {
    setCount((prev) => {
      const newCount = prev > 0 ? prev - 1 : 0;

      let obj = { ...route.params, floors: newCount };
      setSavedLevel(obj);
      return newCount;
    });
  };

  useEffect(() => {
    let obj = { ...route.params, floors: count };
    setSavedLevel(obj);
    console.log("level updated", count);
  }, [count, route.params]);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.innerContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Combien de niveaux avez vous ?</Text>
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
            targetScreen={"HouseLevel"}
            buttonColor="white"
            buttonText="Precedent"
            textColor="#0078FA"
          />
          <ButtonNext
            style={styles.button}
            params={savedLevel}
            targetScreen={"DemenageurNum"}
            buttonColor="#0078FA"
            buttonText="Suivant"
            textColor="white"
          />
        </View>
        <Footer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    gap: 150,
  },
  innerContainer: {
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
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
  fixButton: {
    flexDirection: "row",
    gap: 40,
    alignSelf: "center",
    marginTop: 170,
    marginBottom: 40,
  },
});

export default HowMuchLevel;
