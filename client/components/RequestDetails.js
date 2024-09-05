// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
//   Image,
//   Modal,
// } from "react-native";
// import PrestataireHeader from "./PrestataireHeader";
// import AntDesign from "@expo/vector-icons/AntDesign";
// import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
// import Ionicons from "@expo/vector-icons/Ionicons";
// import MaterialIcons from "@expo/vector-icons/MaterialIcons";
// import { FontAwesome } from "@expo/vector-icons";
// import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
// import axios from "axios";

// export default function RequestDetails({ route }) {
//   const [isAccepted, setIsAccepted] = useState(false);
//   const [adressLoc, setAdressLoc] = useState("");

//   console.log("driver Detaiiiiiiiiiiiiiils", route.params);
//   const request = route.params;

//   const handleAccept = () => {
//     setIsAccepted(true);
//     axios
//       .post("http://192.168.151.34:3000/request/add", route.params)
//       .then((res) => {
//         const reqst = res.data;
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   };

//   return (
//     <View>
//       <View style={styles.containerHeader}>
//         <View style={styles.backgroundImageHeader}>
//           <Image
//             style={styles.imageHeader}
//             source={require("../assets/7.png")}
//           />
//         </View>
//         <View>
//           <View style={styles.detailsHeader}>
//             <Text style={{ fontWeight: "bold" }}>Ahmed Ghizouini</Text>
//             <AntDesign name="downcircleo" size={24} color="black" />
//             <Text style={{ fontWeight: "bold" }}>90DT/h</Text>
//           </View>
//           <Text>⭐ 4.7 </Text>
//         </View>
//       </View>
//       <ScrollView style={styles.container}>
//         <View style={styles.demandeDetails}>
//           <View style={styles.innerContainer}>
//             <Text style={styles.heading}>Détails des demandes</Text>
//             <View style={styles.date}>
//               <AntDesign name="calendar" size={16} color="grey" />
//               <Text style={styles.detailText}>
//                 {request.savedDate}-{request.savedHours}
//               </Text>
//             </View>
//             <View style={styles.duration}>
//               <FontAwesome5 name="hourglass" size={14} color="grey" />
//               <Text style={styles.detailText}>
//                 {request.HoursNumber} heures
//               </Text>
//             </View>
//             <View style={styles.location}>
//               <Ionicons name="location-outline" size={16} color="grey" />
//               <Text style={styles.detailText}>{request.adress}</Text>
//             </View>
//             <View style={styles.helper}>
//               <MaterialIcons name="person-add-alt" size={16} color="grey" />
//               {request.helper <= 1 ? (
//                 <Text style={styles.detailText}>{request.helper} helper</Text>
//               ) : (
//                 <Text style={styles.detailText}>{request.helper} helpers</Text>
//               )}
//             </View>
//             <View style={styles.house}>
//               <FontAwesome name="home" size={16} color="grey" />
//               <Text style={styles.detailText}>{request.property_type}</Text>
//             </View>
//             <View style={styles.etage}>
//               <MaterialCommunityIcons
//                 name="floor-plan"
//                 size={16}
//                 color="grey"
//               />
//               {request.level <= 1 ? (
//                 <Text style={styles.detailText}>{request.level} etage</Text>
//               ) : (
//                 <Text style={styles.detailText}>{request.level} etages</Text>
//               )}
//             </View>
//             <View style={styles.mobile}>
//               <FontAwesome name="mobile-phone" size={20} color="grey" />
//               <Text style={styles.detailText}>{request.telephone}</Text>
//             </View>
//           </View>
//         </View>

