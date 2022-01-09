import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { MainStackNavigator, CentreStackNavigator, ProfileStackNavigator, AuthStackNavigation } from './StackNavigation'
import DashboardScreen from "../screens/DashBoardScreen";
import CentreScreen from "../screens/CentreScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Dashboard"
                component={DashboardScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: () => (
                        <Ionicons name="home-outline" size={20} color="gray" />
                    ),
                    
                }} />
            <Tab.Screen
                name="Centre"
                component={CentreScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: () => (
                        <Ionicons name="newspaper-outline" size={20} color="gray" />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: () => (
                        <Ionicons name="people" size={20} color="gray" />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;