// import { View, Text, StyleSheet, Dimensions, Button } from "react-native";
// import React, { useEffect, useState, useRef } from "react";
// import MapView, { Marker } from "react-native-maps";
// import CustomMarker from "./CustomMarker";
// import * as Location from "expo-location";

// const Maps = () => {
//   const [myLocation, setMyLocation] = useState({
//     latitude: 36.861,
//     longitude: 10.2267,
//   });
//   const [pin, setPin] = useState({});
//   const [region, setRegion] = useState(null);
//   const mapRef = React.useRef();

//   const local = {
//     latitude: 36.861,
//     longitude: 10.2267,
//   };
//   useEffect(() => {
//     setPin(local);
//     _getLocation();
//   }, []);

//   const _getLocation = async () => {
//     try {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== "granted") {
//         console.warn("Permission to access location was denied");
//         return;
//       }
//       let location = await Location.getCurrentPositionAsync({});
//       setMyLocation(location.coords);
//       console.log("hi", location);
//       setPin(location.coords);
//     } catch (err) {
//       console.warn(err);
//     }
//   };
//   const focusOnLocation = () => {
//     if (pin.latitude && pin.longitude) {
//       const region = {
//         latitude: parseFloat(pin.latitude),
//         longitude: parseFloat(pin.latitude),
//         latitudeDelta: 0.0922,
//         longitudeDelta: 0.0421,
//       };
//       if (mapRef.current) {
//         mapRef.current.animateToRegion(region, 1000);
//       }
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <MapView
//         style={styles.map}
//         region={region}
//         onRegionChangeComplete={setRegion}
//         ref={mapRef}
//         provider="google"
//       >
//         {myLocation.latitude && myLocation.longitude && (
//           <Marker
//             coordinate={{
//               latitude: myLocation.latitude,
//               longitude: myLocation.longitude,
//             }}
//             title="My current location"
//             image={require("../assets/5.jpg")}
//             style={styles.markerImage}
//           />
//         )}
//         {pin.latitude && pin.longitude && (
//           <CustomMarker
//             coordinate={{
//               latitude: parseFloat(pin.latitude),
//               longitude: parseFloat(pin.longitude),
//             }}
//             title="Default location"
//             description="I'm here"
//           />
//         )}
//       </MapView>
//       <View style={styles.buttonContainer}>
//         <Button title="Get location" onPress={focusOnLocation} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "column",
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "flex-start",
//   },
//   map: {
//     width: Dimensions.get("window").width,
//     height: Dimensions.get("window").height,
//   },
//   buttonContainer: {
//     position: "absolute",
//     bottom: 10,
//   },
//   markerImage: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//   },
// });

// export default Maps;

import { View, StyleSheet, Dimensions, Button } from "react-native";
import React, { useEffect, useState, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import CustomMarker from "./CustomMarker"; // Make sure this path is correct
import * as Location from "expo-location";

const Maps = () => {
  const [myLocation, setMyLocation] = useState({
    latitude: 36.861,
    longitude: 10.2267,
  });
  const [pin, setPin] = useState({});
  const [region, setRegion] = useState(null);
  const mapRef = useRef();

  useEffect(() => {
    setPin(myLocation); // Set initial pin to myLocation
    _getLocation();
  }, []);

  const _getLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.warn("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setMyLocation(location.coords);
      setPin(location.coords); // Update pin to current location
    } catch (err) {
      console.warn(err);
    }
  };

  const focusOnLocation = () => {
    if (pin.latitude && pin.longitude) {
      const region = {
        latitude: pin.latitude,
        longitude: pin.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };
      if (mapRef.current) {
        mapRef.current.animateToRegion(region, 1000);
      }
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        onRegionChangeComplete={setRegion}
        ref={mapRef}
        provider="google"
      >
        {myLocation.latitude && myLocation.longitude && (
          <Marker
            coordinate={{
              latitude: myLocation.latitude,
              longitude: myLocation.longitude,
            }}
            title="My current location"
          />
        )}
        {pin.latitude && pin.longitude && (
          <CustomMarker
            coordinate={{
              latitude: pin.latitude,
              longitude: pin.longitude,
            }}
            title="Default location"
            description="I'm here"
          />
        )}
      </MapView>
      <View style={styles.buttonContainer}>
        <Button title="Get location" onPress={focusOnLocation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 10,
  },
  markerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default Maps;
