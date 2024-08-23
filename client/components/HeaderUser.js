import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import Fontisto from "@expo/vector-icons/Fontisto";
import React from "react";
import Footer from "./Footer";

const HeaderUser = () => {
  return (
    <KeyboardAvoidingView style={styles.mainContainer} behavior="padding">
      <View style={styles.container}>
        <View style={styles.description}>
          <View style={styles.backgroundImage}>
            <Image source={require("../assets/5.jpg")} style={styles.image} />
          </View>
          <View>
            <View style={styles.notification}>
              <Text style={styles.text1}>Mourad Shady Kahouech</Text>
              <Ionicons
                name="notifications-outline"
                size={15}
                color="black"
                style={styles.notificationIcon}
              />
            </View>
            <View style={styles.adress}>
              <EvilIcons name="location" size={20} color="black" />
              <Text style={styles.text2}>Tunis, Al ouina</Text>
              <AntDesign
                style={styles.icon}
                name="down"
                size={15}
                color="black"
              />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <Text style={styles.searchText}>Reserver un déménageur</Text>
        <View style={styles.inputContainer}>
          <Fontisto
            name="search"
            size={16}
            color="black"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Vous pouvez choisir votre prestataire"
          />
        </View>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.driverCard}>
          <Image source={require("../assets/6.png")} style={styles.image2} />
          <Text>Mohssine 200DT</Text>
          <Text>⭐ 4.67 (709 avis)</Text>
        </View>

        <View style={styles.driverCard}>
          <Image source={require("../assets/6.png")} style={styles.image2} />
          <Text>Mohssine 200DT</Text>
          <Text>⭐ 4.67 (709 avis)</Text>
        </View>

        <View style={styles.driverCard}>
          <Image source={require("../assets/6.png")} style={styles.image2} />
          <Text>Mohssine 200DT</Text>
          <Text>⭐ 4.67 (709 avis)</Text>
        </View>

        <View style={styles.driverCard}>
          <Image source={require("../assets/6.png")} style={styles.image2} />
          <Text>Mohssine 200DT</Text>
          <Text>⭐ 4.67 (709 avis)</Text>
        </View>

        <View style={styles.driverCard}>
          <Image source={require("../assets/6.png")} style={styles.image2} />
          <Text>Mohssine 200DT</Text>
          <Text>⭐ 4.67 (709 avis)</Text>
        </View>
      </ScrollView>
      <Footer />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: "5%",
    paddingVertical: "5%",
    backgroundColor: "#fff",
  },
  container: {
    flexDirection: "column",
    marginTop: 45,
    marginRight: 100,
  },
  description: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    gap: 10,
  },
  text1: {
    fontWeight: "bold",
    marginRight: 5,
  },
  text2: {
    fontSize: 12,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
    alignSelf: "center",
  },
  backgroundImage: {
    backgroundColor: "#F1D3CE",
    justifyContent: "center",
    height: 70,
    width: 70,
    borderRadius: 50,
  },
  adress: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "5%",
  },
  icon: {
    marginLeft: 5,
  },
  notification: {
    flexDirection: "row",
    alignItems: "center",
  },
  notificationIcon: {
    marginLeft: 5,
  },
  searchContainer: {
    marginBottom: 20,
  },
  searchText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
  },
  image2: {
    height: 90,
    width: 70,
    borderRadius: 10,
  },
  driverCard: {
    alignItems: "center",
    marginRight: 20,
    marginBottom: 170,
  },
});

export default HeaderUser;
