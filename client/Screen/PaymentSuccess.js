import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import axios from 'axios'
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const PaymentSuccess = ({navigation}) => {
  // console.warn("Entire route object:", route);
  // const payment_id = route.params?.payment_id;
  // console.warn("Received payment_id:", payment_id);
  console.log("hello world")

  const [status, setStatus] = useState("");

  useEffect(() => {
    // const fetchPaymentId = async () => {
    //   try {
    //     const paymentId = await AsyncStorage.getItem('paymentId');
    //     if (paymentId) {
    //       axios.post(`http://192.168.151.34:3000/payment/verify/${paymentId}`, {
    //         amount: 200,
    //         requestId: 1
    //       })
    //       .then((response) => {
    //         const operationStatus = response.data.result.status;
    //         setStatus(operationStatus);
    //       })
    //       .catch((error) => {
    //         console.log("error:", error);
    //       });
    //     }
    //   } catch (error) {
    //     console.log("error:", error);
    //   }
    // };

    // 
    console.log("hello world");
  }, []);
  
  return (
    
    <View style={styles.container}>
      
      {true && <View>
        <View style={styles.iconContainer}>
        <Ionicons name="checkmark-circle" size={100} color="#0078FA" />
        
      </View>
      <Text style={styles.thankYouText}>Merci!</Text>
      <Text style={styles.successText}>Paiement effectué avec succés</Text>
     
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
        </View>}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  iconContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  thankYouText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  successText: {
    fontSize: 20,
    color: 'black',
    marginBottom: 20,
  },
  redirectText: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#0078FA',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginTop:20
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    
  },
});

export default PaymentSuccess;
