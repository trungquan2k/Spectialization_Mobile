import React from 'react';
import { View, Text, ScrollView, SafeAreaView, Image, StyleSheet, TextInput } from 'react-native';


const ItemDetailScreen = (route) => {
    const ViewDetail = (title, data) => (
        <View style={styles.viewCard}>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.data}>
                {data}
            </Text>
        </View>
    );
    const value=route.route.params.item.payDetail;
    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                {ViewDetail("SOR Quantity Record No", route.route.params.item.id)}
                {ViewDetail("SOR Quantity Record Status", route.route.params.item.status)}
                {ViewDetail("Job", route.route.params.item.job)}
                {ViewDetail("Foreman", route.route.params.item.foreMan)}
                {ViewDetail("Engineer", route.route.params.item.engineer)}
                {ViewDetail("Location", route.route.params.item.location)}
                {ViewDetail("Total Effect", route.route.params.item.totalEffort)}
            </View>
            <Text style={{ fontSize: 25, marginTop: 10 }}>Pay Item Detail</Text>
            <View style={styles.payItemDetail}>
                {
                    value!=null?
                    <View style={styles.detailItem}>
                            <View >
                                <Text style={{ color: "black" }}>{value.id}</Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ flex: 1 }}>
                                    <Text>UoM</Text>
                                    <TextInput
                                        value={value.UoM}
                                        underlineColorAndroid="transparent"
                                        placeholderTextColor="gray"
                                        autoCapitalize="none"
                                        onChangeText={() => { }}
                                        style={styles.input}
                                    />
                                </View>
                                <View>
                                    <Text>Rate</Text>
                                    <TextInput
                                        value={value.rate}
                                        underlineColorAndroid="transparent"
                                        placeholderTextColor="gray"
                                        autoCapitalize="none"
                                        onChangeText={() => { }}
                                        style={styles.input}
                                    />
                                </View>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ flex: 1 }}>
                                    <Text>Quantity *</Text>
                                    <Text style={styles.input}>{value.quantity}</Text>
                                </View>
                                <View>
                                    <Text>Proposed Value</Text>
                                    <TextInput
                                        value={value.proposed_value}
                                        underlineColorAndroid="transparent"
                                        placeholderTextColor="gray"
                                        autoCapitalize="none"
                                        onChangeText={() => { }}
                                        style={styles.input}
                                    />
                                </View>
                            </View>
                            <View style={{ paddingBottom: 20 }}>
                                <Text>Comments</Text>
                                <TextInput
                                    value={value.comment}
                                    underlineColorAndroid="transparent"
                                    placeholderTextColor="gray"
                                    autoCapitalize="none"
                                    onChangeText={() => { }}
                                    style={styles.comments}
                                />
                            </View>
                        </View>

                    :<Text>No</Text>
                }
            </View>
    
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    viewCard: {
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
        marginTop: 10,
        flexWrap: "wrap",
        borderRadius:5
    },
    title: {
        flex: 1,
        color: "gray",
        fontWeight: "bold"
    },
    input: {
        width: 100,
        height: 40,
        padding: 10,
        // borderWidth: 1,
        // borderColor: "gray",
        marginBottom: 10,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0,
        shadowRadius: 4.65,
        elevation: 1,
        borderRadius:5
    },
    payItemDetail: {
        shadowColor: "#000",
        // backgroundColor: "white",
    },
    detailItem: {
        padding: 20,
    },
    comments: {
        width: "100%",
        height: 40,
        padding: 10,
        // borderWidth: 1,
        // borderColor: "gray",
        marginBottom: 10,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0,
        shadowRadius: 4.65,
        elevation: 1,
    }

})

export default ItemDetailScreen;

                    {/* route.route.params.item.payDetail.map((value, index) => {
                        return <View style={styles.detailItem}>
                            <View >
                                <Text style={{ color: "black" }}>{value.id}</Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ flex: 1 }}>
                                    <Text>UoM</Text>
                                    <TextInput
                                        value={value.UoM}
                                        underlineColorAndroid="transparent"
                                        placeholderTextColor="gray"
                                        autoCapitalize="none"
                                        onChangeText={() => { }}
                                        style={styles.input}
                                    />
                                </View>
                                <View>
                                    <Text>Rate</Text>
                                    <TextInput
                                        value={value.rate}
                                        underlineColorAndroid="transparent"
                                        placeholderTextColor="gray"
                                        autoCapitalize="none"
                                        onChangeText={() => { }}
                                        style={styles.input}
                                    />
                                </View>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ flex: 1 }}>
                                    <Text>Quantity *</Text>
                                    <Text style={styles.input}>{value.quantity}</Text>
                                </View>
                                <View>
                                    <Text>Proposed Value</Text>
                                    <TextInput
                                        value={value.proposed_value}
                                        underlineColorAndroid="transparent"
                                        placeholderTextColor="gray"
                                        autoCapitalize="none"
                                        onChangeText={() => { }}
                                        style={styles.input}
                                    />
                                </View>
                            </View>
                            <View style={{ paddingBottom: 20 }}>
                                <Text>Comments</Text>
                                <TextInput
                                    value={value.comment}
                                    underlineColorAndroid="transparent"
                                    placeholderTextColor="gray"
                                    autoCapitalize="none"
                                    onChangeText={() => { }}
                                    style={styles.comments}
                                />
                            </View>
                        </View>

                    }) : */}