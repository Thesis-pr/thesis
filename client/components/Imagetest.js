// import React, { useState, useEffect } from 'react';
// import { View, Button, Image, ScrollView, StyleSheet } from 'react-native';
// import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// import * as ImagePicker from 'expo-image-picker';

// const Imagetest = () => {
//   const [selectedImages, setSelectedImages] = useState([])
//   const [mediaLibraryPermissionResponse, requestMediaLibraryPermission] = ImagePicker.useMediaLibraryPermissions();
//   const [cameraPermissionResponse, requestCameraPermission] = ImagePicker.useCameraPermissions();

//   const galleryPermission = ()=>{
//     if (!cameraPermissionResponse?.granted) {
//         await requestCameraPermission();
//       }
//   }

//   const selectImagesFromGallery = async () => {
//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsMultipleSelection: true, // Allow multiple selection
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       // Append new images to the existing array
//       setSelectedImages([...selectedImages, ...result.assets.map(asset => asset.uri)]);
//     }
//   };

//   const takePhotoWithCamera = async () => {
//     const result = await ImagePicker.launchCameraAsync({
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       // Append the new image to the existing array
//       setSelectedImages([...selectedImages, result.assets[0].uri]);
//     }
//   };

//   return (
//     <SafeAreaProvider>
//       <SafeAreaView style={styles.container}>
//         <Button title="Select Images from Gallery" onPress={selectImagesFromGallery} />
//         <Button title="Take Photo with Camera" onPress={takePhotoWithCamera} />
//         <ScrollView style={styles.imageContainer} horizontal>
//           {selectedImages.map((uri, index) => (
//             <Image key={index} source={{ uri }} style={styles.image} />
//           ))}
//         </ScrollView>
//       </SafeAreaView>
//     </SafeAreaProvider>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   imageContainer: {
//     marginTop: 20,
//     height: 120, // Adjust height to match image size
//   },
//   image: {
//     width: 100,
//     height: 100,
//     marginRight: 10,
//   },
// });

// export default Imagetest;
