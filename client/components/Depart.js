// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   FlatList,
//   Image,
// } from "react-native";
// import React, { useState } from "react";
// import ButtonNext from "./ButtonNext";
// import Header from "./Header";
// import Footer from "./Footer";

// export default function Depart() {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [homeCategory, setHomeCategory] = useState("");

//   const handleCheckboxChange = (option) => {
//     setSelectedOption(option === selectedOption ? null : option);
//     let property;
//     if (option === "Maison") {
//       property = "maison";
//     } else {
//       property = "apartment";
//     }
//     setHomeCategory(property);
//     console.log("hi", property);
//   };

//   const houseImages = [
//     { source: require("../assets/house.jpg"), option: "Maison" },
//     { source: require("../assets/8.webp"), option: "Appartement" },
//   ];

//   const renderItem = ({ item }) => (
//     <View style={styles.imageContainer}>
//       <TouchableOpacity onPress={() => handleCheckboxChange(item.option)}>
//         <Image source={item.source} style={styles.image} />
//         <Text style={styles.label}>{item.option}</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   const getTargetScreen = () => {
//     return selectedOption === "Maison" ? "HowMuchLevel" : "HouseLevel";
//   };

//   return (
//     <View style={styles.container}>
//       <Header />
//       <View style={styles.containerCheckBox}>
//         <Text style={styles.title}>Quelle est votre lieu de depart ?</Text>
//         <View style={styles.checkboxContainer}>
//           <FlatList
//             data={houseImages}
//             renderItem={renderItem}
//             keyExtractor={(item) => item.option}
//             numColumns={1}
//             contentContainerStyle={styles.flatListContainer}
//           />
//         </View>
//       </View>
//       <View style={styles.fixButton}>
//         <ButtonNext
//           style={styles.button}
//           targetScreen={getTargetScreen()}
//           params={{ property_type: homeCategory }}
//           buttonColor="#0078FA"
//           buttonText="Suivant"
//           textColor="white"
//         />
//       </View>
//       <Footer />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",

//     gap: 30,
//     marginTop: 10,
//   },
//   checkboxContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 20,
//     marginTop: 70,
//   },
//   checkboxWrapper: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   checkbox: {
//     width: 20,
//     height: 20,
//     borderRadius: 10,
//     borderWidth: 2,
//     borderColor: "#0078FA",
//     backgroundColor: "white",
//     marginRight: 8,
//   },
//   checked: {
//     backgroundColor: "#0078FA",
//   },
//   label: {
//     fontSize: 16,
//     marginTop: 5,
//     textAlign: "center",
//   },
//   title: {
//     fontWeight: "bold",
//     fontSize: 18,
//     marginBottom: 40,
//     marginTop: 50,
//   },
//   containerCheckBox: {
//     marginBottom: 10,
//     marginTop: 10,
//   },
//   fixButton: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     width: "100%",

//     marginLeft: 470,
//   },
//   button: {
//     marginTop: 10,
//   },
//   flatListContainer: {
//     flexGrow: 1,
//     flexDirection: "row",
//     justifyContent: "center",
//   },
//   imageContainer: {
//     alignItems: "center",
//     marginHorizontal: 30,
//     marginVertical: 10,
//   },
//   image: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//   },
// });

/** ? maker */

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";
import ButtonNext from "./ButtonNext";
import Header from "./Header";
import Footer from "./Footer";

export default function Depart() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [homeCategory, setHomeCategory] = useState("");

  const handleCheckboxChange = (option) => {
    setSelectedOption(option === selectedOption ? null : option);
    let property;
    if (option === "Maison") {
      property = "maison";
    } else {
      property = "apartment";
    }
    setHomeCategory(property);
    console.log("hi", property);
  };

  const houseImages = [
    { source: require("../assets/house.jpg"), option: "Maison" },
    { source: require("../assets/8.webp"), option: "Appartement" },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <TouchableOpacity onPress={() => handleCheckboxChange(item.option)}>
        <Image source={item.source} style={styles.image} />
        {selectedOption === item.option && (
          <View style={styles.checkmarkContainer}>
            <Text style={styles.checkmark}>✔</Text>
          </View>
        )}
        <Text style={styles.label}>{item.option}</Text>
      </TouchableOpacity>
    </View>
  );

  const getTargetScreen = () => {
    return selectedOption === "Maison" ? "HowMuchLevel" : "HouseLevel";
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.containerCheckBox}>
        <Text style={styles.title}>Quelle est votre lieu de depart ?</Text>
        <View style={styles.checkboxContainer}>
          <FlatList
            data={houseImages}
            renderItem={renderItem}
            keyExtractor={(item) => item.option}
            numColumns={1}
            contentContainerStyle={styles.flatListContainer}
          />
        </View>
      </View>
      <View style={styles.fixButton}>
        <ButtonNext
          style={styles.button}
          targetScreen={getTargetScreen()}
          params={{ property_type: homeCategory }}
          buttonColor="#0078FA"
          buttonText="Suivant"
          textColor="white"
        />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
    marginTop: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 70,
  },
  checkboxWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#0078FA",
    backgroundColor: "white",
    marginRight: 8,
  },
  checked: {
    backgroundColor: "#0078FA",
  },
  label: {
    fontSize: 16,
    marginTop: 5,
    textAlign: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 40,
    marginTop: 50,
  },
  containerCheckBox: {
    marginBottom: 10,
    marginTop: 10,
  },
  fixButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginLeft: 470,
  },
  button: {
    marginTop: 10,
  },
  flatListContainer: {
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  imageContainer: {
    alignItems: "center",
    marginHorizontal: 30,
    marginVertical: 10,
    position: "relative",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  checkmarkContainer: {
    position: "absolute",
    top: -10,
    right: -10,

    borderRadius: 10,
    padding: 5,
  },
  checkmark: {
    color: "#0078FA",
    fontSize: 40,
    fontWeight: "bold",
  },
});
