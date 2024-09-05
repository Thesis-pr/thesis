// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
//   Alert,
//   ScrollView,
//   errors,
// } from 'react-native';


// const RegisterPrestataire = () => {
 
//   const [currentPage, setCurrentPage] = useState(1);

//   // State variables for truck selection
//   const [selectedTruck, setSelectedTruck] = useState(null);
//   const [selectedPrice, setSelectedPrice] = useState(null);

//   // Truck d
//   const truckImages = [
//     {
//       id: '1',
//       label: 'fourgon',
//       price: '100 DT/heure',
//       image: require('../assets/1.jpg'), // Update these paths as needed
//     },
//     {
//       id: '2',
//       label: 'grand fourgon',
//       price: '150 DT/heure',
//       image: require('../assets/2.jpg'),
//     },
//     {
//       id: '3',
//       label: 'petit camion',
//       price: '300 DT/heure',
//       image: require('../assets/3.jpg'),
//     },
//     {
//       id: '4',
//       label: 'grand camion',
//       price: '350 DT/heure',
//       image: require('../assets/4.jpg'),
//     },
//   ];

//   const onSubmit = async (data) => {
//     if (!selectedTruck || !selectedPrice) {
//       Alert.alert('Erreur', 'Veuillez sélectionner une taille de camion.');
//       return;
//     }
//     // Integrate selectedTruck and selectedPrice into your submission data
//     data.truck = selectedTruck;
//     data.price = selectedPrice;

//     try {
//       const response = await fetch('https://your-api-endpoint.com/api/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });
//       const result = await response.json();

//       if (response.ok) {
//         Alert.alert('Succès', 'Vous êtes enregistré avec succès');
//         navigation.navigate('Home');
//       } else {
//         Alert.alert('Erreur', result.message || 'Une erreur est survenue');
//       }
//     } catch (error) {
//       console.error('Failed to register:', error);
//       Alert.alert('Erreur', "Une erreur s'est produite. Veuillez réessayer.");
//     }
//   };

//   const handlePrecedentPress = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleNextPress = () => {
//     if (currentPage < 5) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   // Truck selection handler
//   const handleTruckSelect = (truck) => {
//     setSelectedTruck(truck.label);
//     setSelectedPrice(truck.price);
//   };

//   const renderItem = ({ item }) => (
//     <TouchableOpacity
//       onPress={() => handleTruckSelect(item)}
//       style={[
//         styles.truckItem,
//         selectedTruck === item.label && styles.selectedTruckItem, // Highlight selected item
//       ]}
//     >
//       <Image source={item.image} style={styles.truckImage} />
//       <Text style={styles.truckLabel}>{item.label}</Text>
//       <Text style={styles.truckPrice}>{item.price}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View contentContainerStyle={styles.container}>
//       {currentPage === 1 && (
//         <View style={styles.innerContainer}>
//           <Text style={styles.textTitle}>Détails Personnels</Text>
          
            
            
//             render={({ field: { onChange, onBlur, value } }) => (
//               <TextInput
//                 style={styles.input}
//                 onBlur={onBlur}
//                 onChangeText={onChange}
//                 value={value}
//                 placeholder="Prénom"
//               />
//             )}
          
//           {errors.firstName && <Text style={styles.errorText}>Ce champ est requis.</Text>}
         
           
//               <TextInput
//                 style={styles.input}
//                 onBlur={onBlur}
//                 onChangeText={onChange}
//                 value={value}
//                 placeholder="Nom"
//               />
            
          
//           {errors.lastName && <Text style={styles.errorText}>Ce champ est requis.</Text>}
//         </View>
//       )}

//       {currentPage === 2 && (
//         <View style={styles.innerContainer}>
//           <Text style={styles.textTitle}>Informations de Contact</Text>
         
           
//               <TextInput
//                 style={styles.input}
//                 onBlur={onBlur}
//                 onChangeText={onChange}
//                 value={value}
//                 placeholder="Numéro de téléphone"
//               />
            
          
//           {errors.phoneNumber && (
//             <Text style={styles.errorText}>Ce champ est requis.</Text>
//           )}
          
            
//               <TextInput
//                 style={styles.input}
//                 onBlur={onBlur}
//                 onChangeText={onChange}
//                 value={value}
//                 placeholder="Email"
//               />
            
          
//           {errors.email && <Text style={styles.errorText}>Ce champ est requis.</Text>}
//         </View>
//       )}

