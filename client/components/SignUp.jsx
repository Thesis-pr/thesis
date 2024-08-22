import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Créer un nouveau compte</Text>
      <Text style={styles.subHeader}>Créez un compte pour explorer tous les emplois disponibles.</Text>

      <TextInput style={styles.input} placeholder="E-mail" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Numero de telephone" keyboardType="phone-pad" />
      <TextInput style={styles.input} placeholder="Mot de passe" secureTextEntry={true} />
      <TextInput style={styles.input} placeholder="confirmer votre mot de passe" secureTextEntry={true} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>S'inscrire</Text>
      </TouchableOpacity>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0063f7',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    width: 230,
    height: 50,
    borderColor: '#0063f7',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    width: 100,
    height: 50,
    backgroundColor: '#0063f7',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
});
