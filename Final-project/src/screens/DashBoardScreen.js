import React from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity } from "react-native";
import { auth } from "../auth/firebase";
import { FontAwesome } from "@expo/vector-icons";
const DashboardScreen = ({ navigation }) => {
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.navigate("Auth")
      })
      .catch(error => alert(error.message))
  }

  return (
    <View style={styles.container}>
      <View style={styles.roundCorner} >
      {/* <Ionicons name="shop-outline" size={20} color="black" />, */}
      <View style={{flex:1}}>
        <FontAwesome name={'shopping-basket'} size={20} color="white"/>
      </View>
      <Text >sasda</Text>
      <View style={{flex:1}}>
        <FontAwesome name={'chevron-down'} size={14} color="white"/>
      </View>
      
      <Text>sasda</Text>
      </View>
      <View style={styles.center}>

        <Text>Email: {auth.currentUser?.email}</Text>
        <TouchableOpacity
          onPress={handleSignOut}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  roundCorner:{
    backgroundColor: '#DB147F', 
    width: "100%",
    height:136,
    borderBottomWidth: 70,
    borderBottomColor: '#DB147F',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    // justifyContent: 'center',
    // alignItems: 'center',
    flexDirection:'row',
    
  }
});

export default DashboardScreen;