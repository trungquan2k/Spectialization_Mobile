import React, { Component } from "react";
import { StyleSheet,SafeAreaView, View, Text } from "react-native";

export default class CalcDisplay extends Component {
  static defaultProps = {
    display: "",
    result:"",
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.display}>{this.props.display}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  display: { fontSize: 50, color: "gray", textAlign: "right" },
  // result: {
  //   textAlign: 'right',
  //   color:"gray",
  //   fontSize: 30,
  // },
});
