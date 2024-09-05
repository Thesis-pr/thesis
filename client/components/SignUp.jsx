// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert,Image, SafeAreaView,KeyboardAvoidingView, Platform, } from 'react-native';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import AntDesign from '@expo/vector-icons/AntDesign';
// import Entypo from '@expo/vector-icons/Entypo';
// import { jwtDecode } from "jwt-decode";
// import ButtonNext from './ButtonNext';
// import * as ImagePicker from 'expo-image-picker';




// export default function SignUp() {

//   const [name, setName] = useState('');
//   const [lastname, setLastname] = useState('');
//   const [image, setImage] = useState('');
//   const [email, setEmail] = useState('');
//   const [telephone, setTelephone] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPass, setConfirmPass] = useState('');
//   const [mediaLibraryPermissionResponse, requestMediaLibraryPermission] = ImagePicker.useMediaLibraryPermissions()
//   const [cameraPermissionResponse, requestCameraPermission] = ImagePicker.useCameraPermissions()
//   const [errors, setErrors] = useState({});

//   const validateInputs = () => {
//     const newErrors = {};

//     if (!name) newErrors.name = 'Nom est requis';
//     if (!lastname) newErrors.lastname = 'Prénom est requis';
//     if (!email) newErrors.email = 'Email est requis';
//     if (!password) newErrors.password = 'Mot de passe est requis';
//     if (!confirmPass) newErrors.confirmPass = 'Confirmer le mot de passe est requis';
//     if (password && confirmPass && password !== confirmPass) newErrors.confirmPass = 'Les mots de passe ne correspondent pas';

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0;
//   }; 

//   const handleSubmit = async () => {

//     if (!validateInputs()) {
//       return;
//     }
   

    

//     if (password !== confirmPass) {
//       Alert.alert('Error', 'Passwords do not match');
//       return;
//     }
  
//     try {
//       // Making the request to your API using async/await
//       const response = await axios.post('http://192.168.151.34:3000/users/register', {
//         name,
//         lastname,
//         email,
//         password,
//         image
//       });
  
//       if (response.status === 201) {
//         const { token } = response.data;
        
//         // Store the token in AsyncStorage
//         await AsyncStorage.setItem('token', token);
        
//         // Decode the JWT
//         const decoded = jwtDecode(token);
//         console.log('Decoded JWT:', decoded);
        
//         // Show success alert
//         Alert.alert('Success', 'Signup successful');
//       } else {
//         throw new Error('Signup failed');
//       }
//     } catch (error) {
//       // Catch and handle any error that occurs during the signup process
//       console.error('Signup Error:', error);
//       Alert.alert('Error', 'Signup failed');
//     }
//   };
  
//   const handleGalleryClick = async () => {
//     if (mediaLibraryPermissionResponse.status !== 'granted') {
//         const { status } = await requestMediaLibraryPermission();
//         if (status !== 'granted') {
//             alert("Sorry, we need media library permissions to make this work!");
//             return;
//         }
//     }

//     let result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.Images,
//         allowsEditing: false,
//         quality: 0.5,
//         base64: true,
//     });

//     if (!result.canceled) {
//         const base64Image = `data:image/jpeg;base64,${result.assets[0].base64}`;
//         setImage(base64Image);
//     }
// };

// const handleCameraClick = async () => {
//     if (cameraPermissionResponse.status !== 'granted') {
//         const { status } = await requestCameraPermission();
//         if (status !== 'granted') {
//             alert("Sorry, we need camera permissions to make this work!");
//             return;
//         }
//     }

//     let result = await ImagePicker.launchCameraAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.Images,
//         allowsEditing: false,
//         quality: 0.5, 
//         base64: true,
//     });

//     if (!result.canceled) {
//         const base64Image = `data:image/jpeg;base64,${result.assets[0].base64}`
//         setImage(base64Image);
//     }
// }












//   console.log(name,lastname,email,password);
  

//   return (
   

   



//     <SafeAreaView style={styles.conta}   >   
//        <View style={styles.container}>
//       <Text style={styles.header}>Créer un nouveau compte</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Nom"
//         value={name}
//         onChangeText={(text) => setName(text)}
//       />
//       {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}


//       <TextInput
//         style={styles.input}
//         placeholder="Prénom"
//         value={lastname}
//         onChangeText={(text) => setLastname(text)}
//       />
//       {errors.lastname && <Text style={styles.errorText}>{errors.lastname}</Text>}

//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={(text) => setEmail(text)}
//         keyboardType="email-address"
//       />
//        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

//       {/* <TextInput
//         style={styles.input}
//         placeholder="Téléphone"
//         value={telephone}
//         onChangeText={setTelephone}
//         keyboardType="phone-pad"
//       /> */}

//       <TextInput
//         style={styles.input}
//         placeholder="Mot de passe"
//         value={password}
//         onChangeText={(text) => setPassword(text)}
//         secureTextEntry
//       />
//        {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

//       <TextInput
//         style={styles.input}
//         placeholder="Confirmer le mot de passe"
//         value={confirmPass}
//         onChangeText={(text) => setConfirmPass(text)}
//         secureTextEntry
//       />
//       {errors.confirmPass && <Text style={styles.errorText}>{errors.confirmPass}</Text>}

