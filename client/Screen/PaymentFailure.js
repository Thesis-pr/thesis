import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
const PaymentFailure = ({route}) => {

  const { payment_id } = route.params
  console.log("payment_id", payment_id)
  const [status, setStatus] = useState("")

  useEffect(()=>{
    axios.post(`http://192.168.151.34:3000/payment/verify/${payment_id}`, {
      amount:200,
      requestId:1
    })
    .then((response)=>{
      const operationStatus = response.data.result.status
      setStatus(operationStatus)
      

    }).catch((error)=>{
      console.log(error)
    })
  },[])
  return (
    <View style={styles.container}>
      {status === 'FAILURE' && <View>
        <View style={styles.iconContainer}>
        <Ionicons name="close-circle" size={100} color="#FF6347" />
      </View>
      <Text style={styles.thankYouText}>Echec de paiement</Text>
      <Text style={styles.failureText}>Le paiement n'a pas pu être traité</Text>
      <Text style={styles.redirectText}>Veuillez réessayer ou contacter le support</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Réessayer</Text>
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
  failureText: {
    fontSize: 18,
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
    backgroundColor: '#FF6347',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight:'bold'
  },
});

export default PaymentFailure;
