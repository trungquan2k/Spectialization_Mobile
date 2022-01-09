import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Image, Button, Modal, TextInput } from "react-native";
import { db } from "../auth/firebase";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";



const CentreScreen = (props) => {
    const [data, setData] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const initalState = {
        title: "",
        content: "",
        code: "",
        time: ""
    };
    const [state, setState] = useState(initalState);
    const handleChangeText = (value, name) => {
        setState({ ...state, [name]: value });
    };

    useEffect(() => {
        db.collection("Table1").onSnapshot((querySnapshot) => {
            const data = [];
            querySnapshot.docs.forEach((doc) => {
                const { title, content, code, time } = doc.data();
                data.push({
                    id: doc.id,
                    title,
                    content,
                    code,
                    time
                });
            });
            setData(data);
        });
        console.log(data);
    }, []);

    const navigation = useNavigation();
    const AddNewItem = async () => {
        console.log(state.title);
        if (state.title === "") {
          alert("please provide a Title");
        } else {
    
          try {
            await db.collection("Table1").add({
              title: state.title,
              content: state.content,
              time: state.time,
              code:state.code
            });
    
            alert("add thanh cong");
            navigation.navigate("Centre");
          } catch (error) {
            console.log(error)
          }
        }
      };

    const ViewItems = ({ item }) => {
        return (
            <TouchableOpacity style={styles.content}
                onPress={() => {
                    props.navigation.navigate("DetailScreen", {
                        userId: user.id,
                    });
                }} >
                <Text style={{ color: "black", fontWeight: "bold", width: 319 }}>
                    {item.title}
                </Text>
                <Text style={{ color: "gray", width: 319, fontSize: 13 }}>{item.content}</Text>
                <View style={{ flex: 1, flexDirection: "row" }}>
                    <Ionicons name="time" size={18} color="green" />
                    <Text style={styles.time}>{item.time}</Text>
                    <Text style={styles.code}>{item.code}</Text>
                </View>
            </TouchableOpacity>
        );
    };


    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder="Title"
                                value={state.title}
                                onChangeText={(value) => handleChangeText(value, "title")}
                                style={styles.input}
                            />
                            <TextInput
                                placeholder="Content"
                                value={state.content}
                                onChangeText={(value) => handleChangeText(value, "content")}
                                style={styles.input}
                            />
                            <TextInput
                                placeholder="Code"
                                value={state.code}
                                onChangeText={(value) => handleChangeText(value, "code")}
                                style={styles.input}
                            />
                            <TextInput
                                placeholder="Time"
                                value={state.time}
                                onChangeText={(value) => handleChangeText(value, "time")}
                                style={styles.input}
                                
                            />
                        </View>

                        <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => AddNewItem()}
                        >
                            <Text style={styles.textStyle}>Add+</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Button
                onPress={() => setModalVisible(true)}
                title="Create Data"
                style={styles.button}
            />
            <FlatList
                data={data}
                renderItem={ViewItems}
                keyExtractor={(item) => item.id}
                style={styles.flatList}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flatList: {
        marginHorizontal: 5,
        padding: 10,
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        // backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
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
        // alignSelf: "center",
        fontSize: 12,
        lineHeight: 18,
    },
    code: {
        alignSelf: "center",
        marginHorizontal: 140,
        lineHeight: 20,
        fontSize: 14,
        color: "#FF1209",
    },
    modalView: {
        margin: 20,
        marginTop: 100,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        marginTop:10,
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }

});

export default CentreScreen;