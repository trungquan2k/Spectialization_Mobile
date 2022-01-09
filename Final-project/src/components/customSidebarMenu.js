import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { auth } from "../auth/firebase";
import { useNavigation } from "@react-navigation/native";
const CustomSidebarMenu = (props) => {
  const BASE_PATH =
    "https://play-lh.googleusercontent.com/55lH8tzUi5PujNo2i-1fHxX--Nk0bBdXT5s1P1VZv5UNgiHEUhS2-6Tigl1Pdzh3Ka0";
  const proileImage = "react_logo.png";
  const navigation =useNavigation();
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.navigate("Login")
      })
      .catch(error => alert(error.message))
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <Image
            source={{ uri: BASE_PATH  }}
            style={styles.sideMenuProfileIcon}
        />
        <DrawerContentScrollView {...props} >
            <DrawerItemList {...props} />
    
        </DrawerContentScrollView>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Ionicons name="exit-outline" size={25} color="white" />
            <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
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
    padding: 5,
  },
  buttonText:{
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  }
  
});

export default CustomSidebarMenu;
