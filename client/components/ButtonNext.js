import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function ButtonNext() {
  const [activeTab, setActiveTab] = useState("Suivante");
  return (
    <View
      style={{
        flexDirection: "row",
        alignSelf: "center",
        gap: 90,
      }}
    >
      <HeaderButton
        text="Précédente"
        btnColor="#0078FA"
        textColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Suivante"
        btnColor="white"
        textColor="#0078FA"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}

const HeaderButton = (props) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.activeTab === props.text ? "#0078FA" : "white",
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
        marginTop: 90,
      }}
      onPress={() => props.setActiveTab(props.text)}
    >
      <Text
        style={{
          color: props.activeTab === props.text ? "white" : "#0078FA",
          fontSize: 15,
          fontWeight: 900,
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};
