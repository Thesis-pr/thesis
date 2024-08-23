import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import ButtonNext from './ButtonNext';

const { width } = Dimensions.get('window');

 

const About4 = () => {
  return (
    <View style={styles.container}>
      {/* Top navigation */}
      <View style={styles.skipContainer}>
        <TouchableOpacity>
          <Text style={styles.skipText}> Skip </Text>
        </TouchableOpacity>
      </View>

      {/* Main content */}
      <View style={styles.imageContainer}>
        
        <Image
          source={{ uri: 'https://cdn.discordapp.com/attachments/1272859880247787535/1274042575568769096/hand-drawn-moving-house-mover-illustration-254655475_iconl_nowm.webp?ex=66c961dc&is=66c8105c&hm=bed5b9452d0c1413d410007fd09f03e45c98bbdc292dd7422376341f5df4f69a&' }} 
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.title}> suivi immédiat du déménagement à tout moment</Text>
      <Text style={styles.subtitle}> avec la fonction de suivi de l'envoi, visualisez à tout moment directement toutes les étapes de  démangemnt      </Text>


     
      <ButtonNext style={styles.button}/>
      
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
  
  
});

export default About4;