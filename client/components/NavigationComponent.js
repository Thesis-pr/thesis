import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Demande from "./Demande";
import Depart from "./Depart";

const Stack = createNativeStackNavigator();

export default function NavigationComponent() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Demande">
        <Stack.Screen name="Demande" component={Demande} />
        <Stack.Screen name="Depart" component={Depart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
