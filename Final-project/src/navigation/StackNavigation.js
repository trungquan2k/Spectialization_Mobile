import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import DashboardScreen from "../screens/DashBoardScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CentreScreen from "../screens/CentreScreen";
import LoginScreen from "../screens/LoginScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import BottomTabNavigator from "./TabNavigation";
const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
        backgroundColor: "#9AC4F8",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
    headerShown: false
};

const AuthStackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    headerShown: false,
                }}
            />     
        </Stack.Navigator>
    )
}
const ForgotStackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen
                name="Forgot"
                component={ForgotPasswordScreen}
                options={{
                    headerShown: false,
                }}
            />     
        </Stack.Navigator>
    )
}


const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen
                name="Main"
                component={DashboardScreen}
                options={{
                    headerShown: false,
                }}
            />
            {/* <Stack.Screen
                name="Main"
                component={BottomTabNavigator}
                options={{
                    headerShown: false,
                }}
            /> */}
        </Stack.Navigator>
    );
}

const ProfileStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false, }} />
        </Stack.Navigator>
    );
}

const CentreStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="CentreScreen" component={CentreScreen} options={{ headerShown: false, }} />
        </Stack.Navigator>
    );
}

export { MainStackNavigator, ProfileStackNavigator, CentreStackNavigator, AuthStackNavigation ,ForgotStackNavigation};