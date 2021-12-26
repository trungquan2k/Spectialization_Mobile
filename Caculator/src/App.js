// import React, { Component } from "react";
// import { StyleSheet, View, Text } from "react-native";
// import CalcButton from "./components/CalcButton";
// import CalcDisplay from "./components/CalcDisplay";

// const buttons = [
//   ["C", "+", "/", "*"],
//   [7, 8, 9, "-"],
//   [4, 5, "6", "+"],
//   [1, 2, 3, ""],
//   [ 0, ".", "="],
// ];
// const operations = ['C', '÷', '×', '-', '+']
// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       display: "0",
//       text: "",
//     };
//   }

//   // onClearDigitPress=()=>{
//   //   this.setState({
//   //    text:""
//   //   })
//   // }
//   onDigitPress = (index) => {
//     // alert("Common soon");
//     switch(index){
//       case 1:{

//       }
//     }
//     this.setState({
//       text: this.state.text+index,
//     });
//   };
//   renderButton() {
//     let layouts = buttons.map((buttonRows, index) => {
//       let rowItem = buttonRows.map((buttonItems, buttonIndex) => {
//         return (
//           <CalcButton
//             key={buttonIndex}
//             onPress={() => {
//               this.onDigitPress(buttonItems);
//             }}
//             title={buttonItems}
//             color="gray"
//             backgroundColor="#F5F5F5"
//           />
//         );
//       });
//       return (
//         <View style={styles.inputRow} key={index}>
//           {rowItem}
//         </View>
//       );
//     });
//     return layouts;
//   }

//   render() {

//     return (
//       <View style={styles.container}>
//         <View style={styles.resultContainer}>
//           <Text style={styles.resultText}> <CalcDisplay display={this.state.text} ></CalcDisplay></Text>
//           <View>
//             <CalcDisplay display={this.state.display} ></CalcDisplay>
//           </View>
//         </View>
//         <View style={styles.inputContainer}>{this.renderButton()}</View>

//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "column",
//     height: 740,
//     padding: 15,
//     paddingTop: 50,
//   },
//   resultContainer: {
//     flex: 3,
//     justifyContent: "flex-end",
//   },
//   inputContainer: {
//     flex: 7,
//     marginTop: 1,
//   },
//   resultText: {
//     fontSize: 50,
//     color: "gray",
//     padding: 5,
//     textAlign: "right",
//   },
//   inputRow: {
//     flex: 1,
//     flexDirection: "row",
//     flexWrap:"wrap",
//     justifyContent:"flex-end",
//   },
// });

import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import CalcButton from "./components/CalcButton";
import CalcDisplay from "./components/CalcDisplay";
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      resultText: "",
      calculationText: "",
    };
    this.operations = ["DEL", "+", "-", "x", "/"];
  }

  calculateResult() {
    const text = this.state.resultText;
    // do magic
    this.setState({
      calculationText: eval(text),
    });
  }
  validate() {
    const text = this.state.resultText;
    switch (text.slice(-1)) {
      case "+":
      case "-":
      case "x":
      case "/":
        return false;
    }
    return true;
  }

  buttonPressed(text) {
    if (text == "=") {
      return this.validate() && this.calculateResult();
    }
    this.setState({
      resultText: this.state.resultText + text,
    });
  }

  operate(operation) {
    switch (operation) {
      case "DEL":
        let text = this.state.resultText.split("");
        text.pop();
        this.setState({
          resultText: text.join(""),
        });
        break;
      case "+":
      case "-":
      case "x":
      case "/":
        const lastChar = this.state.resultText.split("").pop();

        if (this.operations.indexOf(lastChar) > 0) return;

        if (this.state.resultText == "") {
          return;
        }
        this.setState({
          resultText: this.state.resultText + operation,
        });
    }
  }

  render() {
    let rows = [];
    let buttons = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [".", 0, "="],
    ];
    for (let i = 0; i < 4; i++) {
      let row = [];
      for (let j = 0; j < 3; j++) {
        row.push(
          <CalcButton
            key={buttons[i][j]}
            onPress={() => {
              this.buttonPressed(buttons[i][j]);
            }}
            title={buttons[i][j]}
            color="gray"
            backgroundColor="#F5F5F5"
          />
        );
      }
      rows.push(
        <View key={i} style={styles.row}>
          {row}
        </View>
      );
    }

    let ops = [];
    this.operations.map((index) => {
      ops.push(
        <CalcButton
          key={index}
          onPress={() => {
            this.operate(index);
          }}
          title={index}
          color="gray"
          backgroundColor="#F5F5F5"
        />
      );
    });
    return (
      <View style={styles.container}>
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>
            <CalcDisplay display={this.state.resultText}></CalcDisplay>
          </Text>
          <View>
            <CalcDisplay display={this.state.calculationText}></CalcDisplay>
          </View>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>{rows}</View>
          <View style={styles.operations}>{ops}</View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  calculation: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  buttons: {
    flex: 7,
    flexDirection: "row",
  },
  numbers: {
    flex: 3,
  },
  operations: {
    // flex: 1,
    justifyContent: "space-around",
    // alignItems: "stretch",
    // backgroundColor: "#EA4D4D",
  },
});
