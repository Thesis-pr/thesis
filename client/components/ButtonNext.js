import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

export default function ButtonNext({
  targetScreen,
  buttonText,
  buttonColor,
  textColor,
  params = {},
}) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignSelf: "center",
        gap: 60,
      }}
    >
      <HeaderButton
        text={buttonText}
        btnColor={buttonColor}
        textColor={textColor}
        targetScreen={targetScreen}
        params={params}
      />

    </View>
  );
}

const HeaderButton = (props) => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate(props.targetScreen, props.params);
  };
  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.btnColor,
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
        marginTop: 90,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          color: props.textColor,
          fontSize: 15,
          fontWeight: 900,
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};
