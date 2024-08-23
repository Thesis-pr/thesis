import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function RegisterPrestitaire() {
  const [experience, setExperience] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [truckImage, setTruckImage] = useState(null);
  const [images, setImages] = useState([]);



  const pickImage = async (setImage) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  


  const handleSubmit = () => {
    // Handle form submission here
    console.log('Form submitted');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrez comme prestataire</Text>
      <Text style={styles.subtitle}>Créez un compte pour explorer tous les emplois disponibles</Text>

      <TextInput
        style={styles.input}
        placeholder="Expérience"
        value={experience}
        onChangeText={setExperience}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmer votre mot de passe"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity style={styles.imageInput} onPress={() => pickImage(setProfileImage)}>
        <Text>Entrez votre image</Text>
        {profileImage && <Image source={{ uri: profileImage }} style={styles.imagePreview} />}
      </TouchableOpacity>

      <TouchableOpacity style={styles.imageInput} onPress={() => pickImage(setTruckImage)}>
        <Text>Entrez l'image de votre camions</Text>
        {truckImage && <Image source={{ uri: truckImage }} style={styles.imagePreview} />}
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Confirmez votre profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    top:110,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#007bff',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#0078FA',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  imageInput: {
    borderWidth: 1,
    borderColor: '#0078FA',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  imagePreview: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

