import { View, Text, StyleSheet, Image } from "react-native";
import MapView, { Callout, Marker, coordinate } from "react-native-maps";
import React from "react";

export default function CustomMarker({ coordinate, title, image }) {
  console.log("my location", coordinate);
  return (
    <View>
      <Marker coordinate={{ latitude: 36.861, longitude: 10.2267 }} />

      <View style={styles.markerContainer}>
        <Image source={image} style={styles.markerImage} />
      </View>
      <Callout toolip>
        <View>
          <Text>{title}</Text>
        </View>
      </Callout>
    </View>
  );
}
const styles = StyleSheet.create({
  markerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
