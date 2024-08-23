import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ButtonNext from "./ButtonNext";
import Header from "./Header";
import Footer from "./Footer";
export default function HouseLevel() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleCheckboxChange = (option) => {
    setSelectedOption(option === selectedOption ? null : option);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.containerCheckBox}>
        <Text style={styles.text}>A quel étage se trouve votre logement ?</Text>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={styles.checkboxWrapper}
            onPress={() => handleCheckboxChange("Sous-sol")}
          >
            <View
              style={[
                styles.checkbox,
                selectedOption === "Sous-sol" && styles.checked,
              ]}
            />
            <Text style={styles.label}>Sous-sol</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={styles.checkboxWrapper}
            onPress={() => handleCheckboxChange("Rez-de-chaussée")}
          >
            <View
              style={[
                styles.checkbox,
                selectedOption === "rez-de-chaussée" && styles.checked,
              ]}
            />
            <Text style={styles.label}>rez-de-chaussée</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={styles.checkboxWrapper}
            onPress={() => handleCheckboxChange("1ere-etage")}
          >
            <View
              style={[
                styles.checkbox,
                selectedOption === "1ere-etage" && styles.checked,
              ]}
            />
            <Text style={styles.label}>1ere-etage</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={styles.checkboxWrapper}
            onPress={() => handleCheckboxChange("2ᵉ étage")}
          >
            <View
              style={[
                styles.checkbox,
                selectedOption === "2ᵉ étage" && styles.checked,
              ]}
            />
            <Text style={styles.label}>2ᵉ étage</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={styles.checkboxWrapper}
            onPress={() => handleCheckboxChange("3ᵉ étage")}
          >
            <View
              style={[
                styles.checkbox,
                selectedOption === "3ᵉ étage" && styles.checked,
              ]}
            />
            <Text style={styles.label}>3ᵉ étage</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={styles.checkboxWrapper}
            onPress={() => handleCheckboxChange("4ᵉ étage")}
          >
            <View
              style={[
                styles.checkbox,
                selectedOption === "4ᵉ étage" && styles.checked,
              ]}
            />
            <Text style={styles.label}>4ᵉ étage</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={styles.checkboxWrapper}
            onPress={() => handleCheckboxChange("5ᵉ ou plus")}
          >
            <View
              style={[
                styles.checkbox,
                selectedOption === "5ᵉ ou plus" && styles.checked,
              ]}
            />
            <Text style={styles.label}>5ᵉ ou plus</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ButtonNext style={styles.buttonNext} />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "sapce-between",
    alignItems: "center",
    justifyContent: "center",
    gap: 80,
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
    flex: 1,
    marginBottom: 150,
  },
  buttonNext: {
    // marginTop: 70,
  },
});