//         <TouchableOpacity style={styles.imageInput}   >
//           <Text>Choisir la photo du profil</Text>
//         </TouchableOpacity>

//         <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
//      <TouchableOpacity onPress={handleCameraClick} >
//      <AntDesign name="camera" size={24} color="black" />
//       </TouchableOpacity>
      
//       <TouchableOpacity onPress={ handleGalleryClick } >
//       <Entypo name="image" size={24} color="black" />
//       </TouchableOpacity>


//        </View>

//         <View>
//          {image && <Image source={{ uri: image }} style={styles.imagePreview}></Image>}


//         </View>






//       <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//         <Text style={styles.buttonText}>S'inscrire</Text>
//       </TouchableOpacity>
    
    
    


//     </View>
//     </SafeAreaView>
   
//   );
// }

// const styles = StyleSheet.create({
   
// // conta:{
    

// // },


//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//     top:30
//   },
//   header: {
//     fontSize: 24,
//     marginBottom: 20,
//     textAlign: 'center',
//     color:"#007bff"
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 15,
//   },
//   button: {
//     backgroundColor: '#007bff',
//     padding: 15,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginTop:30
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   imagePreview:{
//     width: 100,
//     height: 100,
//     marginTop: 10,



//   },
//   errorText: {
//     color: 'red',
//     marginBottom: 8,
//     marginLeft: 4,
//   },
// });




import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image, SafeAreaView } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import { jwtDecode } from "jwt-decode";
import ButtonNext from './ButtonNext';
import * as ImagePicker from 'expo-image-picker';

export default function SignUp() {

  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [image, setImage] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [mediaLibraryPermissionResponse, requestMediaLibraryPermission] = ImagePicker.useMediaLibraryPermissions();
  const [cameraPermissionResponse, requestCameraPermission] = ImagePicker.useCameraPermissions();
  const [errors, setErrors] = useState({});

  const validateInputs = () => {
    const newErrors = {};

    if (!name) newErrors.name = 'Nom est requis';
    if (!lastname) newErrors.lastname = 'Prénom est requis';
    if (!email) newErrors.email = 'Email est requis';
    if (!password) newErrors.password = 'Mot de passe est requis';
    if (!confirmPass) newErrors.confirmPass = 'Confirmer le mot de passe est requis';
    if (password && confirmPass && password !== confirmPass) newErrors.confirmPass = 'Les mots de passe ne correspondent pas';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateInputs()) {
      return;
    }

    if (password !== confirmPass) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://192.168.151.34:3000/users/register', {
        name,
        lastname,
        email,
        password,
        image
      });

      if (response.status === 201) {
        const { token } = response.data;
        await AsyncStorage.setItem('token', token);
        const decoded = jwtDecode(token);
        console.log('Decoded JWT:', decoded);
        Alert.alert('Success', 'Signup successful');
      } else {
        throw new Error('Signup failed');
      }
    } catch (error) {
      console.error('Signup Error:', error);
      Alert.alert('Error', 'Signup failed');
    }
  };

  const handleGalleryClick = async () => {
    if (mediaLibraryPermissionResponse.status !== 'granted') {
      const { status } = await requestMediaLibraryPermission();
      if (status !== 'granted') {
        alert("Sorry, we need media library permissions to make this work!");
        return;
      }
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 0.5,
      base64: true,
    });

    if (!result.canceled) {
      const base64Image = `data:image/jpeg;base64,${result.assets[0].base64}`;
      setImage(base64Image);
    }
  };

  const handleCameraClick = async () => {
    if (cameraPermissionResponse.status !== 'granted') {
      const { status } = await requestCameraPermission();
      if (status !== 'granted') {
        alert("Sorry, we need camera permissions to make this work!");
        return;
      }
    }

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 0.5,
      base64: true,
    });

    if (!result.canceled) {
      const base64Image = `data:image/jpeg;base64,${result.assets[0].base64}`;
      setImage(base64Image);
    }
  };

  return (
    <SafeAreaView style={styles.conta}>
      <View style={styles.container}>
        <Text style={styles.header}>Créer un nouveau compte</Text>

        <TextInput
          style={styles.input}
          placeholder="Nom"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

        <TextInput
          style={styles.input}
          placeholder="Prénom"
          value={lastname}
          onChangeText={(text) => setLastname(text)}
        />
        {errors.lastname && <Text style={styles.errorText}>{errors.lastname}</Text>}

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

        <TextInput
          style={styles.input}
          placeholder="Confirmer le mot de passe"
          value={confirmPass}
          onChangeText={(text) => setConfirmPass(text)}
          secureTextEntry
        />
        {errors.confirmPass && <Text style={styles.errorText}>{errors.confirmPass}</Text>}

        <TouchableOpacity style={styles.imageInput}>
          <Text>Choisir la photo du profil</Text>
        </TouchableOpacity>

        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={handleCameraClick}>
            <AntDesign name="camera" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleGalleryClick}>
            <Entypo name="image" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {image && <Image source={{ uri: image }} style={styles.imagePreview}></Image>}

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>S'inscrire</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  conta: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#007bff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  imagePreview: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 8,
    marginLeft: 4,
  },
})


