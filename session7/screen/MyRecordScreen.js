import React, { useEffect, useState, useRef } from "react";
import {
  FlatList,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
import Data from "../data/Data";
import { Ionicons } from "@expo/vector-icons";


const MyRecordScreen = ({navigation}) => {
    const PayDetail = (item) => {
        return item.payDetail.map((value) => <Text>{value.id}</Text>);
    };

    const ItemView = ({ item }) => {
        return (
        <View style={styles.card} >
            <View style={styles.leftCart} >
            <Text onPress={() => getItemDetail(item)}>{item.id}</Text>
            <Text style={{ color: "black" }}>SOR Quantity Record</Text>
            <Text style={{ color: "black" }}>
                Pay Item
            </Text>
            </View>
            <View style={styles.rightCard}>
            <Ionicons name="warning" size={20} color="orange" />
            <Text style={{ color: "gray" }}>28 Dec 2021</Text>
            <Text style={{ color: "red" }}>
                {item.payDetail.map((value) => {
                return <Text>{value.id}</Text>;
                })}
            </Text>
            </View>
        </View>
        );
    };
    const getItemDetail = (items) => {
        navigation.navigate("DetailItem", {
            item: items,
          });
    };
  const clickHandler = () => {
    alert('Floating Button Clicked');
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={Data}
        // ItemSeparatorComponent={ItemSeparatorView}
        renderItem={ItemView}
        keyExtractor={(item, index) => index.toString()}
        style={styles.datalist}
      />
      <TouchableOpacity
          activeOpacity={0.7}
          onPress={clickHandler}
          style={styles.touchableOpacityStyle}>
          <Image
            source={{
              uri:
                'https://play-lh.googleusercontent.com/TI8o079rVoxaQ5ZeDcLfQRlS7MQrwNbpGh4-WdOYC2lYIZk1jAhABtABLU_kl2aReCSl',
            }}
            style={styles.floatingButtonStyle}
          />
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        padding: 20,
    },
    card: {
        // elevation: 2,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 4,
        },
        shadowOpacity: 0,
        shadowRadius: 4.65,
        elevation: 1,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        backgroundColor: "white",
        marginTop: 15,
        flexWrap: "wrap",
        borderColor:"black",
        borderWidth:1,
        borderRadius:10
    },
    leftCart:{
        flex:1,
    },
    rightCard:{
        alignItems:"flex-end"
    },
    touchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
        
      },
      floatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
      },
});

export default MyRecordScreen;