//       {currentPage === 3 && (
//         <View style={styles.innerContainer}>
//           <Text style={styles.textTitle}>Détails du Véhicule</Text>
        
            
//               <TextInput
//                 style={styles.input}
//                 onBlur={onBlur}
//                 onChangeText={onChange}
//                 value={value}
//                 placeholder="Type de véhicule"
//               />
            
          
//           {errors.vehicleType && (
//             <Text style={styles.errorText}>Ce champ est requis.</Text>
//           )}
       
           
//               <TextInput
//                 style={styles.input}
//                 onBlur={onBlur}
//                 onChangeText={onChange}
//                 value={value}
//                 placeholder="Numéro d'immatriculation"
//               />
           
        
//           {errors.vehiclePlate && (
//             <Text style={styles.errorText}>Ce champ est requis.</Text>
//           )}
//         </View>
//       )}

//       {currentPage === 4 && (
//         <View style={styles.innerContainer}>
//           <Text style={styles.textTitle}>Détails du Compte</Text>
       
          
//               <TextInput
//                 style={styles.input}
//                 onBlur={onBlur}
//                 onChangeText={onChange}
//                 value={value}
//                 placeholder="Nom d'utilisateur"
//               />
            
          
//           {errors.username && (
//             <Text style={styles.errorText}>Ce champ est requis.</Text>
//           )}
       
           
//               <TextInput
//                 style={styles.input}
//                 onBlur={onBlur}
//                 onChangeText={onChange}
//                 value={value}
//                 placeholder="Mot de passe"
//                 secureTextEntry
//               />
        
        
//           {errors.password && (
//             <Text style={styles.errorText}>Ce champ est requis.</Text>
//           )}
//         </View>
//       )}

//       {currentPage === 5 && (
//         <View style={styles.innerContainer}>
//           <Text style={styles.textTitle}>
//             Quelle taille de camion pour déménager ?
//           </Text>

//           <FlatList
//             data={truckImages}
//             renderItem={renderItem}
//             keyExtractor={(item) => item.id}
//             numColumns={2}
//             contentContainerStyle={styles.flatListContainer}
//           />

//           <View style={styles.buttonContainer}>
//             <TouchableOpacity
//               style={styles.buttonBack}
//               onPress={handlePrecedentPress}
//             >
//               <Text style={styles.buttonText}>Précédente</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={styles.button}
//               onPress={handleSubmit(onSubmit)}
//             >
//               <Text style={styles.buttonText}>Confirmer la demande</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       )}

//       {/* {currentPage < 5 && (
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity style={styles.button} onPress={handleNextPress}>
//             <Text style={styles.buttonText}>Suivante</Text>
//           </TouchableOpacity>
//         </View>
//       )} */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     padding: 16,
//     backgroundColor: '#fff',
//   },
//   innerContainer: {
//     marginBottom: 32,
//   },
//   textTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 16,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius: 5,
//     marginBottom: 16,
//     paddingHorizontal: 8,
//   },
//   errorText: {
//     color: 'red',
//     marginBottom: 16,
//   },
//   truckItem: {
//     flex: 1,
//     alignItems: 'center',
//     margin: 10,
//     padding: 10,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 10,
//   },
//   selectedTruckItem: {
//     borderColor: '#007bff',
//     borderWidth: 2,
//   },
//   truckImage: {
//     width: 80,
//     height: 80,
//     resizeMode: 'contain',
//   },
//   truckLabel: {
//     marginTop: 8,
//     fontSize: 16,
//   },
//   truckPrice: {
//     fontSize: 14,
//     color: '#666',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   button: {
//     backgroundColor: '#007bff',
//     padding: 10,
//     borderRadius: 5,
//     flex: 1,
//     alignItems: 'center',
//     marginHorizontal: 5,
//   },
//   buttonBack: {
//     backgroundColor: '#ccc',
//     padding: 10,
//     borderRadius: 5,
//     flex: 1,
//     alignItems: 'center',
//     marginHorizontal: 5,
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   flatListContainer: {
//     alignItems: 'center',
//   },
// });

// export default RegisterPrestataire;
