import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";


import MyProfile from "../MyProfile";
import SiteEvent from "../SiteEventScreen";
import MyRecordScreen from "../MyRecordScreen";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator>
            {/* <Tab.Screen
                name="Home"
                component={()=>{}}
                options={{
                    headerShown: false,
                    tabBarIcon: () => (
                        <Ionicons name="home-outline" size={20} color="gray" />
                    ),
                }}
            /> */}
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

export default BottomTab;