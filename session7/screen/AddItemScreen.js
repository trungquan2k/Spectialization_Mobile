import { React, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Picker, TouchableOpacity, Alert } from 'react-native';
import Data from '../data/Data';


const AddItemScreen = ({ navigation }) => {
    const [status, setStatus] = useState(Data);
    const [job, setJob] = useState(Data);
    const [foreMan, setForeMan] = useState(Data);
    const [engineer, setEngineer] = useState(Data);
    const [location, setLocation] = useState(Data);
    const [totalEffort, setTotalEffort] = useState(Data);
    const [payItem, setPayItem] = useState([])
    // pay item
    const [UoM, setUoM] = useState(Data);
    const [rate, setRate] = useState(Data);
    const [quantity, setQuantity] = useState(Data);
    const [proposed_value, setProposedValue] = useState(Data);
    const [comment, setComment] = useState(Data)


   
    const handleAddItem = () => {
        // console.log(status); 
        const randomId = Math.floor(Math.random() * 100) + 1;
        const dataPay={
            id:randomId,
            UoM:UoM,
            quantity:quantity,
            rate:rate,
            proposed_value:proposed_value,
            comment:comment
        }
        // payItem.push(dataPay);
        // console.log(payItem);
        if (status != null || job != null || foreMan != null || engineer != null || location != null || totalEffort != null) {
            const data = {
                id: randomId+1,
                status: status,
                job: job,
                foreMan: foreMan,
                engineer: engineer,
                location: location,
                totalEffort: totalEffort,
                payDetail: dataPay
            }
            Data.push(data);
            console.log(Data);
            navigation.navigate("MyRecordItem");
            alert("Add new item successfully")
        } else {
            alert("Please, Enter data");
        }
    }

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                    <Text>Status of Item</Text>
                    <Picker
                        selectedValue={status}
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue, itemIndex) => setStatus(itemValue)}
                    >
                        <Picker.Item label="Submitted" value="Submitted" />
                        <Picker.Item label="Submit" value="Submit" />
                    </Picker>
                </View>
                <View style={{ flex: 1 }}>
                    <Text>Job of Item</Text>
                    <TextInput
                        value={job}
                        underlineColorAndroid="transparent"
                        placeholderTextColor="gray"
                        autoCapitalize="none"
                        onChangeText={(job) => { setJob(job) }}
                        style={styles.input}
                    />
                </View>

            </View>

            <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                    <Text>Foreman of Item</Text>
                    <TextInput
                        value={foreMan}
                        underlineColorAndroid="transparent"
                        placeholderTextColor="gray"
                        autoCapitalize="none"
                        onChangeText={(foreMan) => { setForeMan(foreMan) }}
                        style={styles.input}
                    />
                </View>
                <View style={{ paddingLeft: 10, flex: 1 }}>
                    <Text>Engineer of Item</Text>
                    <TextInput
                        value={engineer}
                        underlineColorAndroid="transparent"
                        placeholderTextColor="gray"
                        autoCapitalize="none"
                        onChangeText={(engineer) => { setEngineer(engineer) }}
                        style={styles.input}
                    />
                </View>

            </View>
            <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                    <Text>Location of Item</Text>
                    <TextInput
                        value={location}
                        underlineColorAndroid="transparent"
                        placeholderTextColor="gray"
                        autoCapitalize="none"
                        onChangeText={(location) => { setLocation(location) }}
                        style={styles.input}
                    />
                </View>
                <View style={{ paddingLeft: 10, flex: 1 }}>
                    <Text>Total Effort of Item</Text>
                    <TextInput
                        value={totalEffort}
                        underlineColorAndroid="transparent"
                        placeholderTextColor="gray"
                        autoCapitalize="none"
                        onChangeText={(totalEffort) => { setTotalEffort(totalEffort) }}
                        style={styles.input}
                    />
                </View>
            </View>
          
            {/* View pay detail */}
            <View style={styles.payItem}>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1 }}>
                        <Text>UoM</Text>
                        <TextInput
                            value={UoM}
                            underlineColorAndroid="transparent"
                            placeholderTextColor="gray"
                            autoCapitalize="none"
                            onChangeText={(UoM) => { setUoM(UoM)}}
                            style={styles.input}
                        />
                    </View>
                    <View style={{paddingLeft: 10,flex:1}}>
                        <Text>Rate</Text>
                        <TextInput
                            value={rate}
                            underlineColorAndroid="transparent"
                            placeholderTextColor="gray"
                            autoCapitalize="none"
                            onChangeText={(rate) => { setRate(rate)}}
                            style={styles.input}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1 }}>
                        <Text>Quantity *</Text>
                        <TextInput
                            value={quantity}
                            underlineColorAndroid="transparent"
                            placeholderTextColor="gray"
                            autoCapitalize="none"
                            onChangeText={(quantity) => { setQuantity(quantity)}}
                            style={styles.input}
                        />
                    </View>
                    <View style={{paddingLeft: 10,flex:1}}>
                        <Text>Proposed Value</Text>
                        <TextInput
                            value={proposed_value}
                            underlineColorAndroid="transparent"
                            placeholderTextColor="gray"
                            autoCapitalize="none"
                            onChangeText={(proposed_value) => {setProposedValue(proposed_value) }}
                            style={styles.input}
                        />
                    </View>
                </View>
                <View style={{ paddingBottom: 20 }}>
                    <Text>Comments</Text>
                    <TextInput
                        value={comment}
                        underlineColorAndroid="transparent"
                        placeholderTextColor="gray"
                        autoCapitalize="none"
                        onChangeText={(comment) => { setComment(comment)}}
                        style={styles.comments}
                    />
                </View>
            </View>
            {/* Button add new item */}
            <View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => { handleAddItem() }}
                >
                    <Text>Add Item</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}



export default AddItemScreen;

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        width: "100%",
        height: 40,
        padding: 10,
        borderWidth: 1,
        borderColor: "gray",
        marginBottom: 10,
    },
    comments: {
        width: "100%",
        height: 40,
        padding: 10,
        borderWidth: 1,
        borderColor: "gray",
        marginBottom: 10,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },

});