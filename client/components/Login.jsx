import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  KeyboardAvoidingView, 
  Platform, 
  Image, 
  Alert 
} from 'react-native';

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-gesture-handler';
import { jwtDecode } from 'jwt-decode';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://192.168.151.34:3000/users/login', {
        email,
        password
      });
      await AsyncStorage.setItem('token', response.data.token);
      const decoded = jwtDecode(response.data.token);
      console.log('Decoded JWT:', decoded);
      


      Alert.alert('Success', 'Login successful');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Login failed');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'android' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.container}>
        {/* Image */}
        <Image
          source={{ uri: 'https://static.vecteezy.com/ti/vecteur-libre/p1/7397313-demenagement-de-domicile-ou-personnes-demenageant-avec-des-boites-d-emballage-en-carton-ou-des-biens-emballes-demenager-vers-de-nouveaux-dans-une-illustration-de-dessin-anime-plat-vectoriel.jpg' }}
          style={styles.image}
        />

        {/* Title */}
        <Text style={styles.title}>Connecté à votre compte</Text>
        <Text style={styles.subtitle}>Ravis de vous retrouver, vous nous avez beaucoup manqué.</Text>

        {/* Email Input */}
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#bdbdbd"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Password Input */}
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          placeholderTextColor="#bdbdbd"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {/* Forgot Password */}
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Mot de passe oubliée</Text>
        </TouchableOpacity>

        {/* Connect Button */}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Connecté</Text>
        </TouchableOpacity>
        
      </View>
    </KeyboardAvoidingView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    marginBottom:-200,
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007bff', // Blue color
    marginBottom: 10,
    
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    width: 250,
    height: 50,
    
    borderColor: '#007bff',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    fontSize:11,
    marginBottom: 30,
    marginLeft:200,
    color: '#999',
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#007bff',
    width:120,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 30,
    // marginHorizontal:0,
    // marginVertical:0,
    top:-5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  dividerText: {
    color: '#999',
    marginBottom: 20,
    fontSize:12,
  },

  iconButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 50,
  },




image: {
    width: '100%', // This is fine, it will take 50% of the parent's width
    height: 210, // You can adjust this based on your needs
    
    position: 'absolute', // Ensure the parent has a relative position
    top: 22, // Adjust positioning if necessary
    left: '5%', // Center the image horizontally (50% width minus 25%)
   
  }
  

});

export default Login;










 