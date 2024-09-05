import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

import { useNavigation } from "@react-navigation/native";
const { width } = Dimensions.get('window');



const About1 = ({navigation}) => {
 
 

  return (
    
    <View style={styles.container}>
      {/* Top navigation */}
      <View style={styles.skipContainer}      >  
        <TouchableOpacity   onPress={() => navigation.navigate('Commencer')}     >
          <Text style={styles.skipText}> Skip </Text>
        </TouchableOpacity>
      </View>

      {/* Main content */}
      <View style={styles.imageContainer}>
        
        <Image
          source={require('../assets/about1.jpg')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.title}>Votre passerelle vers un déménagement national sécurisé</Text>
      <Text style={styles.subtitle}>
      Profitez de services de déménagement fiables et rapides pour vos besoins partout en Tunisie et au-delà.
      </Text>

     
     
    
       <TouchableOpacity style={styles.button}   title="Go to About 2"  onPress={() => navigation.navigate('About2')}  >
          <Text style={styles.buttonText}>Suivant</Text>
        </TouchableOpacity>
       
      {/* Pagination Indicators */}
      <TouchableOpacity style={styles.paginationContainer}>
      <View style={[styles.dot, { backgroundColor: '#0078FA' }]} />
      <View style={[styles.dot, { backgroundColor: '#C4C4C4' }]} />
      <View style={[styles.dot, { backgroundColor: '#C4C4C4' }]} />
      <View style={[styles.dot, { backgroundColor: '#C4C4C4' }]} />
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

  },
  image: {
    width: width * 1.0,
    height: width * 0.8,
    

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    left:18,
    marginTop: 20,
    color: '#000',
  
  },
  subtitle: {
    fontSize: 16,
    left:17,
    marginTop: 10,
    marginBottom: 120,
    color: '#6c6c6c',
   
  },
  button: {
    backgroundColor: '#007bff',
    width:120,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    borderRadius: 20,
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
  nextButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignSelf: 'center',
    marginTop: 50,
    left:120,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,

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
  

});

export default About1;






