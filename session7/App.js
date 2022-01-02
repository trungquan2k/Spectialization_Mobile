import { StyleSheet, View,} from 'react-native';
import LoginForm from './screen/components/loginForm';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screen/HomeScreen';
import ItemDetailScreen from './screen/ItemDetailScreen';
import MyProfile from './screen/MyProfile';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginForm} 
        options={{
            headerShown:false
        }}/>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DetailItem" component={ItemDetailScreen} />
        <Stack.Screen name="MyProfile" component={MyProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


