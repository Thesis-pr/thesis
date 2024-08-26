// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
// import Header from "./components/Header";
// import Demande from "./components/Demande";
// import Footer from "./components/Footer";
// import Depart from "./components/Depart";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       {/* <Header /> */}
//       {/* <Demande /> */}
//       <Depart />
//       {/* <Footer /> */}
//       {/* <HouseLevel/> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "colomn",
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "flex-start",
//   },
// });

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
// import UserPage from "./components/userPage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Maps from "./components/Maps";
import PageDeGarde from "./components/PageDeGarde";
import About1 from "./components/About1";
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
    //   </Stack.Navigator>
    // </NavigationContainer>

    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="PrestatairePage">
    //     <Stack.Screen
    //       name="PrestatairePage"
    //       component={PrestatairePage}
    //       options={{ headerShown: false }}
    //     />

    //     <Stack.Screen
    //       name="AcceptRequest"
    //       component={AcceptRequest}
    //       options={{ headerShown: false }}
    //     />
    //     <Stack.Screen
    //       name="Maps"
    //       component={Maps}
    //       options={{ headerShown: false }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>

    <View style={styles.container}>
      {/* <Header /> */}
      {/* <Demande /> */}
      {/* <Depart /> */}
      {/* <Footer /> */}
      {/* <DemenageurNum /> */}
      {/* <HouseLevel /> */}
      {/* <HowMuchLevel /> */}
      {/* <HeaderUser /> */}
      {/* <PrestataireHeader /> */}
      {/* <PrestatairePage /> */}
      {/* <UserPage /> */}
      {/* <AcceptRequest /> */}
      {/* <Maps /> */}
      {/* <PageDeGarde /> */}
      <About1 />
    </View>
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
