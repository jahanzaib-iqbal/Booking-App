import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import { Feather } from "@expo/vector-icons";
import DatePicker from "react-native-date-ranges";
import {
  ModalButton,
  BottomModal,
  ModalFooter,
  ModalTitle,
  SlideAnimation,
  ModalContent,
} from "react-native-modals";
import SearchScreen from "./SearchScreen";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedDates, setSelectedDates] = useState();
  console.log(selectedDates);

  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [modalVisible, setmodalVisible] = useState(false);
  console.log(modalVisible);
  console.log("Rooms", rooms);
  console.log("Adult", adults);
  console.log("Children", children);

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
    <>
      <View>
        <Header />
        <ScrollView style={{ width: "90%", marginHorizontal: "5%" }}>
          {/* ========> Search <=========== */}
          <View
            style={{
              marginVertical: "5%",
              borderColor: "#35B5AE",
              borderWidth: 3,
              borderRadius: 6,
            }}
          >
            <Pressable
              style={styles.pressable}
              onPress={() => navigation.navigate(SearchScreen)}
            >
              <Feather name="search" size={24} color="#35B5AE" />
              <TextInput
                placeholder="Enter Your Destination"
                style={styles.text}
              />
            </Pressable>

            <Pressable style={styles.pressable}>
              <Feather name="calendar" size={24} color="#35B5AE" />
              <DatePicker
                style={{ width: 350, height: 30, borderWidth: 0 }}
                customStyles={{
                  placeholderText: {
                    fontSize: 15,
                    alignItems: "center",
                    marginRight: "auto",
                    color: "rgba(59, 73, 72, 0.7)",
                  },
                  headerStyle: { backgroundColor: "#35B5AE" },
                  headerMarkTitle: { color: "white" },
                  contentText: {
                    color: "#3B4948",
                    fontSize: 15,
                    alignItems: "center",
                    marginRight: "auto",
                  },
                }}
                customButton={(onConfirm) => (
                  <Text
                    style={{
                      width: "80%",
                      margin: "auto",
                      color: "#35B5AE",
                      fontSize: 20,
                      textAlign: "center",
                    }}
                    onPress={onConfirm}
                  >
                    Confirm
                  </Text>
                )}
                onConfirm={(startDate, endDate) =>
                  setSelectedDates(startDate, endDate)
                }
                selectedBgColor={"#35B5AE"}
                allowFontScaling={false}
                placeholder={"Select Dates"}
                mode={"range"}
              />
            </Pressable>

            <Pressable
              style={styles.pressable}
              onPress={() => setmodalVisible(!modalVisible)}
            >
              <Ionicons name="bed-outline" size={24} color="#35B5AE" />
              <Text style={styles.text}>
                {rooms} room - {adults} adults - {children} children
              </Text>
            </Pressable>

            <Pressable style={styles.searchBtn}>
              <Text
                style={{
                  width: "100%",
                  color: "white",
                  fontWeight: 500,
                  fontSize: 15,
                  textAlign: "center",
                }}
              >
                Search
              </Text>
            </Pressable>
          </View>
          {/* ============> Discounts <============ */}

          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#3B4948" }}>
            Travel more,Spend less
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginVertical: 10 }}
          >
            <Pressable
              style={{
                backgroundColor: "#35B5AE",
                width: 200,
                height: 150,
                borderRadius: 10,
                padding: 15,
                marginRight: 20,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 17,
                  fontWeight: "bold",
                  marginVertical: 5,
                }}
              >
                Genius
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 15,
                  fontWeight: "500",
                  marginVertical: 5,
                }}
              >
                You are at Genius Level 1 in our loyality Program
              </Text>
            </Pressable>

            <Pressable
              style={{
                width: 200,
                borderRadius: 10,
                padding: 15,
                marginRight: 20,
                borderColor: "#35B5AE",
                borderWidth: 2,
              }}
            >
              <Text
                style={{
                  color: "#3B4948",
                  fontSize: 17,
                  fontWeight: "bold",
                  marginVertical: 5,
                }}
              >
                15% discount Hotels
              </Text>
              <Text
                style={{
                  color: "#3B4948",
                  fontSize: 15,
                  fontWeight: "500",
                  marginVertical: 5,
                }}
              >
                Enjoy the discount at participlating hotels all over the
                Pakistan
              </Text>
            </Pressable>

            <Pressable
              style={{
                width: 200,
                borderRadius: 10,
                padding: 15,
                marginRight: 20,
                borderColor: "#35B5AE",
                borderWidth: 2,
              }}
            >
              <Text
                style={{
                  color: "#3B4948",
                  fontSize: 17,
                  fontWeight: "bold",
                  marginVertical: 5,
                }}
              >
                10% off rental cars
              </Text>
              <Text
                style={{
                  color: "#3B4948",
                  fontSize: 15,
                  fontWeight: "500",
                  marginVertical: 5,
                }}
              >
                Save on Rental Cars
              </Text>
            </Pressable>

            <Pressable
              style={{
                width: 200,
                borderRadius: 10,
                padding: 15,
                marginRight: 20,
                borderColor: "#35B5AE",
                borderWidth: 2,
              }}
            >
              <Text
                style={{
                  color: "#3B4948",
                  fontSize: 17,
                  fontWeight: "bold",
                  marginVertical: 5,
                }}
              >
                12% off Travel Clubs
              </Text>
              <Text
                style={{
                  color: "#3B4948",
                  fontSize: 15,
                  fontWeight: "500",
                  marginVertical: 5,
                }}
              >
                Get 12% off on your first travel clubs booking
              </Text>
            </Pressable>
          </ScrollView>

          {/* ===========> Logo <========== */}

          <Pressable
            style={{
              marginTop: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{ width: 200, height: 50, resizeMode: "cover" }}
              source={{
                uri: "https://1000logos.net/wp-content/uploads/2021/05/Booking.Com-logo.png",
              }}
            />
          </Pressable>
        </ScrollView>
      </View>

      <BottomModal
        swipeThreshold={200}
        onBackdropPress={() => setmodalVisible(!modalVisible)}
        swipeDirection={["down", "up"]}
        footer={
          <ModalFooter>
            <ModalButton
              style={{
                backgroundColor: "#35B5AE",
                color: "#35B5AE",
              }}
              text="Apply"
              onPress={() => setmodalVisible(!modalVisible)}
            />
          </ModalFooter>
        }
        modalTitle={<ModalTitle title="Select Rooms and Adults" />}
        modalAnimation={new SlideAnimation({ slideFrom: "bottom" })}
        onHardwareBackPress={() => setmodalVisible(!modalVisible)}
        onTouchOutside={() => setmodalVisible(!modalVisible)}
        visible={modalVisible}
      >
        <ModalContent style={{ width: "100%", height: 250 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "400", color: "#3B4948" }}>
              Rooms
            </Text>
            <Pressable
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Pressable
                // onPress={() => setRooms(rooms - 1)}
                onPress={() => setRooms(Math.max(1, rooms - 1))}
                style={{
                  backgroundColor: "#E8F3F3",
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                }}
              >
                <Text
                  style={{
                    color: "#35B5AE",
                    fontSize: 20,
                    fontWeight: "bold",
                    textAlign: "center",
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </Pressable>

              <Pressable
                style={{
                  width: 26,
                  height: 26,
                }}
              >
                <Text
                  style={{
                    color: "#35B5AE",
                    fontSize: 20,
                    textAlign: "center",
                  }}
                >
                  {rooms}
                </Text>
              </Pressable>

              <Pressable
                onPress={() => setRooms(rooms + 1)}
                style={{
                  backgroundColor: "#E8F3F3",
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                }}
              >
                <Text
                  style={{
                    color: "#35B5AE",
                    fontSize: 20,
                    fontWeight: "bold",
                    textAlign: "center",
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "400", color: "#3B4948" }}>
              Adults
            </Text>
            <Pressable
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Pressable
                onPress={() => {
                  if (adults > 1) setAdults((a) => a - 1);
                }}
                style={{
                  backgroundColor: "#E8F3F3",
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                }}
              >
                <Text
                  style={{
                    color: "#35B5AE",
                    fontSize: 20,
                    fontWeight: "bold",
                    textAlign: "center",
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </Pressable>

              <Pressable
                style={{
                  width: 26,
                  height: 26,
                }}
              >
                <Text
                  style={{
                    color: "#35B5AE",
                    fontSize: 20,
                    textAlign: "center",
                  }}
                >
                  {adults}
                </Text>
              </Pressable>

              <Pressable
                onPress={() => setAdults((a) => a + 1)}
                style={{
                  backgroundColor: "#E8F3F3",
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                }}
              >
                <Text
                  style={{
                    color: "#35B5AE",
                    fontSize: 20,
                    fontWeight: "bold",
                    textAlign: "center",
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "400", color: "#3B4948" }}>
              Children
            </Text>
            <Pressable
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Pressable
                onPress={() => setChildren(Math.max(0, children - 1))}
                style={{
                  backgroundColor: "#E8F3F3",
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                }}
              >
                <Text
                  style={{
                    color: "#35B5AE",
                    fontSize: 20,
                    fontWeight: "bold",
                    textAlign: "center",
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </Pressable>

              <Pressable
                style={{
                  width: 26,
                  height: 26,
                }}
              >
                <Text
                  style={{
                    color: "#35B5AE",
                    fontSize: 20,
                    textAlign: "center",
                  }}
                >
                  {children}
                </Text>
              </Pressable>

              <Pressable
                onPress={() => setChildren((c) => c + 1)}
                style={{
                  backgroundColor: "#E8F3F3",
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                }}
              >
                <Text
                  style={{
                    color: "#35B5AE",
                    fontSize: 20,
                    fontWeight: "bold",
                    textAlign: "center",
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>
        </ModalContent>
      </BottomModal>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  pressable: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
    borderWidth: 2,
    padding: 12,
    borderColor: "#35B5AE",
  },
  searchBtn: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
    borderWidth: 2,
    borderColor: "#35B5AE",
    backgroundColor: "#35B5AE",
    margin: 0,
  },
  placeholderText: {
    fontSize: 15,
    color: "rgba(59, 73, 72, 0.7)",
  },
  text: {
    fontSize: 15,
    color: "#3B4948",
  },
});
