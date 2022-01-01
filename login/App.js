import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,} from 'react-native';
import LoginForm from './screen/components/loginForm';



export default function App() {
  return (
    <View style={styles.container}>
      <LoginForm/> 
    </View>
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
