import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { useState } from 'react';


export default function LoginForm({navigation}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errortext, setErrortext] = useState('');

    const passwordInputRef = createRef();

    const handleLogin=()=>{
      setErrortext('');
      if (!userEmail) {
        alert('Please fill Email');
        return;
      }
      if (!password) {
        alert('Please fill Password');
        return;
      }
      setLoading(true);
      if(username=="trungquan2k" && password=="password"){
        navigation.navigate('HomeScreen');
      }
    };

    const image = {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTemetzYu4yz3rh4jSAddGDc7BFOGTYNv34NafoxgHiz9fRxJM949kwPC_sOEzWcgvUXLY&usqp=CAU",
    };
    return (
      <View >
       <Image
          style={{
            resizeMode: "contain",
            height: 100,
            width: 200,
            marginLeft:50
          }}
          source={image}
        />
          <TextInput
            value={username}
            underlineColorAndroid="transparent"
            placeholder="name@host.com"
            placeholderTextColor="gray"
            autoCapitalize="none"
            onChangeText={(username) => {setUsername(username)}}
            placeholder={'Username'}
            style={styles.input}
          />
          <TextInput
            value={password}
            underlineColorAndroid="transparent"
            placeholder="Password"
            placeholderTextColor="gray"
            autoCapitalize="none"
            onChangeText={(password) => {setPassword(password)}} 
            secureTextEntry={true}
            style={styles.input}
          />
          
          <Button
            title={'Login'}
            style={styles.input}
            onPress={()=>{}}
          />
        </View>
    );
  }
  
  const styles = StyleSheet.create({

    input: {
      width: 300,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 10,
    },
  });