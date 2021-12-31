import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  StatusBar,
  Platform
} from "react-native";

import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

const CustomSidebarMenu = (props) => {
  const BASE_PATH =
    "https://play-lh.googleusercontent.com/55lH8tzUi5PujNo2i-1fHxX--Nk0bBdXT5s1P1VZv5UNgiHEUhS2-6Tigl1Pdzh3Ka0";
  const proileImage = "react_logo.png";

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/*Top Large Image */}
        <Image
            source={{ uri: BASE_PATH  }}
            style={styles.sideMenuProfileIcon}
        />
        <DrawerContentScrollView {...props} >
            <DrawerItemList {...props} />
    
        </DrawerContentScrollView>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Ionicons name="exit-outline" size={20} color="white" />
            <Text style={{color:"white"}}>Logout</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: "center",
    width: 150,
    height: 120,
    borderRadius: 100 / 2,
    alignSelf: "center",
  },

  button: {
    flexDirection:"row",
    alignItems: "center",
    backgroundColor: "#D00C04",
    padding: 15,
  },
});

export default CustomSidebarMenu;
