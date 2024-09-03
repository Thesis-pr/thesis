import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import MapViewDirections from "react-native-maps-directions";

const Itenerarymap = ({ route }) => {
  const { lat, lng } = route.params;
  const [region, setRegion] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);

  const openGoogleMaps = (origin, destination) => {
    const url = `https://www.google.com/maps/dir/?api=1&origin=${origin.latitude},${origin.longitude}&destination=${destination.latitude},${destination.longitude}&travelmode=driving`;
    Linking.openURL(url).catch((err) =>
      console.error("An error occurred while trying to open Google Maps", err)
    );
  };
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      setCurrentLocation({ latitude, longitude });
      setRegion({
        latitude,
        longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    })();
  }, []);

  return (
    <View style={styles.container}>
      {region && (
        <MapView style={styles.map} initialRegion={region}>
          {currentLocation && (
            <Marker coordinate={currentLocation} title="Your Location" />
          )}
          <Marker
            coordinate={{ latitude: lat, longitude: lng }}
            title="Destination"
          />
          {currentLocation && (
            <MapViewDirections
              origin={currentLocation}
              destination={{
                latitude: lat,
                longitude: lng,
              }}
              apikey="AIzaSyDBqhCUgOmuqKJS8Sz61RSea61hk75EImA"
              strokeWidth={5}
              strokeColor="blue"
            />
          )}
        </MapView>
      )}
      {/* {currentLocation && (
        <TouchableOpacity
          style={styles.googleMapsButton}
          onPress={() =>
            openGoogleMaps(currentLocation, {
              latitude: lat,
              longitude: lng,
            })
          }
        >
          <Text style={styles.buttonText}>Open in Google Maps</Text>
        </TouchableOpacity>
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonText: {
    backgroundColor: "#0078FA",
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Itenerarymap;
