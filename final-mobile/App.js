
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/LoginScreen';
import { Ionicons } from "@expo/vector-icons";
import CreateComponent from './src/component/CreateComponent';
import ReadComponent from './src/component/ReadComponent';
import UpdateComponent from './src/component/UpdateComponent';

import AuthStackScreen from './src/stack/AuthSack';
import MainScreen from './src/stack/MainStackScreen';
import DrawerApp from './src/drawer/drawer';


const Stack = createNativeStackNavigator();

function CrudStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'blue',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />

            <Stack.Screen
                name="CreateComponent"
                component={CreateComponent}
                options={{ title: 'Create' }}
            />
            <Stack.Screen
                name="ReadComponent"
                component={ReadComponent}
                options={{ title: 'List' }}
            />
            <Stack.Screen
                name="UpdateComponent"
                component={UpdateComponent}
                options={{ title: 'Update' }}
            />

        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            {/* <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name="Login" component={AuthStackScreen} />
                <Stack.Screen options={{ 
                    title: "Dashboard", 
                    headerLeft: () => (<Ionicons name="menu" size={30} color="black" />) }}
                    name="Dashboard" component={MainScreen} />
            </Stack.Navigator> */}
            <DrawerApp/>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});