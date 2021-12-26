import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const image1 = {
  uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
};
const image2 = {
  uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
};
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur est volutpat id ut cursus venenatis ...",
    time: "8:00, 21 May 2020",
    code: "SGP-01",
    icon: "",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur est volutpat id ut cursus venenatis ...",
    time: "8:00, 21 May 2020",
    code: "SGP-04",
    icon: "",
  },
];

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text
          style={{
            textAlign: "center",
            paddingTop: 40,
            fontSize: 18,
            lineHeight: 24,
            fontWeight: "bold",
          }}
        >
          FlatList And ScrollView
        </Text>
        <View
          style={{
            borderBottomColor: "#E8E8EB",
            borderBottomWidth: 1,
            width: "100%",
          }}
        />
      </View>
      <Text
        style={{
          textAlign: "auto",
          marginLeft: 30,
          fontSize: 18,
          lineHeight: 24,
        }}
      >
        My Post
      </Text>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <View style={styles.content}>
            <Image source={{uri:item.image}} style={styles.image} />
            <Text style={{ color: "black", fontWeight: "bold", width: 319 }}>
              {item.title}
            </Text>
            <Text style={{ color: "gray", width: 319 , fontSize:13}}>{item.content}</Text>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Ionicons name="time" size={18} color="green" />
              <Text style={styles.time}>{item.time}</Text>
              <Text style={styles.code}>{item.code}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
        style={styles.flatList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  flatList: {
    marginHorizontal: 5,
    padding: 10,
  },
  content: {
    padding: 10,
    marginHorizontal: 5,
  },
  image: {
    width: 319,
    height: 140,
    borderWidth: 1,
    borderRadius: 6,
  },
  time: {
    alignSelf: "center",
    fontSize: 12,
    lineHeight: 18,
  },
  code: {
    alignSelf: "center",
    // justifyContent:"flex-end",
    marginHorizontal: 140,
    lineHeight: 20,
    fontSize: 14,
    color: "#FF1209",
  },
});

export default App;

