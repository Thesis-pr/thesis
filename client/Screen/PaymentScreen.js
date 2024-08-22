import React from "react";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { View, TextInput } from "react-native";
import { StyleSheet } from "react-native";
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
const PaymentScreen = ()=>{
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <TextInput>Payment Method</TextInput>
                <View style= {styles.cashContainer}>
                    <View style= {{display:"flex"}}>
                    <Fontisto name="visa" size={24} color="black" />
                    <View>Credit Card</View>
                    </View>
                    <View>
                    <MaterialCommunityIcons name="cash" size={24} color="black" />
                    <View>Hand Cash</View> 
                    </View>

                </View>


            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white'
    },
    cashContainer: {
        display: "flex",
        justifyContent:"space-between"
    }
    })
export default PaymentScreen