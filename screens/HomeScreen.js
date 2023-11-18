import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import { Feather } from "@expo/vector-icons";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Travellix",
      headerTitleAlign: "center",
      headerTitleStyle: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
      },
      headerStyle: {
        backgroundColor: "#35B5AE",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
      headerRight: () => (
        <Ionicons
          name="notifications-outline"
          size={24}
          color="white"
          style={{ marginRight: 20 }}
        />
      ),
    });
  }, []);

  return (
    <View>
      <Header />
      <View style={{ width: "90%", margin: "5%" }}>
        <Pressable style={styles.pressable}>
          <Feather name="search" size={24} color="#3B4948" />
          <Text style={{ color: "#3B4948", fontSize: 15 }}>
            Enter Destination
          </Text>
        </Pressable>
        <Pressable
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Feather name="search" size={24} color="#3B4948" />
          <Text style={{ color: "#3B4948" }}>Enter Destination</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  pressable: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 50,
    borderColor: "#3B4948",
    marginBottom: 10,
  },
});
