
import { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, Button, Alert } from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginForm({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // const passwordInputRef = createRef();
  const account = [
    {
      username: "hoangtrungquan",
      password: "password1",
      image: '../../assets/image/anh.jpg'
    },
    {
      username: "trungquan2k",
      password: "password2",
      image: '../../assets/image/anhhoanhao.jpg'
    },
    {
      username: "quandeptrai",
      password: "password3",
      image: '../../assets/image/sy.jpg'
    },
  ];
  const handleLogin = () => {
    if (!username) {
      alert("Please fill Email");
      return;
    }
    if (!password) {
      alert("Please fill Password");
      return;
    }
    account.map((user) => {
      if (username == user.username && password == user.password) {
        navigation.navigate("Home", {
          user: username,
        });
        setLoading(true);
      }
    })
  };
  const image = {
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTemetzYu4yz3rh4jSAddGDc7BFOGTYNv34NafoxgHiz9fRxJM949kwPC_sOEzWcgvUXLY&usqp=CAU",
  };

  return (
    <View style={styles.container}>
      <Image
        style={{
          resizeMode: "contain",
          height: 100,
          width: 200,
          marginLeft: 40,
        }}
        source={image}
      />
      <TextInput
        value={username}
        underlineColorAndroid="transparent"
        placeholder="name@host.com"
        placeholderTextColor="gray"
        autoCapitalize="none"
        onChangeText={(username) => {
          setUsername(username);
        }}
        placeholder={"Username"}
        style={styles.input}
      />
      <TextInput
        value={password}
        underlineColorAndroid="transparent"
        placeholder="Password"
        placeholderTextColor="gray"
        autoCapitalize="none"
        onChangeText={(password) => {
          setPassword(password);
        }}
        secureTextEntry={true}
        style={styles.input}
      />

      <Button
        title={"Login"}
        style={styles.input}
        onPress={() => {
          handleLogin();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 300,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },
});
