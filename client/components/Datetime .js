// import React, { useState } from "react";
// import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   StatusBar,
// } from "react-native";
// import DateTimePicker from "@react-native-community/datetimepicker";
// import Header from "./Header";
// import Footer from "./Footer";
// import ButtonNext from "./ButtonNext";

// const Datetime = ({ route }) => {
//   const [date, setDate] = useState(new Date());
//   const [show, setShow] = useState(false);
//   const [mode, setMode] = useState("date");
//   const [savedDate, setSavedDate] = useState({});
//   const [savedHours, setSavedHours] = useState({});
//   const { DateEnter, hourEnter } = route?.params ?? {};

//   const SavedHoursDate = { ...savedDate, ...savedHours };
//   const onChange = (e, selectedDate, dateSav, houreSav) => {
//     let obj = route?.params;
//     obj.DateEnter = { dateSav, houreSav };
//     setDate(selectedDate || date);
//     setShow(false);
//     setSavedDate(obj);
//     setSavedHours(obj);
//   };
//   console.log("date", route?.params);
//   const showMode = (modeToShow) => {
//     setShow(true);
//     setMode(modeToShow);
//   };

//   return (
//     <SafeAreaProvider>
//       <SafeAreaView style={styles.container}>
//         <View>
//           <Header />
//         </View>
//         <View style={styles.content}>
//           <View style={styles.buttonContainer}>
//             <TouchableOpacity
//               onPress={() => showMode("date")}
//               style={styles.button}
//             >
//               <Text style={styles.buttonText}>Choisir une date</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               onPress={() => showMode("time")}
//               style={styles.button}
//             >
//               <Text style={styles.buttonText}>Choisir une heure</Text>
//             </TouchableOpacity>
//           </View>
//           {show && (
//             <DateTimePicker
//               value={date}
//               mode={mode}
//               is24Hour={true}
//               onChange={onChange}
//             />
//           )}
//           <Text style={styles.dateText}>{date.toLocaleString()}</Text>
//           <View style={styles.fixButton}>
//             <ButtonNext
//               style={styles.button}
//               targetScreen={"Telephone"}
//               buttonColor="white"
//               buttonText="Précédent"
//               textColor="#0078FA"
//             />
//             <ButtonNext
//               style={styles.button}
//               targetScreen={"ExpoMaps"}
//               params={SavedHoursDate}
//               buttonColor="#0078FA"
//               buttonText="Suivant"
//               textColor="white"
//             />
//           </View>
//         </View>
//         <View>
//           <Footer />
//         </View>
//         <StatusBar style="auto" />
//       </SafeAreaView>
//     </SafeAreaProvider>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },

//   content: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     paddingHorizontal: 16,
//   },
//   buttonContainer: {
//     marginBottom: 20,
//     backgroundColor: "#0078FF",
//   },
//   buttonText: {
//     padding: 16,
//     borderRadius: 8,
//     marginBottom: 10,
//     width: 250,
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   dateText: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginTop: 20,
//     marginBottom: 80,
//   },

//   fixButton: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     width: "100%",
//     paddingHorizontal: 60,
//     marginTop: 20,
//   },
//   button: {
//     marginTop: 20,
//   },
// });

// export default Datetime;

import React, { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Header from "./Header";
import Footer from "./Footer";
import ButtonNext from "./ButtonNext";

const Datetime = ({ route }) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("date");

  let obj = route?.params || {};
  const { savedDate, savedHours } = obj;

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);

    if (mode === "date") {
      obj.savedDate = currentDate.toISOString().split("T")[0];
    } else if (mode === "time") {
      obj.savedHours = currentDate.toISOString().split("T")[1];
    }

    if (obj.savedDate && obj.savedHours) {
      const mergedDate = new Date(`${obj.savedDate}T${obj.savedHours}`);
      obj.date = mergedDate.toISOString();
    }


 


    route.params = obj;
    delete data.savedDate;
    delete data.savedHours;
    console.log("Updated params:", route.params);
  };

  const showMode = (modeToShow) => {
    setShow(true);
    setMode(modeToShow);
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
          <Header />
        </View>
        <View style={styles.content}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => showMode("date")}
              style={styles.button}
            >
              <View style={styles.row}>
                <Image
                  style={styles.image}
                  source={require("../assets/calendar.jpg")}
                />
                <Text style={styles.buttonText}>Choisir une date</Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.dateText}>
              {savedDate
                ? new Date(savedDate).toLocaleDateString()
                : "Aucune date choisie"}
            </Text>

            <TouchableOpacity
              onPress={() => showMode("time")}
              style={styles.button}
            >
              <View style={styles.row}>
                <Image
                  style={styles.image}
                  source={require("../assets/horlogue.png")}
                />
                <Text style={styles.buttonText}>Choisir une heure</Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.dateText}>
              {savedHours ? savedHours : "Aucune heure choisie"}
            </Text>
          </View>
          {show && (
            <DateTimePicker
              value={date}
              mode={mode}
              is24Hour={true}
              onChange={onChange}
            />
          )}
          <View style={styles.fixButton}>
            <ButtonNext
              style={styles.button}
              targetScreen={"Telephone"}
              buttonColor="white"
              buttonText="Précédent"
              textColor="#0078FA"
            />
            <ButtonNext
              style={styles.button}
              targetScreen={"Duration"}
              params={route.params}
              buttonColor="#0078FA"
              buttonText="Suivant"
              textColor="white"
            />
          </View>
        </View>
        <View>
          <Footer />
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0078FF",
    marginLeft: 10,
  },
  button: {
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  dateText: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 20,
    textAlign: "center",
    backgroundColor: "#D7E9FD",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
  },
  fixButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 60,
    marginTop: 30,
  },
  image: {
    width: 60,
    height: 60,
  },
});

export default Datetime;
