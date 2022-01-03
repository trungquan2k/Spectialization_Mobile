
import LoginForm from './screen/components/loginForm';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from "@expo/vector-icons";
import ItemDetailScreen from './screen/ItemDetailScreen';
import MyProfile from './screen/MyProfile';
import AddItemScreen from './screen/AddItemScreen';
import MyRecordScreen from './screen/MyRecordScreen';

import HomeScreen from './screen/HomeScreen';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginForm} 
        options={{
            headerShown:false
        }}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          headerLeft:()=>(<Ionicons name="menu" size={30} color="black" />)
        }}/>
        <Stack.Screen name="DetailItem" component={ItemDetailScreen} />
        <Stack.Screen name="MyProfile" component={MyProfile} />
        <Stack.Screen name="AddItem" component={AddItemScreen} />
        <Stack.Screen name="MyRecordItem" component={MyRecordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


