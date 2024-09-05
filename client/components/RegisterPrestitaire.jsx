// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView, Image } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';
// import * as ImagePicker from 'expo-image-picker';
// import jwtDecode from 'jwt-decode';

// const RegisterPrestataire = () => {
//   const [mail, setMail] = useState('');
//   const [address, setAddress] = useState('');
//   const [name, setName] = useState('');
//   const [lastname, setLastname] = useState('');
//   const [experience, setExperience] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [profileImage, setProfileImage] = useState(null);
//   const [truckImage, setTruckImage] = useState(null);

//   const pickImage = async (setImage) => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setImage(result.assets[0].uri);
//     }
//   };

//   const handleSubmit = async () => {
//     if (password !== confirmPassword) {
//       Alert.alert('Error', 'Passwords do not match');
//       return;
//     }

//     try {
//       const response = await axios.post('http://192.168.103.13:5000/drivers/register', {
//         mail,
//         address,
//         name,
//         lastname,
//         experience,
//         password,
//         profileImage,
//         truckImage,
//         images: [profileImage, truckImage, photoOfcin, photoOfdriverLicence, carteGrise],
//       });

//       if (response.status === 201) {
//         const { token } = response.data;

//         await AsyncStorage.setItem('token', token);

//         const decoded = jwtDecode(token);
//         console.log('Decoded JWT:', decoded);

//         Alert.alert('Success', 'Signup successful');
//       }
//     } catch (error) {
//       if (error.response) {
//         console.error('Error Response:', error.response.data);
//         Alert.alert('Error', Signup failed: ${error.response.data.message || 'Server error'});
//       } else if (error.request) {
//         console.error('Error Request:', error.request);
//         Alert.alert('Error', 'Signup failed: No response from server');
//       } else {
//         console.error('Error Message:', error.message);
//         Alert.alert('Error', Signup failed: ${error.message});
//       }
//     }
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.scrollContainer}>
//       <View style={styles.container}>
//         <Text style={styles.title}>Registrez comme prestataire</Text>
//         <Text style={styles.subtitle}>
//           Créez un compte pour explorer tous les emplois disponibles
//         </Text>

//         <TextInput
//           style={styles.input}
//           placeholder="E-mail"
//           placeholderTextColor="#A0A0A0"
//           value={mail}
//           onChangeText={setMail}
//           keyboardType="email-address"
//           autoCapitalize="none"
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Adresse"
//           placeholderTextColor="#A0A0A0"
//           value={address}
//           onChangeText={setAddress}
//           keyboardType="default"
//           autoCapitalize="none"
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Nom"
//           placeholderTextColor="#A0A0A0"
//           value={name}
//           onChangeText={setName}
//           keyboardType="default"
//           autoCapitalize="none"
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Prénom"
//           placeholderTextColor="#A0A0A0"
//           value={lastname}
//           onChangeText={setLastname}
//           keyboardType="default"
//           autoCapitalize="none"
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Expérience"
//           placeholderTextColor="#A0A0A0"
//           value={experience}
//           onChangeText={setExperience}
//           keyboardType="default"
//           autoCapitalize="none"
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Mot de passe"
//           secureTextEntry={true}
//           placeholderTextColor="#A0A0A0"
//           value={password}
//           onChangeText={setPassword}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Confirmer votre mot de passe"
//           secureTextEntry={true}
//           placeholderTextColor="#A0A0A0"
//           value={confirmPassword}
//           onChangeText={setConfirmPassword}
//         />

//         <TouchableOpacity style={styles.imageInput} onPress={() => pickImage(setProfileImage)}>
//           <Text>Entrez votre image</Text>
//           {profileImage && <Image source={{ uri: profileImage }} style={styles.imagePreview} />}
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.imageInput} onPress={() => pickImage(setTruckImage)}>
//           <Text>Entrez l'image de votre camion</Text>
//           {truckImage && <Image source={{ uri: truckImage }} style={styles.imagePreview} />}
//         </TouchableOpacity>

