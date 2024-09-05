import React from "react";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { View, TextInput, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView, Linking } from "react-native";
import { StyleSheet } from "react-native";
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useState, useEffect } from "react";
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { WebView } from 'react-native-webview'
const PaymentScreen = ({ navigation }) => {
    const [paymentUrl, setPaymentUrl] = useState(null);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [paymentId, setPaymentId] = useState("")

    const startPayment = async () => {
        try {
          const response = await axios.post("http://192.168.151.34:3000/payment/pay", {
            
            amount: 200
          });

          const paymentUrlFromResponse = response.data.result.link;
          const paymentid = response.data.result.payment_id;
      
          setPaymentId(paymentid);
      
          await Linking.openURL(paymentUrlFromResponse);
        } catch (error) {
          console.log("error:", error);
        }
      };

      useEffect(() => {
        const handleUrl = (url) => {
            if (url.includes('/success')) {
                navigation.navigate('success', {payment_id: paymentId});
            } else if (url.includes('/fail')) {
                navigation.navigate('fail', {payment_id: paymentId});
            }
        };
        Linking.getInitialURL().then((url) => {
            if (url) handleUrl(url);
        });
        const subscription = Linking.addEventListener('url', (event) => {
            handleUrl(event.url);
        });

        return () => {
            subscription.remove();
        };
    }, [navigation, paymentId]);

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView
                    behavior="height"
                    style={{ flex: 1 }}
                >
                    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                        <View style={styles.headerContainer}>
                            <Text style={styles.headerText}>Payment method</Text>
                        </View>
                        <View style={styles.cashContainer}>
                            <View style={styles.paymentOptionContainer}>
                                <Fontisto name="visa" size={24} color="#1A1F71" />
                                <Text style={styles.text}>Credit Card</Text>
                            </View>
                            <View style={styles.paymentOptionContainer}>
                                <MaterialCommunityIcons name="cash" size={24} color="#4CAF50" />
                                <Text style={styles.text}>Cash</Text>
                            </View>
                        </View>
                        <View style={styles.headerContainer}>
                            <Text style={styles.headerText}>Your total is </Text>
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>First name</Text>
                            <View style={styles.cardHolderContainer}>
                                <TextInput style={styles.input} placeholder="First name"
                                    value={firstName}
                                    onChangeText={(value) => setFirstName(value)} />
                            </View>
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Last name</Text>
                            <View style={styles.cardHolderContainer}>
                                <TextInput style={styles.input} placeholder="last name"
                                    value={lastName}
                                    onChangeText={(value) => setLastName(value)}
                                />
                            </View>
                        </View>
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Email</Text>
                            <View style={styles.cardHolderContainer}>
                                <TextInput style={styles.input}
                                    placeholder="oumaymaarfaoui@gmail.com"
                                    value={email}
                                    onChangeText={(value) => setEmail(value)} />
                            </View>
                        </View>
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Telephone</Text>
                            <View style={styles.cardHolderContainer}>
                                <TextInput style={styles.input}
                                    placeholder="23900100"
                                    value={phone}
                                    onChangeText={(value) => setPhone(value)} />
                            </View>
                        </View>

                        <TouchableOpacity style={styles.payButton} onPress={startPayment}>
                            <Text style={styles.payButtonText}>Pay</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
    },
    headerContainer: {
        alignItems: "center",
        marginBottom: 30,
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 22,
    },
    cashContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginBottom: 30,
    },
    paymentOptionContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
    },
    text: {
        marginLeft: 10,
        fontWeight: "bold",
    },
    inputGroup: {
        marginBottom: 20,
    },
    label: {
        fontWeight: "bold",
        marginBottom: 8,
    },
    cardHolderContainer: {
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    input: {
        width: '100%',
    },
    expirecvc: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    smallInputContainer: {
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 10,
        width: 140,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    smallInput: {
        width: '100%',
    },
    payButton: {
        backgroundColor: "#0078FA",
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 30,
    },
    payButtonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
    },
});

export default PaymentScreen;
