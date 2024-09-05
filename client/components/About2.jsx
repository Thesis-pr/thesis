import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import ButtonNext from './ButtonNext';
// import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get('window');

// const navigation = useNavigation();
// const handleClickToAbout2 = () => {
//   navigation.navigate("about2");
// };

const About2 = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Top navigation */}
      <View style={styles.skipContainer}        >
        <TouchableOpacity    onPress={() => navigation.navigate('Commencer')}    >
          <Text style={styles.skipText}> Skip </Text>
        </TouchableOpacity>
      </View>

      {/* Main content */}
      <View style={styles.imageContainer}>
        
        <Image
        source={require('../assets/about2.png')}

          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.title}>Services de déménagement porte à porte</Text>
      <Text style={styles.subtitle}>
      Déménagez facilement et en toute sécurité de porte à porte, avec une équipe dédiée pour vous accompagner à chaque étape.
      </Text>

      
     
     <View style={styles.buttonWrapper}>
  <TouchableOpacity style={[styles.buttonBack]}   onPress={() => navigation.navigate('About1')}     >
    <Text style={styles.buttonText}>Précédente</Text>
  </TouchableOpacity>

  <TouchableOpacity style={[styles.buttonNext]}    onPress={() => navigation.navigate('About3')}  >
    <Text style={styles.buttonText}>Suivante</Text>
  </TouchableOpacity>
</View>


      {/* <ButtonNext style={styles.button}/> */}
      
      {/* Pagination Indicators */}
      <TouchableOpacity style={styles.paginationContainer}>
        <View style={[styles.dot, { backgroundColor: '#C4C4C4' }]} />
        <View style={[styles.dot, { backgroundColor: '#0078FA' }]} />
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
    marginTop: 25,
  },
  // buttonNext: {
    
  //   backgroundColor: '#007bff',
  //   paddingVertical: 10,
  //   paddingHorizontal: 20,
  //   borderRadius: 25,
    
  // },
  // buttonBack:{
    
  //   backgroundColor: '#007bff',
  //   paddingVertical: 10,
  //   paddingHorizontal: 20,
  //   borderRadius: 25,
  //   borderWidth: 1,
  //   borderColor: '#ccc',
  
  // },
  // buttonText: {
  //   color: '#fff',
  //   fontSize: 18,
  //   fontWeight: 'bold',
  // },
  // buttonContainer: {
  //   flexDirection: 'row', 
  //   justifyContent: 'space-between', 
  //   alignItems: 'center', 
  // },
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

  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    marginTop:5 ,
  },
  
  
});

export default About2;