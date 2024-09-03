// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   Image,
//   TouchableOpacity,
//   Pressable,
// } from "react-native";
// import React from "react";
// import Octicons from "@expo/vector-icons/Octicons";
// import EvilIcons from "@expo/vector-icons/EvilIcons";
// import PrestataireHeader from "./PrestataireHeader";
// import AntDesign from "@expo/vector-icons/AntDesign";
// import Feather from "@expo/vector-icons/Feather";

// export default function PrestatairePage() {
//   return (
//     <ScrollView showsHorizontalScrollIndicator={false}>
//       <View style={styles.container}>
//         <PrestataireHeader />
//         <View style={styles.details}>
//           <View style={styles.presentaion}>
//             <Text
//               style={{
//                 fontSize: 16,
//                 fontWeight: "bold",
//                 backgroundColor: "#524C42",
//                 color: "white",
//               }}
//             >
//               17
//             </Text>
//             <Text style={{ fontWeight: "bold" }}>
//               Présentation des déménagements réalisés
//             </Text>
//           </View>
//           <View style={styles.award}>
//             <Feather name="award" size={24} color="#383838" />
//             <Text>+10 ans d'experience </Text>
//           </View>
//           <View style={styles.tools}>
//             <Octicons name="tools" size={24} color="#383838" />

//             <View style={styles.alignText}>
//               <Text>
//                 Posséde du matériel de protection Outils de bricolage,
//               </Text>
//               <Text> Diable, Sangles...</Text>
//             </View>
//           </View>
//           <View style={styles.abilities}>
//             <View style={styles.abilities0}>
//               <View style={styles.abilites1}>
//                 <Text style={styles.text}>Respect des lieux</Text>
//                 <Text style={styles.text}>Disponibilités flexibles</Text>
//               </View>
//               <Text style={styles.text}>Ponctualité et fiabilité</Text>
//             </View>
//           </View>
//         </View>
//         {/* camionContainer  */}
//         <View style={styles.camionContainer}>
//           <Text style={{ fontWeight: "bold", fontSize: 16, marginLeft: 10 }}>
//             Camion
//           </Text>
//           <View style={styles.camionDetails}>
//             <Image style={styles.image} source={require("../assets/4.jpg")} />
//             <View style={styles.option}>
//               <Text style={{ fontWeight: "bold", fontSize: 12 }}>
//                 Grand fourgon
//               </Text>
//               <Text style={{ fontSize: 10 }}>Entre 16 et 20 m3</Text>
//             </View>
//           </View>
//           {/* requests  */}
//           <View style={styles.demandesContainer}>
//             <Text style={{ fontWeight: "bold" }}>Vos demandes</Text>
//             <View style={styles.demandes}>
//               <EvilIcons name="location" size={24} color="grey" />
//               <Text style={{ color: "grey" }}>Grand Tunis</Text>
//             </View>
//             <View style={styles.dateContainer}>
//               <AntDesign name="calendar" size={16} color="grey" />
//               <Text>Samedi 29 aout a 12 h </Text>
//             </View>
//           </View>
//           {/* demande 1*/}
//           <Pressable style={styles.accepteButton}>
//             <TouchableOpacity style={styles.accept}>
//               <Text style={{ color: "#0078FA", fontSize: 18 }}>
//                 Accepter la demande
//               </Text>
//             </TouchableOpacity>
//           </Pressable>
//           {/* <Pressable style={styles.plusButton}>
//             <TouchableOpacity style={styles.plus}>
//               <Text style={{ color: "#0078FA", fontSize: 18 }}>Voir Plus</Text>
//             </TouchableOpacity>
//           </Pressable> */}
//           {/* demande 2*/}
//           <View style={styles.demandesContainer}>
//             <View style={styles.demandes}>
//               <EvilIcons name="location" size={24} color="grey" />
//               <Text style={{ color: "grey" }}>Grand Tunis, Ouina</Text>
//             </View>
//             <View style={styles.dateContainer}>
//               <AntDesign name="calendar" size={16} color="grey" />
//               <Text>Dimanche 30 aout a 9 h </Text>
//             </View>
//           </View>
//           <Pressable style={styles.accepteButton}>
//             <TouchableOpacity style={styles.accept}>
//               <Text style={{ color: "#0078FA", fontSize: 18 }}>
//                 Accepter la demande
//               </Text>
//             </TouchableOpacity>
//           </Pressable>
//           {/* <Pressable style={styles.plusButton}>
//             <TouchableOpacity style={styles.plus}>
//               <Text style={{ color: "#0078FA", fontSize: 18 }}>Voir Plus</Text>
//             </TouchableOpacity>
//           </Pressable> */}
//           {/* demande 3*/}
//           <View style={styles.demandesContainer}>
//             <View style={styles.demandes}>
//               <EvilIcons name="location" size={24} color="grey" />
//               <Text style={{ color: "grey" }}>Grand Tunis, Al Ghazala</Text>
//             </View>
//             <View style={styles.dateContainer}>
//               <AntDesign name="calendar" size={16} color="grey" />
//               <Text>MArdi 01 septembre a 14 h </Text>
//             </View>
//           </View>
//           <Pressable style={styles.accepteButton}>
//             <TouchableOpacity style={styles.accept}>
//               <Text style={{ color: "#0078FA", fontSize: 18 }}>
//                 Accepter la demande
//               </Text>
//             </TouchableOpacity>
//           </Pressable>
//           <Pressable style={styles.plusButton}>
//             <TouchableOpacity style={styles.plus}>
//               <Text style={{ color: "#0078FA", fontSize: 18 }}>Voir Plus</Text>
//             </TouchableOpacity>
//           </Pressable>
//         </View>
//       </View>
//     </ScrollView>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "column",
//     alignContent: "center",
//     alignSelf: "center",
//     alignContent: "center",
//   },
//   presentaion: {
//     flexDirection: "row",

