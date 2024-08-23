import React from 'react';
import { View, Text, Button, TouchableOpacity, Image, StyleSheet } from 'react-native';


export default function Commencer() {
  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        <Text style={styles.logo}>DÉMÉNAGE-GO</Text>
        <Image 
          source={{ uri: 'https://cdn.discordapp.com/attachments/1272859880247787535/1276184559595159564/non_profit_organisation.png?ex=66c89afd&is=66c7497d&hm=4293587ec7ae87d4801f48f40585f3e4949cd46afbce3208babd0f14ad48c5d3&' }} // replace with the correct image URL
          style={styles.image} 
        />
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <Text style={styles.welcomeText}>Bienvenue sur DÉMÉNAGE-GO</Text>
        <Text style={styles.description}>Trouvez le prestataire idéal pour tous les services du quotidien.</Text>

        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.buttonText}>Commencer</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>Ou, pour proposer vos service</Text>

        <TouchableOpacity style={styles.becomeProviderButton}>
          <Text style={styles.becomeProviderButtonText} >Devenir prestataire</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Overall background color
  },
  topSection: {
    flex: 1,
    backgroundColor: '#007BFF', // This would be the blue background
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
    width:410,
  },
  logo: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    // marginBottom: 20,
    top:-45,
    left:-80,
  },
  image: {
    width: 300,
    height: 199, // Adjust as needed
    top:-30,     
  },
  bottomSection: {
    flex: 1,
    backgroundColor: '#F9F9F9', // Light gray
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    top:-80,
    left:-20,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
    top:-90,
  },
  startButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 70,
    borderRadius: 15,
    marginBottom: 10,
    top:-70,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  orText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  becomeProviderButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#007BFF',
  },
  becomeProviderButtonText:{
    color: '#007BFF',
    fontSize: 20,
   
  }

});
