import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ButtonNext from "./ButtonNext";
import Header from "./Header";
import Footer from "./Footer";
export default function Depart() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleCheckboxChange = (option) => {
    setSelectedOption(option === selectedOption ? null : option);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.containerCheckBox}>
        <Text style={styles.text}>Quelle est le lieu de depart ?</Text>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={styles.checkboxWrapper}
            onPress={() => handleCheckboxChange("Appartement")}
          >
            <View
              style={[
                styles.checkbox,
                selectedOption === "Appartement" && styles.checked,
              ]}
            />
            <Text style={styles.label}>Appartement</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={styles.checkboxWrapper}
            onPress={() => handleCheckboxChange("Maison")}
          >
            <View
              style={[
                styles.checkbox,
                selectedOption === "Maison" && styles.checked,
              ]}
            />
            <Text style={styles.label}>Maison</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={styles.checkboxWrapper}
            onPress={() => handleCheckboxChange("Garde-meuble")}
          >
            <View
              style={[
                styles.checkbox,
                selectedOption === "Garde-meuble" && styles.checked,
              ]}
            />
            <Text style={styles.label}>Garde-meuble</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={styles.checkboxWrapper}
            onPress={() => handleCheckboxChange("Autre")}
          >
            <View
              style={[
                styles.checkbox,
                selectedOption === "Autre" && styles.checked,
              ]}
            />
            <Text style={styles.label}>Autre</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.fixButton}>
        <ButtonNext
          style={styles.button}
          targetScreen={"HouseLevel"}
          buttonColor="#0078FA"
          buttonText="Suivant"
          textColor="white"
        />
      </View>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "sapce-between",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    gap: 55,
    marginTop: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkboxWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#0078FA",
    backgroundColor: "white",
    marginRight: 8,
  },
  checked: {
    backgroundColor: "#0078FA",
  },
  label: {
    fontSize: 16,
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 20,
  },
  containerCheckBox: {
    marginBottom: 30,
    marginTop: 60,
  },
  fixButton: {
    flexDirection: "row",
    gap: 40,
    marginLeft: 160,
  },
});
