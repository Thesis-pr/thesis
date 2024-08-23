import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import ButtonNext from "./ButtonNext";
import Header from "./Header";
import Footer from "./Footer";

export default function Demande() {
  const handleImagePress = () => {
    alert("Image pressed!");
  };

  return (
    <View style={styles.demandeContainer}>
      <Header />
      <View>
        <Text style={styles.textTitle}>
          Quelle taille de camion pour déménager ?
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={handleImagePress}>
            <Image source={require("../assets/1.jpg")} style={styles.image} />
          </TouchableOpacity>
          <Text style={styles.text}>Petit utilitaire</Text>
          <Text style={styles.text}>Jusqu'à 4 m3</Text>
        </View>
        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={handleImagePress}>
            <Image source={require("../assets/2.jpg")} style={styles.image} />
          </TouchableOpacity>
          <Text style={styles.text}>Petit utilitaire</Text>
          <Text style={styles.text}>Jusqu'à 9 m3</Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={handleImagePress}>
            <Image source={require("../assets/3.jpg")} style={styles.image} />
          </TouchableOpacity>
          <Text style={styles.text}>Moyen utilitaire</Text>
          <Text style={styles.text}>Jusqu'à 15 m3</Text>
        </View>
        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={handleImagePress}>
            <Image source={require("../assets/4.jpg")} style={styles.image} />
          </TouchableOpacity>
          <Text style={styles.text}>Grand utilitaire</Text>
          <Text style={styles.text}>Jusqu'à 20 m3</Text>
        </View>
      </View>

      <ButtonNext style={styles.button} />
      <Footer style={styles.footer} />
    </View>
  );
}

const styles = StyleSheet.create({
  demandeContainer: {
    // marginBottom: 100,
    flex: 1,
    flexDirection: "sapce-between",
    gap: 14,
  },
  container: {
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "space-around",
  },
  imageContainer: {
    alignItems: "center",
    width: 160,
    marginTop: 10,
  },
  image: {
    width: 150,
    height: 80,
  },
  text: {
    marginTop: 5,
    textAlign: "center",
  },
  button: {
    marginTop: 50,
  },
  textTitle: {
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 50,
  },
});
