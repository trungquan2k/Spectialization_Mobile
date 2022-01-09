import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../LoginScreen';

const AuthStack = createNativeStackNavigator();


const AuthStackScreen=()=> {
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown:false}}
      />
     
    </AuthStack.Navigator>
  );
}

export default AuthStackScreen;