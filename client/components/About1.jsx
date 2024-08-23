import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import ButtonNext from './ButtonNext';
const { width } = Dimensions.get('window');

const About1 = () => {
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
          source={{ uri: 'https://cdn.discordapp.com/attachments/1272859880247787535/1274042576978186330/istockphoto-1288083160-612x612.jpg?ex=66c961dc&is=66c8105c&hm=8fbc4595833779152d72df50af5e35ad1878ce2e6771f0efac3836ce3c65a82e&' }} 
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.title}>votre passerelle vers le transport maritime national</Text>
      <Text style={styles.subtitle}>
        services de transport maritime vers et depuis la tunisie et toutes les régions
      </Text>

     
     
      {/* <ButtonNext style={{marginBottom: 50 }}/> */}
      
      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Suivant</Text>
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






// import React from 'react';
// import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import ButtonNext from './ButtonNext';

// const { width } = Dimensions.get('window');

// const About1 = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.container}>
//       {/* Top navigation */}
//       <View style={styles.skipContainer}>
//         <TouchableOpacity onPress={() => navigation.navigate('About3')}>
//           <Text style={styles.skipText}> Skip </Text>
//         </TouchableOpacity>
//       </View>

//       {/* Main content */}
//       <View style={styles.imageContainer}>
//         <Image
//           source={{ uri: 'https://your-image-url' }}
//           style={styles.image}
//           resizeMode="contain"
//         />
//       </View>
//       <Text style={styles.title}>Your title here</Text>
//       <Text style={styles.subtitle}>Your subtitle here</Text>

//       <TouchableOpacity onPress={() => navigation.navigate('About2')}>
//         <ButtonNext style={{ marginBottom: 50 }} />
//       </TouchableOpacity>

//       {/* Pagination Indicators */}
//       <TouchableOpacity style={styles.paginationContainer}>
//         <View style={[styles.dot, { backgroundColor: '#0078FA' }]} />
//         <View style={[styles.dot, { backgroundColor: '#C4C4C4' }]} />
//         <View style={[styles.dot, { backgroundColor: '#C4C4C4' }]} />
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   // Styles here...
// });

// export default About1;
