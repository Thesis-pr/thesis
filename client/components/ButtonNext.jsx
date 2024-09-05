// import { View, Text, TouchableOpacity } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import React from "react";

// export default function ButtonNext({
//   targetScreen,
//   buttonText,
//   buttonColor,
//   textColor,
// }) {
//   return (
//     <View
//       style={{
//         flexDirection: "row",
//         alignSelf: "center",
//         gap: 60,
//       }}
//     >
//       <HeaderButton
//         text={buttonText}
//         btnColor={buttonColor}
//         textColor={textColor}
//         targetScreen={targetScreen}
//       />
//       {/* <HeaderButton
//         text="Suivant"
//         btnColor="white"
//         textColor="#0078FA"
//         activeTab={activeTab}
//         setActiveTab={setActiveTab}
//       /> */}
//     </View>
//   );
// }

// const HeaderButton = (props) => {
//   const navigation = useNavigation();
//   const handlePress = () => {
//     navigation.navigate(props.targetScreen);

//     // props.setActiveTab(props.text);
//   };
//   return (
//     <TouchableOpacity
//       style={{
//         backgroundColor: props.btnColor,
//         paddingVertical: 6,
//         paddingHorizontal: 16,
//         borderRadius: 30,
//         marginTop: 90,
//       }}
//       onPress={handlePress}
//     >
//       <Text
//         style={{
//           color: props.textColor,
//           fontSize: 15,
//           fontWeight: 900,
//         }}
//       >
//         {props.text}
//       </Text>
//     </TouchableOpacity>
//   );
// };


// import { View, Text, TouchableOpacity } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import React from "react";

// export default function ButtonNext({
//   targetScreen,
//   buttonText,
//   buttonColor,
//   textColor,
// }) {
//   return (
//     <View
//       style={{
//         flexDirection: "row",
//         alignSelf: "center",
//         gap: 60,
//       }}
//     >
//       <HeaderButton
//         text={buttonText}
//         btnColor={buttonColor}
//         textColor={textColor}
//         targetScreen={targetScreen}
//       />
//     </View>
//   );
// }

// const HeaderButton = (props) => {
//   const navigation = useNavigation();

//   const handlePress = () => {
//     if (props.targetScreen) {
//       navigation.navigate(props.targetScreen);
//     }
//   };

//   return (
//     <TouchableOpacity
//       style={{
//         backgroundColor: props.btnColor,
//         paddingVertical: 6,
//         paddingHorizontal: 16,
//         borderRadius: 30,
//         marginTop: 90,
//       }}
//       onPress={handlePress}
//     >
//       <Text
//         style={{
//           color: props.textColor,
//           fontSize: 15,
//           fontWeight: "900",
//         }}
//       >
//         {props.text}
//       </Text>
//     </TouchableOpacity>
//   );
// };