//         <View style={styles.buttonContainer}>
//           <TouchableOpacity style={styles.backButton}>
//             <Text style={styles.backButtonText}>Retour</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.nextButton} onPress={handleSubmit}>
//             <Text style={styles.nextButtonText}>Suivant</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };












import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image, ScrollView, FlatList, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import jwtDecode from 'jwt-decode';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';



const RegisterPrestataire = () => {
  const [mail, setMail] = useState('');
  const [address, setAddress] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [experience, setExperience] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [truck, setTruck] = useState('');
  const [photoOfcin, setPhotoOfcin] = useState(null);
  const [photoOfdriverLicence, setPhotoOfdriverLicence] = useState(null);
  const [carteGrise, setCarteGrise] = useState(null);
  const [images_truck, setImagesTruck] = useState([]);
  const [activeButton, setActiveButton] = useState(null)
  const [currentPage,setCurrentPage] = useState(1)
  const [truckTypeSaved, setTruckTypeSaved] = useState("");
  const [tel,setTel]= useState("")
  const [image, setimage] = useState(null);
  const [cameraPermissionResponse, requestCameraPermission] = ImagePicker.useCameraPermissions()
  const [mediaLibraryPermissionResponse, requestMediaLibraryPermission] = ImagePicker.useMediaLibraryPermissions()

  


  const truckImages = [
    { id: "1", source: require("../assets/1.jpg"), label: "fourgon", },
    { id: "2", source: require("../assets/2.jpg"), label: "grand fourgon",  },
    { id: "3", source: require("../assets/3.jpg"), label: "petit camion",  },
    {
      id: "4",source: require("../assets/4.jpg"),label: "grand camion",
    },
  ];
  
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
      setimage(base64Image);
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
        const base64Image = `data:image/jpeg;base64,${result.assets[0].base64}`
        setimage(base64Image);
    }
}
   





 

