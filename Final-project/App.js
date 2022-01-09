
import React, {useEffect} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthStackNavigation, ForgotStackNavigation } from "./src/navigation/StackNavigation";
import BottomTabNavigator from "./src/navigation/TabNavigation";
import * as SplashScreen from 'expo-splash-screen';


const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Auth" component={AuthStackNavigation} />
      <Stack.Screen 
      name="App" 
      component={BottomTabNavigator} 
      options={{ 
        headerShown: false ,
        
        }} />
       <Stack.Screen 
      name="ForgotPassword" 
      component={ForgotStackNavigation} 
      options={{ 

        }} />
    </Stack.Navigator>
  )
}
const App = () => {
  
  SplashScreen.preventAutoHideAsync()
  .then(result =>
    console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`)
  )
  .catch(console.warn); // it's good to explicitly catch and inspect any error
  useEffect(function componentDidMount(){
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 1000);
  }, []);

  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  )
}
export default App;
