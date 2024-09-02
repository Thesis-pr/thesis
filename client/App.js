import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Demande from "./components/Demande";
import Footer from "./components/Footer";
import Depart from "./components/Depart";
import DemenageurNum from "./components/DemenageurNum";
import HouseLevel from "./components/HouseLevel";
import HowMuchLevel from "./components/HowMuchLevel";
import HeaderUser from "./components/HeaderUser";
import PrestataireHeader from "./components/PrestataireHeader";
import PrestatairePage from "./components/PrestatairePage";
import AcceptRequest from "./components/AcceptRequest";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import ExpoMaps from "./components/ExpoMaps";
import ConfirmRequest from "./components/ConfirmRequest";
import Telephone from "./components/Telephone";
import Datetime from "./components/Datetime ";
import Duration from "./components/Duration";
import RequestDetails from "./components/RequestDetails";
import Itenerarymap from "./components/Itenerarymap";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Depart">
    //     <Stack.Screen
    //       name="Depart"
    //       component={Depart}
    //       options={{ headerShown: false }}
    //     />
    //     <Stack.Screen
    //       name="HouseLevel"
    //       component={HouseLevel}
    //       options={{ headerShown: false }}
    //     />
    //     <Stack.Screen
    //       name="HowMuchLevel"
    //       component={HowMuchLevel}
    //       options={{ headerShown: false }}
    //     />
    //     <Stack.Screen
    //       name="DemenageurNum"
    //       component={DemenageurNum}
    //       options={{ headerShown: false }}
    //     />
    //     <Stack.Screen
    //       name="Demande"
    //       component={Demande}
    //       options={{ headerShown: false }}
    //     />
    //     <Stack.Screen
    //       name="Telephone"
    //       component={Telephone}
    //       options={{ headerShown: false }}
    //     />
    //     <Stack.Screen
    //       name="Datetime"
    //       component={Datetime}
    //       options={{ headerShown: false }}
    //     />
    //     <Stack.Screen
    //       name="Duration"
    //       component={Duration}
    //       options={{ headerShown: false }}
    //     />
    //     <Stack.Screen
    //       name="ExpoMaps"
    //       component={ExpoMaps}
    //       options={{ headerShown: false }}
    //     />

    //     <Stack.Screen
    //       name="HeaderUser"
    //       component={HeaderUser}
    //       options={{ headerShown: false }}
    //     />
    //     <Stack.Screen
    //       name="RequestDetails"
    //       component={RequestDetails}
    //       options={{ headerShown: false }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>

    /**
     * ! prestataire
     */
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PrestatairePage">
        <Stack.Screen
          name="PrestatairePage"
          component={PrestatairePage}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="AcceptRequest"
          component={AcceptRequest}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Itenerarymap"
          component={Itenerarymap}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