//////
  const handleImagePress = (label) => {
    setTruckTypeSaved(label);
  };

  const renderItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <TouchableOpacity onPress={() => handleImagePress(item.label)}>
        <Image source={item.source} style={styles.image} />
        <Text style={styles.text}>{item.label}</Text>
        <Text style={styles.text}>{item.truck_price}</Text>
      </TouchableOpacity>
    </View>
  );


  const handleSuivantPress = () => {
   setCurrentPage(currentPage+1)
  };

  const handlePrecedentPress = () => {
    setActiveButton("precedent");
    if(currentPage>1){
      setCurrentPage(currentPage-1)
    }
  };



  const pickImage = async (setImageFunction) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
      base64: true,

    });

    if (!result.canceled) {
       const base64Image = `data:image/jpeg;base64,${result.assets[0].base64}`
      setImageFunction(base64Image);
      console.log("photoofcin", photoOfcin)
    }
  };

  const pickMultipleImages = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsMultipleSelection: true,
        quality: 1,
        base64: true,
      });
    
      if (!result.canceled && result.assets) {
        const newImages = result.assets.map(asset => `data:image/jpeg;base64,${asset.base64}`);
        setImagesTruck(prevImages => [...prevImages, ...newImages]);
      }
    } catch (error) {
      console.error('Error picking images:', error);
      Alert.alert('Error', 'Failed to pick images. Please try again.');
    }
  };


  const validateInputs = () => {
    // Simple validation for example purposes
    if (!name || !lastname || !mail || !tel || !address || !password || !confirmPassword) {
      Alert.alert('Error', 'All fields are required');
      return false;
    }
  
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return false;
    }
  
    // Add any other validation you need
    return true;
  };
  

  const handleSubmit = async () => {

    if (!validateInputs()) {
      return;
    }
   

    

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
  

    const allowedTruckTypes = [
      "petit utilitaire",
      "grand fourgon",
      "petit camion",
      "grand camion"
    ];
  
    if (!allowedTruckTypes.includes(truckTypeSaved)) {
      Alert.alert('Error', 'Please select a valid truck type');
      return;
    }




    



    try {
      // Making the request to your API using async/await
      const response = await axios.post('http://192.168.103.10:5000/drivers/register', {
        name,
        lastname,
        image,
         truck: truckTypeSaved,
        images_truck,
        mail,
        password,
        experience,
        tel,
        address,
        photoOfcin,
        photoOfdriverLicence,
        carteGrise
      });
  
      if (response.status === 201) {
        const { token } = response.data;
        
        // Store the token in AsyncStorage
        await AsyncStorage.setItem('token', token);
        
        // Decode the JWT
        // const decoded = jwtDecode(token);
        // console.log('Decoded JWT:', decoded);
        
        // Show success alert
        Alert.alert('Success', 'Signup successful');
      } else {
        throw new Error('Signup failed');
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code outside the range of 2xx
        console.error('Data:', error.response.data);
        console.error('Status:', error.response.status);
        console.error('Headers:', error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received:', error.request);
      } else {
        // Something happened in setting up the request
        console.error('Error setting up request:', error.message);
      }
      Alert.alert('Error', 'Failed to register. Please try again.');
    }
  };






  return (
      <SafeAreaProvider>  
        <SafeAreaView>
       <View style={styles.container}>
        <Text style={styles.title}>Registrez comme prestataire</Text>
       
     {currentPage ===1 && (
      
      <View>
         
         <Text style={styles.subtitle}>Créez un compte pour explorer tous les emplois disponibles</Text>
          
        
         <TextInput
           style={styles.input}
           placeholder="Nom"
           placeholderTextColor="#A0A0A0"
           value={name}
           onChangeText={setName}
         />
         <TextInput
           style={styles.input}
           placeholder="Prénom"
           placeholderTextColor="#A0A0A0"
           value={lastname}
           onChangeText={setLastname}
         />
         <TextInput
        style={styles.input}
        placeholder="Téléphone"
        value={tel}
        onChangeText={setTel}
        keyboardType="phone-pad"
      />
          <TextInput
           style={styles.input}
           placeholder="E-mail"
           placeholderTextColor="#A0A0A0"
           value={mail}
           onChangeText={setMail}
           keyboardType="email-address"
           autoCapitalize="none"
         />
        
         < View>

         <TouchableOpacity style={styles.button} onPress={handleSuivantPress}    >
        <Text style={styles.buttonText}>Suivante</Text>
      </TouchableOpacity>
         
        
         </View>
         </View>
     )}

{currentPage ===2 && (
      
      <View>
         
         <Text style={styles.subtitle}>Créez un compte pour explorer tous les emplois disponibles </Text>
          
       
         
         <TextInput
           style={styles.input}
           placeholder="Adresse"
           placeholderTextColor="#A0A0A0"
           value={address}
           onChangeText={setAddress}
         />
        
        <TextInput
           style={styles.input}
           placeholder="Expérience"
           placeholderTextColor="#A0A0A0"
           value={experience}
           onChangeText={setExperience}
           keyboardType="default"
           autoCapitalize="none"
         />


         <TextInput
           style={styles.input}
           placeholder="Mot de passe"
           secureTextEntry={true}
           placeholderTextColor="#A0A0A0"
           value={password}
           onChangeText={setPassword}
         />
         <TextInput
           style={styles.input}
           placeholder="Confirmer votre mot de passe"
           secureTextEntry={true}
           placeholderTextColor="#A0A0A0"
           value={confirmPassword}
           onChangeText={setConfirmPassword}
         />
         

         < View>

        
         <View style={styles.buttonContainer}  >
      
      <TouchableOpacity style={styles.buttonBack} onPress={handlePrecedentPress}    >
        <Text style={styles.buttonText}>Précédente</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleSuivantPress}    >
        <Text style={styles.buttonText}>Suivante</Text>
      </TouchableOpacity>



          </View> 
         
        
         </View>
         </View>
     )}

        {currentPage === 3 && (
          <View>
            <View  style={styles.innerContainer2}   > 

            <TouchableOpacity style={styles.imageInput}>
              <Text>Entrez votre image</Text>
              {image && <Image source={{ uri: image }} style={styles.imagePreview} />}
              </TouchableOpacity>
              
              <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>


     <TouchableOpacity onPress={handleCameraClick} >
     <AntDesign name="camera" size={24} color="black" />
      </TouchableOpacity>
      

      <TouchableOpacity onPress={ handleGalleryClick } >
      <Entypo name="image" size={24} color="black" />
      </TouchableOpacity>

       </View>



            <TouchableOpacity style={styles.imageInput} onPress={() => pickImage(setPhotoOfcin)}>
          <Text>Choisir la photo de la CIN</Text>
        </TouchableOpacity>
        {photoOfcin && <Image source={{ uri: photoOfcin }} style={styles.imagePreview} />}


        <TouchableOpacity style={styles.imageInput} onPress={() => pickImage(setPhotoOfdriverLicence)}>
          <Text>Choisir la photo du permis de conduire</Text>
        </TouchableOpacity>
        {photoOfdriverLicence && <Image source={{ uri: photoOfdriverLicence }} style={styles.imagePreview} />}


       

          <View style={styles.buttonContainer}  >
      
      <TouchableOpacity style={styles.buttonBack} onPress={handlePrecedentPress}    >
        <Text style={styles.buttonText}>Précédente</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSuivantPress}    >
        <Text style={styles.buttonText}>Suivante</Text>
      </TouchableOpacity>


          </View>
             

          </View>
          </View>
        )}

        {currentPage === 4 && (
            
      
           
            <View  style={styles.innerContainer2}   > 
              
            <TouchableOpacity style={styles.imageInput} onPress={() => pickImage(setCarteGrise)}>
          <Text>Choisir la photo de la carte grise</Text>
        </TouchableOpacity>
        {carteGrise && <Image source={{ uri: carteGrise }} style={styles.imagePreview} />}

        <TouchableOpacity style={styles.imageInput} onPress={pickMultipleImages}>
          <Text>Choisir les photos du camion</Text>
        </TouchableOpacity>
        <View>
        {images_truck.length > 0 && images_truck.map((image, index) => (
          <Image key={index} source={{ uri: image }} style={styles.imagePreview} />
        ))}
        </View>
       





            <View style={styles.buttonContainer}  >
      
      <TouchableOpacity style={styles.buttonBack} onPress={handlePrecedentPress}    >
        <Text style={styles.buttonText}>Précédente</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleSuivantPress}    >
        <Text style={styles.buttonText}>Suivante</Text>
      </TouchableOpacity>



          </View> 
           </View>
            // </View>
          
        )}

