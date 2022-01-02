
import React from "react";
import { View, Text, SafeAreaView, Image, Alert } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import MyRecordScreen from "./MyRecordScreen";
import MyProfile from "./MyProfile";
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>HOme</Text>
    </View>
  );
}


function SiteEvent() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Site Event!</Text>
    </View>
  );
}

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home1"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons name="home-outline" size={20} color="gray" />
          ),
        }}
      />
      <Tab.Screen
        name="My Records"
        component={MyRecordScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons name="newspaper-outline" size={20} color="gray" />
          ),
        }}
      />
      <Tab.Screen
        name="My TimeSheet"
        component={SiteEvent}
        options={{
          headerShown: false,
          tabBarIcon: () => <Ionicons name="calendar" size={20} color="gray" />,
        }}
      />
      <Tab.Screen
        name="My Profile"
        component={MyProfile}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons name="people-outline" size={20} color="gray" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeScreen = ({ route }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>      
      <Text>{route.params.user}</Text>
        <MyTabs />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
