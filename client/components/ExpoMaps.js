import React, { useState, useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  Text,
} from "react-native";
import ButtonNext from "./ButtonNext";
import MapView, { Marker } from "react-native-maps";
import EvilIcons from "@expo/vector-icons/EvilIcons";

const ExpoMaps = ({ route }) => {
  const [region, setRegion] = useState({
    latitude: 36.8064948,
    longitude: 10.1815316,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  let obj = route?.params;

  const [marker, setMarker] = useState(null);
  const [places, setPlaces] = useState([]);
  const [input, setInput] = useState("");
  const [saveLocation, setSavedLocation] = useState({});
  const mapRef = useRef(null);

  useEffect(() => {
    let obj = route?.params;
    console.log("expo", obj);
  }, [route]);

  const onPlaceSelected = (details) => {
    if (details && details.geometry) {
      const { lat, lng } = details.geometry.location;
      console.log(
        "detaiiiiiiiiiiiils wiiiiiiiiiiiii",
        details.address_components[0].long_name
      );
      const newRegion = {
        latitude: lat,
        longitude: lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      };

      setMarker({ latitude: lat, longitude: lng });
      console.log("lat: ", lat); // HADIA LATITUDE LI BECH N7OTOHA FEL BASE DE DONNES
      console.log("lng: ", lng); // HADIA LONGITUDE LI BECH N7OTOHA FEL BASE DE DONNES
      obj.latitude = lat;
      obj.longitude = lng;
      obj.adress = details.address_components[0].long_name;
      route.params = obj;
      console.log("location", route.params);
      setRegion(newRegion);

      setTimeout(() => {
        mapRef.current.animateToRegion(newRegion, 1000);
      }, 100);

      setPlaces([]);
    }
  };

  const fetchPlaces = (text) => {
    setInput(text);

    if (text.length > 2) {
      fetch(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${text}&key=AIzaSyDBqhCUgOmuqKJS8Sz61RSea61hk75EImA&location=${region.latitude},${region.longitude}&radius=2000`
      )
        .then((response) => response.json())
        .then((result) => {
          if (result.predictions) {
            setPlaces(result.predictions);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setPlaces([]);
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        region={region}
        onRegionChangeComplete={setRegion}
        pointerEvents="none"
      >
        {marker && <Marker coordinate={marker} />}
      </MapView>
      <View style={styles.autocompleteContainer}>
        <View style={styles.searchBar}>
          <EvilIcons
            style={styles.iconLocation}
            name="location"
            size={24}
            color="black"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Search"
            value={input}
            onChangeText={fetchPlaces}
          />
        </View>
        {places.length > 0 && (
          <FlatList
            data={places}
            keyExtractor={(item) => item.place_id}
            style={styles.listView}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.listItem}
                onPress={() => {
                  setInput(item.description);

                  fetch(
                    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${item.place_id}&key=AIzaSyDBqhCUgOmuqKJS8Sz61RSea61hk75EImA`
                  )
                    .then((response) => response.json())
                    .then((details) => {
                      onPlaceSelected(details.result);
                    })
                    .catch((error) => console.error(error));
                }}
              >
                <Text style={styles.itemText}>{item.description}</Text>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
      <View style={styles.fixButton}>
        <ButtonNext
          style={styles.button}
          targetScreen={"HeaderUser"}
          params={route.params}
          buttonColor="#0078FA"
          buttonText="Add your location"
          textColor="white"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  autocompleteContainer: {
    flex: 1,
    width: "100%",
    padding: 10,
    backgroundColor: "transparent",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
    borderColor: "#ddd",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginTop: 30,
  },
  iconLocation: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    height: 44,
    fontSize: 16,
  },
  listView: {
    backgroundColor: "white",
    borderRadius: 5,
    marginTop: 10,
    maxHeight: 150,
  },
  listItem: {
    padding: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  itemText: {
    color: "black",
  },
  fixButton: {
    flexDirection: "row",
    gap: 40,
    justifyContent: "center",
    marginBottom: 20,
  },
});

export default ExpoMaps;
