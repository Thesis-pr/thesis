import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ButtonNext from "./ButtonNext";
import Footer from "./Footer";
import Header from "./Header";

const Telephone = ({ route }) => {
  const { mobile } = route?.params ?? {};
  const [phoneNumber, setPhoneNumber] = useState("");
  const [savedMobileNumber, setSavedMovileNumber] = useState({});
  console.log("Mobile", route?.params);

  const handlePhoneNumberChange = (text) => {
    let obj = route?.params;
    obj.telephone = text;

    setPhoneNumber(text);
    setSavedMovileNumber(obj);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safe}>
        <KeyboardAvoidingView style={styles.safe} behavior="padding">
          <ScrollView contentContainerStyle={styles.content}>
            <View>
              <Header />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                A quel numéro de téléphone le prestataire pourra-t-il vous
                joindre?
              </Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="please enter Your mobile Number ..."
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={handlePhoneNumberChange}
              />
            </View>
            <View style={styles.fixButton}>
              <ButtonNext
                style={styles.button}
                targetScreen={"Demande"}
                buttonColor="white"
                buttonText="Précédent"
                textColor="#0078FA"
              />
              <ButtonNext
                style={styles.button}
                targetScreen={"Datetime"}
                params={savedMobileNumber}
                buttonColor="#0078FA"
                buttonText="Suivant"
                textColor="white"
              />
            </View>
          </ScrollView>
          <View style={styles.footerContainer}>
            <Footer />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Telephone;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flexGrow: 1,
    justifyContent: "space-between",
    paddingBottom: 80,
  },
  textContainer: {
    padding: 20,
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    flexWrap: "wrap",
    textAlign: "center",
    width: "100%",
  },
  inputContainer: {
    paddingHorizontal: 20,
    marginTop: 60,
  },
  textInput: {
    height: 50,
    borderColor: "#eee",
    backgroundColor: "#eee",
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 18,
    textAlign: "left",
  },
  buttonContainer: {
    marginTop: 80,
    paddingHorizontal: 20,
  },
  footerContainer: {
    marginTop: 20,
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
