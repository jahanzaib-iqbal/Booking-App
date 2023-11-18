import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: "#35B5AE",
        height: 65,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 2,
          borderColor: "white",
          borderRadius: 25,
          paddingHorizontal: 8,
          paddingVertical: 5,
        }}
      >
        <Ionicons name="bed-outline" size={24} color="white" />
        <Text
          style={{
            color: "white",
            fontSize: 15,
            fontWeight: "bold",
            marginLeft: 4,
          }}
        >
          Hotels
        </Text>
      </Pressable>

      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons name="bus-multiple" size={24} color="white" />
        <Text
          style={{
            color: "white",
            fontSize: 15,
            fontWeight: "bold",
            marginLeft: 4,
          }}
        >
          Treavel Club
        </Text>
      </Pressable>

      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <FontAwesome5 name="car-side" size={24} color="white" />
        <Text
          style={{
            color: "white",
            fontSize: 15,
            fontWeight: "bold",
            marginLeft: 4,
          }}
        >
          Car
        </Text>
      </Pressable>

      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons name="note-edit" size={24} color="white" />
        <Text
          style={{
            color: "white",
            fontSize: 15,
            fontWeight: "bold",
            marginLeft: 4,
          }}
        >
          Planner
        </Text>
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
