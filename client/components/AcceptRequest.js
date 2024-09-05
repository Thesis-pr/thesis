import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import PrestataireHeader from "./PrestataireHeader";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { FontAwesome } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

export default function AcceptRequest() {
  const navigation = useNavigation();
  const [isAccepted, setIsAccepted] = useState(false);

  const handleAccept = () => {
    setIsAccepted(true);
  };

  const handleOpenMap = () => {
    navigation.navigate("Maps");
  };

  return (
    <ScrollView style={styles.container}>
      <PrestataireHeader />

      <View style={styles.demandeDetails}>
        <View style={styles.innerContainer}>
          <Text style={styles.heading}>Détails des demandes</Text>
          <View style={styles.date}>
            <AntDesign name="calendar" size={16} color="grey" />
            <Text style={styles.detailText}>Samedi 29 aout à 12 h</Text>
          </View>
          <View style={styles.duration}>
            <FontAwesome5 name="hourglass" size={14} color="grey" />
            <Text style={styles.detailText}>2 heures</Text>
          </View>
          <View style={styles.location}>
            <Ionicons name="location-outline" size={16} color="grey" />
            <Text style={styles.detailText}>Grand Tunis, Ouina</Text>
          </View>
          <View style={styles.helper}>
            <MaterialIcons name="person-add-alt" size={16} color="grey" />
            <Text style={styles.detailText}>4 déménageurs</Text>
          </View>
          <View style={styles.house}>
            <FontAwesome name="home" size={16} color="grey" />
            <Text style={styles.detailText}>Appartement</Text>
          </View>
          <View style={styles.etage}>
            <MaterialCommunityIcons name="floor-plan" size={16} color="grey" />
            <Text style={styles.detailText}>3e étage</Text>
          </View>
          <View style={styles.mobile}>
            <FontAwesome name="mobile-phone" size={20} color="grey" />
            <Text style={styles.detailText}>55213678</Text>
          </View>
        </View>
      </View>

      {!isAccepted ? (
        <>
          <TouchableOpacity style={styles.accepteButton} onPress={handleAccept}>
            <Text style={styles.buttonText}>Acceptez</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.declinerButton}>
            <Text style={styles.buttonText}>Déclinez</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TouchableOpacity style={styles.accepteButton}>
            <Text style={styles.buttonText}>Chat</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.declinerButton}
            onPress={handleOpenMap}
          >
            <Text style={styles.buttonText}>Itinéraire</Text>
          </TouchableOpacity>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  demandeDetails: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 40,
    marginLeft: 3,
    gap: 15,
    paddingHorizontal: 5,
    width: 350,
    borderRadius: 5,
    borderWidth: 4,
    borderColor: "#eee",
  },
  date: {
    flexDirection: "row",
    marginTop: 20,
    gap: 10,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  duration: {
    flexDirection: "row",
    alignSelf: "flex-start",
    gap: 10,
  },
  location: {
    flexDirection: "row",
    alignSelf: "flex-start",
    gap: 10,
  },
  helper: {
    flexDirection: "row",
    alignSelf: "flex-start",
    gap: 10,
  },
  house: {
    flexDirection: "row",
    gap: 10,
  },
  etage: {
    flexDirection: "row",
    gap: 10,
  },
  innerContainer: {
    gap: 10,
    marginLeft: 10,
  },
  mobile: {
    flexDirection: "row",
    gap: 10,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 20,
  },
  detailText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "grey",
  },
  accepteButton: {
    flexDirection: "column",
    paddingHorizontal: 5,
    width: 350,
    paddingVertical: 15,
    backgroundColor: "#D7E9FD",
    marginTop: 40,
    alignItems: "center",
  },
  declinerButton: {
    borderRadius: 5,
    borderWidth: 4,
    borderColor: "#D7E9FD",
    paddingVertical: 15,
    paddingHorizontal: 5,
    width: 350,
    marginTop: 40,
    alignItems: "center",
  },
  buttonText: {
    color: "#0078FA",
    fontSize: 18,
  },
});
