import { StatusBar } from "expo-status-bar";
import {
  TouchableOpacity,
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
} from "react-native";

const image = {
  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTemetzYu4yz3rh4jSAddGDc7BFOGTYNv34NafoxgHiz9fRxJM949kwPC_sOEzWcgvUXLY&usqp=CAU",
};
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.image}>
        <Image
          style={{
            resizeMode: "contain",
            height: 100,
            width: 200,
          }}
          source={image}
        />
      </View>
      <View style={styles.header}>
        <Text>Acciona Account User (eg.@acciona,</Text>
        <Text>@colemanrail etc.)> Sign in with your corporate ID</Text>
        <TouchableOpacity style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>AccionaCorporate Login</Text>
        </TouchableOpacity>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
        >
          <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
          <View>
            <Text style={{ width: 50, textAlign: "center", color: "gray" }}>
              Or
            </Text>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
        </View>
      </View>
      <View style={styles.body}>
        <Text>All orther User > User the login form</Text>
        <Text style={{ fontWeight: "bold" }}>Email</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="name@host.com"
          placeholderTextColor="gray"
          autoCapitalize="none"
          onChangeText={() => {}}
        />
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Password"
          placeholderTextColor="gray"
          autoCapitalize="none"
          onChangeText={() => {}}
        />
        <Text style={{ textAlign: "right", height: 40 }}>
          {" "}
          Forgot your password?
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#141434",
            borderRadius: 5,
            paddingVertical: 10,
            paddingHorizontal: 12,
          }}
        >
          <Text style={styles.appButtonText}> Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={{ textAlign: "center" }}>
          Forgot your password or having trouble signing in ? Contact the
          Service Desk on:<Text style={{ color: "red" }}>(03) 9624 4236</Text>
        </Text>
        <Text style={{ textAlign: "center" }}>
          Raise an incident via{" "}
          <Text style={{ color: "red" }}> Service Now Portal</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 25,
    width: 340,
    borderColor: "black",
  },
  image: {
    borderColor: "black",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  header: {
    flex: 1,
    borderColor: "black",
    paddingTop: 10,
  },
  appButtonContainer: {
    elevation: 2,
    backgroundColor: "#E00000",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 15,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  input: {
    margin: 5,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
  },
  body: {
    flex: 2,

    borderColor: "black",
  },
  footer: {
    flex: 1,

    borderColor: "black",
  },
});
