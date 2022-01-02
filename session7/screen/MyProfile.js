import React from "react";
import { View, Text, SafeAreaView,  } from "react-native";


const MyProfile = ({ route }) => {
    console.log(route);
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}> 
        <Text>Profile</Text>     
          {/* <Text>{route.params.user}</Text> */}
        </View>
      </SafeAreaView>
    );
  };
  
  export default MyProfile;