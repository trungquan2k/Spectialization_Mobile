import React from 'react';
import {View, Text, SafeAreaView,Image} from 'react-native';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile!</Text>
    </View>
  );
}

function Plant() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Notifications!</Text>
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
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon:() => <Ionicons name="home-outline" size={20} color="black" />,
        }}
      />
      <Tab.Screen
        name="Plant"
        component={Plant}
        options={{
          headerShown: false,
          tabBarIcon:() => <Ionicons name="settings" size={20} color="black" />,
        }}
      />
      <Tab.Screen
        name="Site Event"
        component={SiteEvent}
        options={{
          headerShown: false,
          tabBarIcon:() => <Ionicons name="calendar" size={20} color="black" />,
        }}
      />
      <Tab.Screen
        name="Link"
        component={SiteEvent}
        options={{
          headerShown: false,
          tabBarIcon:() => <Ionicons name="link" size={20} color="black" />,
        }}
      />
      <Tab.Screen
        name="Contact Us"
        component={SiteEvent}
        options={{
          headerShown: false,
          tabBarIcon:() => <Ionicons name="md-phone-landscape-outline" size={20} color="black" />,
        }}
      />
    </Tab.Navigator>
  );
};





const HomeScreen = ({route}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Values passed from First page: {route.params.user}
            {'\n\n'}
            This is the Home Screen
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey',
          }}>
          Splash, Login and Register Example{'\n'}React Native
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey',
          }}>
          
        </Text>
        <MyTabs/>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;