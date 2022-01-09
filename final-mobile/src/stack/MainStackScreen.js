import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import CreateComponent from "../component/CreateComponent";
import UpdateComponent from "../component/UpdateComponent";
import ReadComponent from "../component/ReadComponent";
import DashboardScreen from "../DashboardScreen";

const MainTab = createBottomTabNavigator();

const MainScreen = () => {
    return (
        <MainTab.Navigator>
            <MainTab.Screen
                name="Dashboard"
                component={DashboardScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: () => (
                        <Ionicons name="newspaper-outline" size={20} color="gray" />
                    ),
                }}
            />
            <MainTab.Screen
                name="Centre"
                component={UpdateComponent}
                options={{
                    headerShown: false,
                    tabBarIcon: () => <Ionicons name="calendar" size={20} color="gray" />,
                }}
            />
            <MainTab.Screen
                name="Profile"
                component={ReadComponent}
                options={{
                    headerShown: false,
                    tabBarIcon: () => (
                        <Ionicons name="people-outline" size={20} color="gray" />
                    ),
                }}
            />
        </MainTab.Navigator>
    );
};

export default MainScreen;