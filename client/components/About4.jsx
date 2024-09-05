import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import ButtonNext from './ButtonNext';

const { width } = Dimensions.get('window');

 

const About4 = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Top navigation */}
      <View style={styles.skipContainer}        >
        <TouchableOpacity   onPress={() => navigation.navigate('Commencer')}    >
          <Text style={styles.skipText}> Skip </Text>
        </TouchableOpacity>
      </View>

      {/* Main content */}
      <View style={styles.imageContainer}>
        
        <Image
          source={require('../assets/about4.png')}

          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.title}> Suivi en temps réel de votre déménagement</Text>
      <Text style={styles.subtitle}> Suivez chaque étape de votre déménagement en temps réel grâce à notre fonctionnalité de suivi intégré   </Text>

      <View style={styles.buttonWrapper}>
  <TouchableOpacity style={[styles.buttonBack]} onPress={() => navigation.navigate('About3')}         >
    <Text style={styles.buttonText}>Précédente</Text>
  </TouchableOpacity>

  <TouchableOpacity style={[styles.buttonNext]}  onPress={() => navigation.navigate('About5')}  >
    <Text style={styles.buttonText}>Suivante</Text>
  </TouchableOpacity>
</View>
     
      {/* <ButtonNext style={styles.button}/> */}
      
      {/* Pagination Indicators */}
      <TouchableOpacity style={styles.paginationContainer}>
        <View style={[styles.dot, { backgroundColor: '#C4C4C4' }]} />
        <View style={[styles.dot, { backgroundColor: '#C4C4C4' }]} />
        <View style={[styles.dot, { backgroundColor: '#C4C4C4' }]} />
        <View style={[styles.dot, { backgroundColor: '#0078FA' }]} />
        <View style={[styles.dot, { backgroundColor: '#C4C4C4' }]} />

      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    top:10,
  },
  skipContainer: {
    alignItems: 'flex-end',
    marginBottom: 20,
    top:20,
  },
  skipText: {
    fontSize: 16,
    color: '#000',
    top:18,
    right:12
  },
  imageContainer: {
   flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
     marginTop:70,
  },
  image: {
    width: 280,
    height: 210,
    

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    left:12,
    marginTop: 20,
    color: '#000',
    
  },
  subtitle: {
    fontSize: 16,
    left:12,
    marginTop: 10,
    marginBottom: 100,
    color: '#6c6c6c',
   
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    marginTop:5 ,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Ensures equal space between the buttons
    alignItems: 'center',
    paddingHorizontal: 10, // Add padding between the buttons
    marginTop: 20, // Add margin to the top of the button group
  },
  buttonNext: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  buttonBack: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  
});

export default About4;