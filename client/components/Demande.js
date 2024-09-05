import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";


export default function Demande({ route }) {
  const [truckTypeSaved, setTruckTypeSaved] = useState("");

  

  const truckImages = [
    { id: "1", source: require("../assets/1.jpg"), label: "fourgon", truck_price:100},
    { id: "2", source: require("../assets/2.jpg"), label: "grand fourgon", truck_price:150},
    { id: "3", source: require("../assets/3.jpg"), label: "petit camion", truck_price:250 },
    {
      id: "4",
      source: require("../assets/4.jpg"),
      label: "grand camion",
      truck_price:350
    },
  ];


  const handleImagePress = (label) => {
    
    setTruckTypeSaved(label);
  };

  const renderItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <TouchableOpacity onPress={() => handleImagePress(item.label)}>
        <Image source={item.source} style={styles.image} />
        <Text style={styles.text}>{item.label}</Text>
        <Text style={styles.text}>{item.truck_price}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      
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
    justifyContent: "center",
    padding: 10,
  },
  textTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 20,
  },
  flatListContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  imageContainer: {
    alignItems: "center",
    margin: 10,
  },
  image: {
    width: 150,
    height: 100,
    resizeMode: "contain",
  },
  text: {
    marginTop: 5,
    textAlign: "center",
  },
  fixButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 60,
    marginTop: 20,
  },
  button: {
    marginTop: 20,
  },
});
