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
// import UserPage from "./components/userPage";
export default function App() {
  return (
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
      <PrestatairePage />
      {/* <UserPage /> */}
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
