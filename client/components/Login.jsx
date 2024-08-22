import React from 'react';
import {Image, KeyboardAvoidingView, Platform } from 'react-native';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = () => {
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'android' ? 'padding' : 'height' }
    style={styles.container}>


{/* <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'padding' : 'height'}
        style={styles.container}
      > */}


      <View style={styles.container}>
       



      <Image
  source={{ uri: 'https://static.vecteezy.com/ti/vecteur-libre/p1/7397313-demenagement-de-domicile-ou-personnes-demenageant-avec-des-boites-d-emballage-en-carton-ou-des-biens-emballes-demenager-vers-de-nouveaux-dans-une-illustration-de-dessin-anime-plat-vectoriel.jpg' }} // Correctly structured image URL
  style={styles.image}
/>

      {/* Title */}
      <Text style={styles.title} >Connecté à votre compte</Text>
      <Text style={styles.subtitle}>Ravis de vous retrouver, vous nous avez beaucoup manqué.</Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#bdbdbd"
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        placeholderTextColor="#bdbdbd"
        secureTextEntry
      />

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Mot de passe oubliée</Text>
      </TouchableOpacity>

      {/* Connect Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Connecté</Text>
      </TouchableOpacity>

      

      
      
    </View>
  </KeyboardAvoidingView>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    marginBottom:-200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007bff', // Blue color
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    width: 250,
    height: 50,
    
    borderColor: '#007bff',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    fontSize:11,
    marginBottom: 30,
    marginLeft:200,
    color: '#999',
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#007bff',
    width:120,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
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
  dividerText: {
    color: '#999',
    marginBottom: 20,
    fontSize:12,
  },

  iconButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 50,
  },




image: {
    width: '100%', // This is fine, it will take 50% of the parent's width
    height: 210, // You can adjust this based on your needs
    
    position: 'absolute', // Ensure the parent has a relative position
    top: 22, // Adjust positioning if necessary
    left: '5%', // Center the image horizontally (50% width minus 25%)
   
  }
  

});

export default Login;










// import React from 'react';
// import { ImageBackground,KeyboardAvoidingView, Platform, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Img from '../assets/cover.png'
 
// const Login = () => {
//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === 'android' ? 'padding' : 'height'}
//       style={styles.container}
    
//     >
//          {/* <Image
//         source={Img} // Replace with your image URL
//         style={styles.image}
//       /> */}
          
//           <ImageBackground source={im} resizeMode="cover" style={styles.image}>

//       <View style={styles.innerContainer}>
      
//         {/* Title */}
//         <Text style={styles.title}>Connecté à votre compte</Text>
//         <Text style={styles.subtitle}>Ravis de vous retrouver, vous nous avez beaucoup manqué.</Text>

//         {/* Email Input */}
//         <TextInput
//           style={styles.input}
//           placeholder="E-mail"
//           placeholderTextColor="#bdbdbd"
//         />

//         {/* Password Input */}
//         <TextInput
//           style={styles.input}
//           placeholder="Mot de passe"
//           placeholderTextColor="#bdbdbd"
//           secureTextEntry
//         />

//         {/* Forgot Password */}
//         <TouchableOpacity>
//           <Text style={styles.forgotPassword}>Mot de passe oubliée</Text>
//         </TouchableOpacity>

//         {/* Connect Button */}
//         <TouchableOpacity style={styles.button}>
//           <Text style={styles.buttonText}>Connecté</Text>
//         </TouchableOpacity>

//         {/* Divider Text */}
//         <Text style={styles.dividerText}>Ou continuer avec</Text>

//         {/* Social Media Icons */}
//         <View style={styles.iconContainer}>
//           <TouchableOpacity style={styles.iconButton}>
//             <Icon name="google" size={30} color="#FFC107" />
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.iconButton}>
//             <Icon name="facebook" size={30} color="#0078FA" />
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.iconButton}>
//             <Icon name="play" size={30} color="#3DDC84" />
//           </TouchableOpacity>
//         </View>
//       </View>
//       <ImageBackground/>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
    
//   },

//   innerContainer: {
//     width: '80%',
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 20,
//     alignItems: 'center',
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//     marginTop:120,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#007bff', // Original color
//     marginBottom: 10,
//   },
//   subtitle: {
//     fontSize: 14,
//     color: '#555',
//     marginBottom: 30,
//     textAlign: 'center',
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderColor: '#007bff', // Original color
//     borderWidth: 2,
//     borderRadius: 10,
//     paddingHorizontal: 15,
//     marginBottom: 20,
//   },
//   forgotPassword: {
//     alignSelf: 'flex-end',
//     fontSize: 11,
//     marginBottom: 30,
//     color: '#999',
//     textDecorationLine: 'underline',
//   },
//   button: {
//     backgroundColor: '#007bff', // Original color
//     width: '100%',
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 10,
//     marginBottom: 30,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   dividerText: {
//     color: '#999',
//     marginBottom: 20,
//     fontSize: 12,
//   },
//   iconContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '60%',
//   },
//   iconButton: {
//     backgroundColor: '#f0f0f0',
//     padding: 10,
//     borderRadius: 50,
//   },
  
//   image: {
//     width: '50%',
//     height: 170, // Adjust height as needed
//     position: 'absolute',
//     top: 43,
//     left: 70,
//     right: 0,
//     zIndex: -1, // Send the image to the back
    
//   },



// });

// export default Login;




