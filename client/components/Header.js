import React from "react";
import {
  View,
  StyleSheet,
  Pressable,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";

export default function Header() {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => console.log("Button Pressed")}
      >
        <TouchableOpacity>
          <Text style={styles.buttonText}>Acceuil</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <EvilIcons
            name="user"
            size={30}
            color="#0078FA"
            style={styles.icon}
          />
        </TouchableOpacity>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 40,
    padding: 20,
  },
  button: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#eee",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
    gap: 180,
  },
  buttonText: {
    paddingHorizontal: 15,
    paddingVertical: 7,
    backgroundColor: "white",
    borderRadius: 50,
    fontWeight: "bold",
    color: "#0078FA",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 30,
  },
});
