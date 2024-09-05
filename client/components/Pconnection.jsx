import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView ,Platform} from 'react-native';

export default function Pconnection({navigation}) {
  return (
     
    <KeyboardAvoidingView
    behavior={Platform.OS === 'android' ? 'padding' : 'height' }
    style={styles.container}>



    <View style={styles.container}>
      <Text style={styles.title}>Connection ou inscription</Text>

      <Text style={styles.label}>Adress e-mail</Text>

      <TextInput 
        style={styles.input} 
        placeholder="e-mail" 
        placeholderTextColor="#C4C4C4"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continuer</Text>
      </TouchableOpacity>
    </View>
      </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 20,
    
  },
  title: {
    fontSize: 37,
    fontWeight: 'bold',
    marginBottom: 50,
    

    marginTop:-20 ,

  
  },
  label: {
    fontSize: 18,
    left:-67,
    marginBottom: 50,
    marginTop:50,
  },
  input: {
    width: 250,
    height: 50,
    borderColor: '#C4C4C4',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 50,
    backgroundColor: '#F1F1F1',
  },
  button: {
    width: 250,
    height: 50,
    backgroundColor: '#0078FA',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:250,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: 'bold',
  },
});



