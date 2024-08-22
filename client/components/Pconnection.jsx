import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Pconnection() {
  return (
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
    fontSize: 44,
    fontWeight: 'bold',
    marginBottom: 100,
  },
  label: {
    fontSize: 18,
    alignSelf: 'flex-start',
    marginBottom: 40,
  },
  input: {
    width: 180,
    height: 50,
    borderColor: '#C4C4C4',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#F1F1F1',
  },
  button: {
    width: 180,
    height: 50,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