{currentPage === 5 && (
            
      
            <View style={styles.innerContainer}>
              <Text style={styles.textTitle}>
                Quelle taille de camion pour déménager ?
              </Text>
              <FlatList
                data={truckImages}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
                contentContainerStyle={styles.flatListContainer}
              />
             <View style={styles.buttonContainer2}  >
      
      <TouchableOpacity style={styles.buttonBack} onPress={handlePrecedentPress}    >
        <Text style={styles.buttonText}>Précédente</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}   >
        <Text style={styles.buttonText}>Confirmer la demande</Text>
      </TouchableOpacity>


          </View>
             
            </View>
          
        )}

    
    
      </View>
      </SafeAreaView>
      </SafeAreaProvider>

  );
};

const styles = StyleSheet.create({

  container: {
    width: '100%',
    // backgroundColor: '#FFFFFF',
    padding: 40,
    borderRadius: 12,
    
  },
 
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0078FA',
    marginBottom: 25,
    marginTop:20,
  },
  subtitle: {
    fontSize: 16,
    color: '#777777',
    marginBottom: 24,
    fontWeight:'inter',
  },
  input: {
    borderWidth: 1,
    borderColor: '#0077FF',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 16,
  },
  imageInput: {
    borderWidth: 1,
    borderColor: '#0077FF',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  imagePreview: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
 
  
  contain: {
    display:'flex',
    flexDirection: "row",
    alignSelf: "center",
    gap: 60,
  },
 
  textTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 20,
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    
    
  },
  innerContainer2: {
    paddingTop:20,
   
   
  },
  textTitle: {
    // fontSize: 18,
    // marginBottom: 10,
    // textAlign: 'center',
    fontSize: 16,
    color: '#777777',
    marginBottom: 10,
    fontWeight:'inter',
  },
 imageContainer: {
  alignItems:"center",
  margin:10
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

buttonBack:{
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
buttonContainer: {
  flexDirection: 'row', 
  justifyContent: 'space-between', 
  alignItems: 'center', 
},
buttonContainer2: {
  flexDirection: 'row', 
  justifyContent: 'space-between', 
  alignItems: 'center', 
  width: '100%',  // Ensure it spans across the screen width
  paddingHorizontal: 10, // Add some horizontal padding for spacing
   
},
flatListContainer: {
  // flexGrow: 1,
  justifyContent: "center",
},
text: {
  marginTop: 5,
  textAlign: "center",
},
image: {
  width: 150,
  height: 100,
  resizeMode: "contain",
},


});

export default RegisterPrestataire;


// const handleSubmit = async () => {
  //   if (password !== confirmPassword) {
  //     Alert.alert('Error', 'Passwords do not match');
  //     return;
  //   }

  //   const formData = new FormData();
  //   formData.append('mail', mail);
  //   formData.append('address', address);
  //   formData.append('name', name);
  //   formData.append('lastname', lastname);
  //   formData.append('experience', experience);
  //   formData.append('password', password);
  //   formData.append('price', price);
  //   formData.append('truck', truckTypeSaved);
  //   formData.append('tel', telephone);
  //   formData.append('image',  image);
   

  //   // Add images to formData
  //   formData.append('photoOfcin', {
  //     uri: photoOfcin,
  //     type: 'image/jpeg',
  //     name: 'photoOfcin.jpg',
  //   });
  //   formData.append('photoOfdriverLicence', {
  //     uri: photoOfdriverLicence,
  //     type: 'image/jpeg',
  //     name: 'photoOfdriverLicence.jpg',
  //   });
  //   formData.append('carteGrise', {
  //     uri: carteGrise,
  //     type: 'image/jpeg',
  //     name: 'carteGrise.jpg',
  //   });

  //   images_truck.forEach((image, index) => {
  //     formData.append('images_truck[]', {
  //       uri: image,
  //       type: `image/jpeg`,
  //       name: `truck_image_${index}.jpg`,
  //     });
  //   });

  //   try {
  //     const response = await axios.post('http://192.168.103.13:5000/drivers/register', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     });

  //     if (response.status === 201) {
  //       const { token } = response.data;
  //       await AsyncStorage.setItem('token', token);
  //       const decoded = jwtDecode(token);
  //       console.log('Decoded JWT:', decoded);
  //       Alert.alert('Success', 'Signup successful');
  //     }
  //   } catch (error) {
  //     if (error.response) {
  //       console.error('Error Response:', error.response.data);
  //       Alert.alert('Error', `Signup failed: ${error.response.data.message || 'Server error'}`);
  //     } else if (error.request) {
  //       console.error('Error Request:', error.request);
  //       Alert.alert('Error', 'Signup failed: No response from server');
  //     } else {
  //       console.error('Error Message:', error.message);
  //       Alert.alert('Error', `Signup failed: ${error.message}`);
  //     }
  //   }
  // };