import { StyleSheet, View,} from 'react-native';
import LoginForm from './screen/components/loginForm';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screen/HomeScreen';

const Stack = createStackNavigator();
export default function App() {
  return (
    // <View style={styles.container}>
    //   <LoginForm/> 
    // </View>
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginForm} 
        options={{
            headerShown:false
        }}/>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


