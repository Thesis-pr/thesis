import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const RegisterPrestitaire = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrez comme prestataire</Text>
      <Text style={styles.subtitle}>
        Créez un compte pour explorer tous les emplois disponibles
      </Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#A0A0A0"
      />
      <TextInput
        style={styles.input}
        placeholder="Adress"
        placeholderTextColor="#A0A0A0"
      />
      <TextInput
        style={styles.input}
        placeholder="Nom"
        placeholderTextColor="#A0A0A0"
      />
      <TextInput
        style={styles.input}
        placeholder="Prénom"
        placeholderTextColor="#A0A0A0"
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>Retour</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Suivant</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0077FF',
    marginBottom: 12,
    // top:-100,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#000000',
    marginBottom: 24,

  },
  input: {
    borderWidth: 1,
    borderColor: '#0077FF',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 16,
    fontSize: 16,
    color: '#000000',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    // top:95,
  },
  backButton: {
    backgroundColor: 'transparent',
  },
  backButtonText: {
    color: '#0077FF',
    fontSize: 20,
    fontWeight: 'bold',
    top:8,

  },
  nextButton: {
    backgroundColor: '#0077FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RegisterPrestitaire;
