import React from "react";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { View, TextInput, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const PaymentScreen = () => {
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

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Card Holder Name</Text>
                            <View style={styles.cardHolderContainer}>
                                <TextInput style={styles.input} placeholder="Card Holder Name" />
                            </View>
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Card Number</Text>
                            <View style={styles.cardHolderContainer}>
                                <TextInput style={styles.input} placeholder="Card Number" />
                            </View>
                        </View>

                        <View style={styles.expirecvc}>
                            <View style={styles.inputGroup}>
                                <Text style={styles.label}>Expire Date</Text>
                                <View style={styles.smallInputContainer}>
                                    <TextInput style={styles.smallInput} placeholder="MM/YY" />
                                </View>
                            </View>
                            <View style={styles.inputGroup}>
                                <Text style={styles.label}>CVC</Text>
                                <View style={styles.smallInputContainer}>
                                    <TextInput style={styles.smallInput} placeholder="CVC" />
                                </View>
                            </View>
                        </View>

                        <TouchableOpacity style={styles.payButton}>
                            <Text style={styles.payButtonText}>Pay</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

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
        marginTop: 40,
    },
    payButtonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,  
    },
});

export default PaymentScreen;