//         {!isAccepted ? (
//           <>
//             <TouchableOpacity
//               style={styles.accepteButton}
//               onPress={handleAccept}
//             >
//               <Text style={styles.buttonText}>Confirmer</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.declinerButton}>
//               <Text style={styles.buttonText}>Annuler</Text>
//             </TouchableOpacity>
//           </>
//         ) : (
//           <>
//             <TouchableOpacity style={styles.accepteButton}>
//               <Text style={styles.buttonText}>Chat</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.declinerButton}>
//               <Text style={styles.buttonText}>Itinéraire</Text>
//             </TouchableOpacity>
//           </>
//         )}
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   demandeDetails: {
//     flexDirection: "column",
//     alignItems: "flex-start",
//     justifyContent: "center",
//     alignSelf: "center",
//     marginTop: 40,
//     marginLeft: 3,
//     gap: 15,
//     paddingHorizontal: 5,
//     width: 350,
//     borderRadius: 5,
//     borderWidth: 4,
//     borderColor: "#eee",
//   },
//   date: {
//     flexDirection: "row",
//     marginTop: 20,
//     gap: 10,
//     justifyContent: "flex-start",
//     alignItems: "center",
//   },
//   duration: {
//     flexDirection: "row",
//     alignSelf: "flex-start",
//     gap: 10,
//   },
//   location: {
//     flexDirection: "row",
//     alignSelf: "flex-start",
//     gap: 10,
//   },
//   helper: {
//     flexDirection: "row",
//     alignSelf: "flex-start",
//     gap: 10,
//   },
//   house: {
//     flexDirection: "row",
//     gap: 10,
//   },
//   etage: {
//     flexDirection: "row",
//     gap: 10,
//   },
//   innerContainer: {
//     gap: 10,
//     marginLeft: 10,
//   },
//   mobile: {
//     flexDirection: "row",
//     gap: 10,
//   },
//   heading: {
//     fontWeight: "bold",
//     fontSize: 20,
//   },
//   detailText: {
//     fontWeight: "bold",
//     fontSize: 16,
//     color: "grey",
//   },
//   accepteButton: {
//     flexDirection: "column",
//     paddingHorizontal: 5,
//     width: 350,
//     paddingVertical: 15,
//     backgroundColor: "#D7E9FD",
//     marginTop: 40,
//     alignItems: "center",
//   },
//   declinerButton: {
//     borderRadius: 5,
//     borderWidth: 4,
//     borderColor: "#D7E9FD",
//     paddingVertical: 15,
//     paddingHorizontal: 5,
//     width: 350,
//     marginTop: 40,
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "#0078FA",
//     fontSize: 18,
//   },
//   containerHeader: {
//     flexDirection: "row",
//     alignSelf: "flex-start",
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 50,
//     marginHorizontal: 20,
//     gap: 10,
//   },
//   backgroundImageHeader: {
//     paddingHorizontal: 7,
//     paddingVertical: 7,
//     backgroundColor: "#F1D3CE",
//     borderRadius: 60,
//   },
//   imageHeader: {
//     width: 80,
//     height: 80,
//     borderRadius: 50,
//     alignSelf: "center",
//   },
//   detailsHeader: {
//     flexDirection: "row",
//     gap: 20,
//   },
// });

/**
 * ! Model
 */
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Modal,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { FontAwesome } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import axios from "axios";
import localH from "../service/DriversService";

export default function RequestDetails({ route }) {
  const [isAccepted, setIsAccepted] = useState(false);
  const [acceptRequest, setAcceptRequest] = useState(false);

  const request = route.params;

  const handleAccept = () => {
    setIsAccepted(true);
    axios
      .post(`http://192.168.151.34:3000/request/add`, route.params)
      .then((res) => {
        console.log(res.data, "this the post requests");
      })
      .catch((err) => {
        console.error(err);
      });
    setAcceptRequest(true);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.containerHeader}>
        <View style={styles.backgroundImageHeader}>
          <Image
            style={styles.imageHeader}
            source={require("../assets/7.png")}
          />
        </View>
        <View>
          <View style={styles.detailsHeader}>
            <Text style={{ fontWeight: "bold" }}>Ahmed Ghizouini</Text>
            <AntDesign name="downcircleo" size={24} color="black" />
            <Text style={{ fontWeight: "bold" }}>90DT/h</Text>
          </View>
          <Text>⭐ 4.7 </Text>
        </View>
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.demandeDetails}>
          {/* Details */}
          <View style={styles.innerContainer}>
            <Text style={styles.heading}>Détails des demandes</Text>
            <View style={styles.date}>
              <AntDesign name="calendar" size={16} color="grey" />
              <Text style={styles.detailText}>
                {request.savedDate}-{request.savedHours}
              </Text>
            </View>
            <View style={styles.duration}>
              <FontAwesome5 name="hourglass" size={14} color="grey" />
              <Text style={styles.detailText}>{request.duration} heures</Text>
            </View>
            <View style={styles.location}>
              <Ionicons name="location-outline" size={16} color="grey" />
              <Text style={styles.detailText}>{request.adress}</Text>
            </View>
            <View style={styles.helper}>
              <MaterialIcons name="person-add-alt" size={16} color="grey" />
              {request.helper <= 1 ? (
                <Text style={styles.detailText}>
                  {request.helper} déménageur
                </Text>
              ) : (
                <Text style={styles.detailText}>
                  {request.helper} déménageurs
                </Text>
              )}
            </View>
            <View style={styles.house}>
              <FontAwesome name="home" size={16} color="grey" />
              <Text style={styles.detailText}>{request.property_type}</Text>
            </View>
            <View style={styles.etage}>
              <MaterialCommunityIcons
                name="floor-plan"
                size={16}
                color="grey"
              />
              {request.level <= 1 ? (
                <Text style={styles.detailText}>{request.floor_number}</Text>
              ) : (
                <Text style={styles.detailText}>{request.floor_number}</Text>
              )}
            </View>
            <View style={styles.mobile}>
              <FontAwesome name="mobile-phone" size={20} color="grey" />
              <Text style={styles.detailText}>{request.telephone}</Text>
            </View>
          </View>
        </View>

        {!isAccepted ? (
          <>
            <TouchableOpacity
              style={styles.accepteButton}
              onPress={handleAccept}
            >
              <Text style={styles.buttonText}>Confirmer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.declinerButton}>
              <Text style={styles.buttonText}>Annuler</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity style={styles.accepteButton}>
              <Text style={styles.buttonText}>Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.declinerButton}>
              <Text style={styles.buttonText}>Itinéraire</Text>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>

      {/* Modal for Accept Request */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={acceptRequest}
        onRequestClose={() => setAcceptRequest(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Votre demande a été envoyée avec succès
            </Text>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setAcceptRequest(false)}
            >
              <Text style={styles.textStyle}>Fermer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  demandeDetails: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 40,
    marginLeft: 3,
    gap: 15,
    paddingHorizontal: 5,
    width: 350,
    borderRadius: 5,
    borderWidth: 4,
    borderColor: "#eee",
  },
  date: {
    flexDirection: "row",
    marginTop: 20,
    gap: 10,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  duration: {
    flexDirection: "row",
    alignSelf: "flex-start",
    gap: 10,
  },
  location: {
    flexDirection: "row",
    alignSelf: "flex-start",
    gap: 10,
  },
  helper: {
    flexDirection: "row",
    alignSelf: "flex-start",
    gap: 10,
  },
  house: {
    flexDirection: "row",
    gap: 10,
  },
  etage: {
    flexDirection: "row",
    gap: 10,
  },
  innerContainer: {
    gap: 10,
    marginLeft: 10,
  },
  mobile: {
    flexDirection: "row",
    gap: 10,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 20,
  },
  detailText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "grey",
  },
  accepteButton: {
    flexDirection: "column",
    paddingHorizontal: 5,
    width: 350,
    paddingVertical: 15,
    backgroundColor: "#D7E9FD",
    marginTop: 40,
    alignItems: "center",
  },
  declinerButton: {
    borderRadius: 5,
    borderWidth: 4,
    borderColor: "#D7E9FD",
    paddingVertical: 15,
    paddingHorizontal: 5,
    width: 350,
    marginTop: 40,
    alignItems: "center",
  },
  buttonText: {
    color: "#0078FA",
    fontSize: 18,
  },
  containerHeader: {
    flexDirection: "row",
    alignSelf: "flex-start",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    marginHorizontal: 20,
    gap: 10,
  },
  backgroundImageHeader: {
    paddingHorizontal: 7,
    paddingVertical: 7,
    backgroundColor: "#F1D3CE",
    borderRadius: 60,
  },
  imageHeader: {
    width: 80,
    height: 80,
    borderRadius: 50,
    alignSelf: "center",
  },
  detailsHeader: {
    flexDirection: "row",
    gap: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {
    backgroundColor: "#0078FA",
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    marginTop: 15,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
