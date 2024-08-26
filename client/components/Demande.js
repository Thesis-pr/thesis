import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import ButtonNext from "./ButtonNext";
import Header from "./Header";
import Footer from "./Footer";
import DemenageurNum from "./DemenageurNum";

export default function Demande() {
  const handleImagePress = () => {
    alert("Image pressed!");
  };

  return (
    <ScrollView style={styles.demandeContainer}>
      <Header />
      <View style={styles.innerContainer}>
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
            buttonColor="#0078FA"
            buttonText="Suivant"
            textColor="white"
          />
        </View>
        <Footer style={styles.footer} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  demandeContainer: {
    // flexDirection: "row",
  },
  imageContainer: {
    flexDirection: "row",
    gap: 20,
  },
  container: {
    flexDirection: "row",
    marginTop: 40,
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
    fontSize: 18,
  },
  fixButton: {
    flexDirection: "row",
    gap: 60,
    marginBottom: 50,
    marginLeft: 60,
  },
});
