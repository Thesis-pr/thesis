import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import ButtonNext from "./ButtonNext";
import Header from "./Header";
import Footer from "./Footer";
import DemenageurNum from "./DemenageurNum";

export default function Demande({ route }) {
  const [truckTypeSaved, setTruckTypeSaved] = useState({});
  const [selectedLabel, setSelectedLabel] = useState(null);

  const { truckType } = route?.params ?? {};

  const truckImages = [
    { id: "1", source: require("../assets/1.jpg"), label: "Fourgon" },
    { id: "2", source: require("../assets/2.jpg"), label: "Grand Fourgon" },
    { id: "3", source: require("../assets/3.jpg"), label: "Petit Camion" },
    { id: "4", source: require("../assets/4.jpg"), label: "Grand Camion" },
  ];

  const handleImagePress = (label) => {
    let obj = route?.params;
    obj.truck_type = label.toLowerCase();
    setTruckTypeSaved(obj);
    setSelectedLabel(label);
  };

  const renderItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <TouchableOpacity onPress={() => handleImagePress(item.label)}>
        <Image source={item.source} style={styles.image} />
        {selectedLabel === item.label && (
          <View style={styles.checkmarkContainer}>
            <Text style={styles.checkmark}>✔</Text>
          </View>
        )}
        <Text style={styles.text}>{item.label}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.innerContainer}>
        <Text style={styles.textTitle}>
          Quelle taille de camion pour déménager ?
        </Text>
        <FlatList
          data={truckImages}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.flatListContainer}
        />
        <View style={styles.fixButton}>
          <ButtonNext
            style={styles.button}
            targetScreen={"DemenageurNum"}
            buttonColor="white"
            buttonText="Précédent"
            textColor="#0078FA"
          />
          <ButtonNext
            style={styles.button}
            targetScreen={"Telephone"}
            params={truckTypeSaved}
            buttonColor="#0078FA"
            buttonText="Suivant"
            textColor="white"
          />
        </View>
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    alignItems: "center",
    padding: 0,
  },
  textTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 20,
    marginTop: 30,
  },
  flatListContainer: {
    flexGrow: 1,
    justifyContent: "center",
    marginTop: 0,
  },
  imageContainer: {
    alignItems: "center",
    margin: 10,
    position: "relative",
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginHorizontal: 20,
  },
  text: {
    marginTop: 5,
    textAlign: "center",
  },
  fixButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal:80,
    // marginTop: 80, // Adjusted from 70 to 10 to move the buttons higher
    marginBottom:110,
  },
  button: {
    marginTop: 50, // Adjusted from 30 to 0 to move the buttons higher
   
  },
  checkmarkContainer: {
    position: "absolute",
    top: -10,
    right: 10,
    borderRadius: 10,
    padding: 5,
  },
  checkmark: {
    color: "#0078FA",
    fontSize: 40,
    fontWeight: "bold",
  },
});