//     marginLeft: 10,
//     gap: 10,
//   },
//   details: {
//     width: 400,
//     height: 300,
//     backgroundColor: "#eee",
//     flexDirection: "column",
//     alignItems: "flex-start",
//     justifyContent: "flex-start",
//     alignSelf: "center",
//     padding: 30,
//     marginTop: 40,

//     gap: 10,
//   },
//   award: {
//     flexDirection: "row",
//     marginTop: 20,
//     marginLeft: 10,
//     gap: 10,
//   },
//   tools: {
//     flexDirection: "row",
//     marginTop: 20,
//     marginLeft: 10,
//     gap: 10,
//   },
//   abilities: {
//     flexDirection: "row",
//     fontWeight: "bold",
//     alignSelf: "flex-start",
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 20,
//   },
//   text: {
//     fontWeight: "bold",
//     color: "#383838",
//     alignSelf: "center",
//     alignContent: "center",
//   },
//   image: {
//     width: 100,
//     height: 100,
//   },
//   camionContainer: {
//     marginTop: 30,
//     borderRadius: 2,
//     marginLeft: 20,
//   },
//   camionDetails: {
//     flexDirection: "row",
//     alignSelf: "flex-start",
//     justifyContent: "center",
//     alignItems: "center",
//     gap: 50,
//     borderRadius: 10,
//     borderWidth: 4,
//     borderColor: "#eee",
//     height: 150,
//     width: 300,
//     marginTop: 30,
//     marginLeft: 40,
//   },
//   option: {
//     flexDirection: "column",
//     gap: 10,
//     alignItems: "center",
//   },
//   abilites1: {
//     flexDirection: "row",
//     gap: 20,
//     alignItems: "center",
//     justifyContent: "Flex-start",
//     marginLeft: 20,
//   },
//   abilities0: {
//     flexDirection: "column",
//     gap: 10,
//   },
//   alignText: {
//     flexDirection: "column",
//     alignSelf: "center",
//     justifyContent: "center",
//   },
//   demandesContainer: {
//     flexDirection: "column",
//     gap: 20,
//     marginTop: 20,
//     marginLeft: 10,
//   },
//   demandes: {
//     flexDirection: "row",
//     gap: 10,
//   },
//   dateContainer: {
//     flexDirection: "row",
//     gap: 10,
//   },
//   plusButton: {
//     flexDirection: "column",
//     paddingHorizontal: 5,
//     width: 350,
//     paddingVertical: 15,
//     borderRadius: 5,
//     borderWidth: 4,
//     borderColor: "#eee",
//     marginTop: 20,
//   },
//   plus: {
//     alignSelf: "center",
//     alignContent: "center",
//     fontWeight: "bold",
//   },
//   accepteButton: {
//     fontWeight: "bold",
//   },
//   accepteButton: {
//     flexDirection: "column",
//     paddingHorizontal: 5,
//     width: 350,
//     paddingVertical: 15,
//     backgroundColor: "#D7E9FD",
//     marginTop: 20,
//   },
//   accept: {
//     alignItems: "center",
//   },
// });

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import Octicons from "@expo/vector-icons/Octicons";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import PrestataireHeader from "./PrestataireHeader";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import axios from "axios";
import localH from "../service/DriversService";
import { useNavigation } from "@react-navigation/native";
export default function PrestatairePage() {
  const [requests, setRequests] = useState([]);
  const [driverDis, setDriverDis] = useState([]);
  const [ref, setRef] = useState({});
  const navigation = useNavigation();

  const handleAcceptReq = (id) => {
    axios
      .put(`http://192.168.104.19:3000/request/update/${id}`)
      .then((res) => {
        const updated = res.data;
        console.log("updaaaaaaaaaate", updated);
        setRef(updated);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handlelocation = (lat, lng) => {
    console.log("laaaaaaaaaaaaaaat", lat);
    console.log("lnnnnnnnnnngggggggggggg", lng);

    navigation.navigate("Itenerarymap", { lat, lng });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);

    const day = date.getUTCDate();
    const month = date.toLocaleString("fr-FR", { month: "long" });
    const year = date.getUTCFullYear();
    const hours = date.getUTCHours().toString().padStart(2, "0");
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");

    // Format the date as "30 septembre 2024 à 04:20"
    const formattedDate = `${day} ${month} ${year} à ${hours}:${minutes}`;
    return formattedDate;
  };

  useEffect(() => {
    axios
      .get(`http://192.168.104.19:3000/request/getOne/5`) // driverId hard coded we need the log in
      .then((res) => {
        const reqst = res.data;

        setRequests(reqst);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [ref]);

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <PrestataireHeader />
        <View style={styles.details}>
          <View style={styles.presentaion}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                backgroundColor: "#524C42",
                color: "white",
              }}
            >
              17
            </Text>
            <Text style={{ fontWeight: "bold" }}>
              Présentation des déménagements réalisés
            </Text>
          </View>
          <View style={styles.award}>
            <Feather name="award" size={24} color="#383838" />
            <Text>+10 ans d'experience </Text>
          </View>
          <View style={styles.tools}>
            <Octicons name="tools" size={24} color="#383838" />

            <View style={styles.alignText}>
              <Text>
                Posséde du matériel de protection Outils de bricolage,
              </Text>
              <Text> Diable, Sangles...</Text>
            </View>
          </View>
          <View style={styles.abilities}>
            <View style={styles.abilities0}>
              <View style={styles.abilites1}>
                <Text style={styles.text}>Respect des lieux</Text>
                <Text style={styles.text}>Disponibilités flexibles</Text>
              </View>
              <Text style={styles.text}>Ponctualité et fiabilité</Text>
            </View>
          </View>
        </View>
        {/* camionContainer  */}
        <View style={styles.camionContainer}>
          <Text style={{ fontWeight: "bold", fontSize: 16, marginLeft: 10 }}>
            Camion
          </Text>
          <View style={styles.camionDetails}>
            <Image style={styles.image} source={require("../assets/4.jpg")} />
            <View style={styles.option}>
              <Text style={{ fontWeight: "bold", fontSize: 12 }}>
                Grand fourgon
              </Text>
              <Text style={{ fontSize: 10 }}>Entre 16 et 20 m3</Text>
            </View>
          </View>
          <Text style={{ fontWeight: "bold" }}>Vos demandes</Text>
          {/* requests  */}
          {requests.map((mapReq, index) => (
            <View key={index}>
              <View style={styles.demandesContainer}>
                <View style={styles.demandes}>
                  <EvilIcons name="location" size={24} color="grey" />
                  <Text style={{ color: "grey" }}>{mapReq.adress}</Text>
                </View>
                <View style={styles.dateContainer}>
                  <AntDesign name="calendar" size={16} color="grey" />
                  <Text>{formatDate(mapReq.date)}</Text>
                </View>
              </View>

              {/* demande 2*/}

              {mapReq.status === "pending" ? (
                <Pressable style={styles.accepteButton}>
                  <TouchableOpacity
                    style={styles.accept}
                    onPress={() => handleAcceptReq(mapReq.id)}
                  >
                    <Text style={{ color: "#0078FA", fontSize: 18 }}>
                      Accepter la demande
                    </Text>
                  </TouchableOpacity>
                </Pressable>
              ) : (
                <Pressable style={styles.accepteButton}>
                  <TouchableOpacity
                    style={styles.accept}
                    onPress={() =>
                      handlelocation(mapReq.latitude, mapReq.longitude)
                    }
                  >
                    <Text style={{ color: "#0078FA", fontSize: 18 }}>
                      Voir l'itineraire
                    </Text>
                  </TouchableOpacity>
                </Pressable>
              )}
            </View>
          ))}

          {/* demande 3*/}

          <Pressable style={styles.plusButton}>
            <TouchableOpacity style={styles.plus}>
              <Text style={{ color: "#0078FA", fontSize: 18 }}>Voir Plus</Text>
            </TouchableOpacity>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignContent: "center",
    alignSelf: "center",
    alignContent: "center",
  },
  presentaion: {
    flexDirection: "row",

    marginLeft: 10,
    gap: 10,
  },
  details: {
    width: 400,
    height: 300,
    backgroundColor: "#eee",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    alignSelf: "center",
    padding: 30,
    marginTop: 40,

    gap: 10,
  },
  award: {
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 10,
    gap: 10,
  },
  tools: {
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 10,
    gap: 10,
  },
  abilities: {
    flexDirection: "row",
    fontWeight: "bold",
    alignSelf: "flex-start",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  text: {
    fontWeight: "bold",
    color: "#383838",
    alignSelf: "center",
    alignContent: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
  camionContainer: {
    marginTop: 30,
    borderRadius: 2,
    marginLeft: 20,
  },
  camionDetails: {
    flexDirection: "row",
    alignSelf: "flex-start",
    justifyContent: "center",
    alignItems: "center",
    gap: 50,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: "#eee",
    height: 150,
    width: 300,
    marginTop: 30,
    marginLeft: 40,
  },
  option: {
    flexDirection: "column",
    gap: 10,
    alignItems: "center",
  },
  abilites1: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    justifyContent: "Flex-start",
    marginLeft: 20,
  },
  abilities0: {
    flexDirection: "column",
    gap: 10,
  },
  alignText: {
    flexDirection: "column",
    alignSelf: "center",
    justifyContent: "center",
  },
  demandesContainer: {
    flexDirection: "column",
    gap: 20,
    marginTop: 20,
    marginLeft: 10,
  },
  demandes: {
    flexDirection: "row",
    gap: 10,
  },
  dateContainer: {
    flexDirection: "row",
    gap: 10,
  },
  plusButton: {
    flexDirection: "column",
    paddingHorizontal: 5,
    width: 350,
    paddingVertical: 15,
    borderRadius: 5,
    borderWidth: 4,
    borderColor: "#eee",
    marginTop: 20,
  },
  plus: {
    alignSelf: "center",
    alignContent: "center",
    fontWeight: "bold",
  },
  accepteButton: {
    fontWeight: "bold",
  },
  accepteButton: {
    flexDirection: "column",
    paddingHorizontal: 5,
    width: 350,
    paddingVertical: 15,
    backgroundColor: "#D7E9FD",
    marginTop: 20,
  },
  accept: {
    alignItems: "center",
  },
});
