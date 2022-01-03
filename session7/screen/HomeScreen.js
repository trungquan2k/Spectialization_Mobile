
import React from "react";
import { View, Text, SafeAreaView, Image, StyleSheet } from "react-native";
import BottomTab from "./components/BottomTab";

const HomeScreen = ({ route }) => {

  const ViewUserAccount = (title) => (
    <View style={styles.viewCard}>
      <Text style={styles.title}>
        {title}
      </Text>
    </View>
  );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={styles.viewCard}>
          <Text style={styles.title}>{!!route.params.user ? route.params.user : <Text>No user select</Text>}</Text>
        </View>
        
        <BottomTab />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewCard: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0,
    shadowRadius: 4.65,
    elevation: 1,
    width: "100%",
    padding: 15,
    backgroundColor: "white",
    marginTop: 10,
    flexWrap: "wrap",
    borderRadius: 5
  },
  title: {
    color: "black",
    fontWeight: "bold"
  },
})

export default HomeScreen;
