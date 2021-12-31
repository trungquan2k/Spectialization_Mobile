// import React from "react";
// import {
//   StyleSheet,
//   Text,
//   SafeAreaView,
//   Platform,
//   StatusBar,
//   View,
//   FlatList,
//   Image,
//   ScrollView,
//   Button,
//   TouchableHighlight,
// } from "react-native";
// import Data from "./src/data/data";
// import { Ionicons } from "@expo/vector-icons";

// const App = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text>Page content</Text>

//       <View style={styles.header}>
//         <Ionicons
//           name="arrow-back-circle"
//           style={{ flex: 1 }}
//           size={20}
//           color="green"
//         />
//         <Text
//           style={{
//             flex: 15,
//             textAlign: "center",
//             fontWeight: "bold",
//             fontSize: 14,
//             lineHeight: 20,
//           }}
//         >
//           Mon 02 Nov - Sun 08 Nov 2020 {"\n"}
//           <Text style={{ color: "gray" }}> (3h 20m)</Text>
//         </Text>
//         <Ionicons
//           name="arrow-forward-circle"
//           style={{ flex: 1 }}
//           size={20}
//           color="green"
//         />
//       </View>
//       <FlatList
//         data={Data}
//         renderItem={({ item }) => (
//           <ScrollView>
//             <View style={styles.content}>
//               <View
//                 style={{
//                   flexDirection: "row",
//                   justifyContent: "space-between",
//                 }}
//               >
//                 <Text style={{ flex: 1, fontWeight: "bold" }}>
//                   Thu 05 Nov (Total: 1h 40m){"\n"}
//                   <Text style={{ color: "gray" }}>
//                     02:15pm to 04:10pm - 15m lunch
//                   </Text>
//                 </Text>
//                 <Ionicons
//                   name="arrow-down"
//                   style={{ marginTop: 5 }}
//                   size={20}
//                   color="green"
//                 />
//               </View>
//               <View style={{ height: 0.5, backgroundColor: "gray" }} />
//               <View>
//                 <Text style={{ color: "gray" }}>JobName: </Text>
//                 <Text
//                   style={{ color: "black", fontWeight: "bold", width: 319 }}
//                 >
//                   {item.jobName}
//                 </Text>
//                 <View
//                   style={{
//                     flexDirection: "row",
//                     justifyContent: "space-between",
//                   }}
//                 >
//                   <Text style={{ color: "gray" }}>
//                     Leave Type: {"\n"}
//                     <Text
//                       style={{ color: "black", fontWeight: "bold", width: 319 }}
//                     >
//                       {item.leaveType}
//                     </Text>
//                   </Text>
//                   <Text style={{ color: "gray" }}>
//                     Time Allowance: {"\n"}
//                     <Text
//                       style={{ color: "black", fontWeight: "bold", width: 319 }}
//                     >
//                       {item.timeAllowance}
//                     </Text>
//                   </Text>
//                   <Text style={{ color: "gray" }}>
//                     LAHA: {"\n"}
//                     <Text
//                       style={{ color: "black", fontWeight: "bold", width: 319 }}
//                     >
//                       {item.Laha}
//                     </Text>
//                   </Text>
//                 </View>
//                 <Text style={{ color: "gray" }}>Description</Text>
//                 <Text>{item.description}</Text>
//                 <Text style={{ color: "gray" }}>Payroll Notes</Text>
//                 <Text>{item.payrollNotes}</Text>
//               </View>
//               <View
//                 style={{
//                   flexDirection: "row",
//                   justifyContent: "space-evenly",
//                   // flexWrap:'wrap'
//                 }}
//               >
//                 <TouchableHighlight
//                   style={{
//                     height: 40,
//                     width: 136,
//                     borderRadius: 6,
//                     marginTop: 20,
//                     flex:1
//                   }}
//                 >
//                   <Button
//                     onPress={() => {}}
//                     title="SAVE"
//                     accessibilityLabel="Learn more about this button"
//                     color= "#D00C04"
//                   />
//                 </TouchableHighlight>
//                 <TouchableHighlight
//                   style={{
//                     height: 40,
//                     width: 136,
//                     borderRadius: 6,
//                     marginTop: 20,
//                     marginLeft:14,
//                     flex:1
//                   }}
//                 >
//                   <Button
//                     onPress={() => {}}
//                     title="Delete"
//                     accessibilityLabel="Learn more about this button"
//                     disabled={true}
//                   />
//                 </TouchableHighlight>

//               </View>
//             </View>
//           </ScrollView>
//         )}
//         keyExtractor={(item) => item.id}
//         style={styles.flatList}
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//     // justifyContent: 'center',
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     width: 319,
//   },
// content: {
//   width: 319,
//   borderWidth: 0.5,
//   borderRadius: 6,
//   // height: 380,
//   // borderColor:"#FFFFFF",
//   // backgroundColor:"red",
//   shadowColor: "#FFFFFF",
//   shadowOffset: { width: -2, height: 4 },
//   shadowOpacity: 0.2,
//   shadowRadius: 3,
//   padding: 10,
//   marginTop: 10,
// },
// });

// export default App;
import * as React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
  Button,
  StatusBar,
  Platform,
} from "react-native";
import { List } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import Data from "./src/data/data";


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>FlatList and ScrollView</Text>
      </View>
      <View style={styles.header}>
        <View style={styles.header}>
          <Ionicons
            name="arrow-back-circle"
            style={{ flex: 1 }}
            size={20}
            color="green"
          />
          <Text
            style={{
              flex: 15,
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 14,
              lineHeight: 20,
            }}
          >
            Mon 02 Nov - Sun 08 Nov 2020 {"\n"}
            <Text style={{ color: "gray" }}> (3h 20m)</Text>
          </Text>
          <Ionicons
            name="arrow-forward-circle"
            style={{ flex: 1 }}
            size={20}
            color="green"
          />
        </View>
      </View>
      <FlatList data={Data} renderItem={renderItem} />
    </SafeAreaView>
  );
}

const renderItem = ({ item, index }) => {
  return (
    <View style={styles.content} key={index}>
      <List.Section>
        <List.Accordion
          title={<ViewTitleItem title={item.title} subtitle={item.subtitle} />}
        >
          <List.Item
            title={
              <View>
                 <Text style={{ color: "gray" }}>JobName: </Text>
                <Text style={{ flex: 1, fontWeight: "bold" }}>
                  {item.jobName}
                </Text>
              </View>
            }
          />
          <List.Item
            title={
              <ViewBodyItem
                leaveType={item.leaveType}
                timeAllowance={item.timeAllowance}
                Laha={item.Laha}
              />
            }
          />
          <List.Item
            title={
              <ViewBottomItem
                description={item.description}
                payrollNotes={item.payrollNotes}
              />
            }
          />
          <List.Item title={<ViewButtonItem />} />
        </List.Accordion>
      </List.Section>
    </View>
  );
};

const ViewTitleItem = ({ title, subtitle }) => (
  <View>
    <Text style={{ flex: 1, fontWeight: "bold" }}>
      {title}
      {"\n"}
      <Text style={{ color: "gray" }}>{subtitle}</Text>
    </Text>
  </View>
);

const ViewButtonItem = () => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-evenly",
      // flexWrap:'wrap'
    }}
  >
    <TouchableHighlight
      style={{
        height: 40,
        width: 136,
        borderRadius: 6,
        marginTop: 10,
        flex: 1,
      }}
    >
      <Button
        onPress={() => {}}
        title="SAVE"
        accessibilityLabel="Learn more about this button"
        color="#D00C04"
      />
    </TouchableHighlight>
    <TouchableHighlight
      style={{
        height: 40,
        width: 136,
        borderRadius: 6,
        marginTop: 10,
        marginLeft: 14,
        flex: 1,
      }}
    >
      <Button
        onPress={() => {}}
        title="Delete"
        accessibilityLabel="Learn more about this button"
        disabled={true}
      />
    </TouchableHighlight>
  </View>
);

const ViewBodyItem = ({ leaveType, timeAllowance, Laha }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
    }}
  >
    <Text style={{ color: "gray" }}>
      Leave Type: {"\n"}
      <Text style={{ color: "black", fontWeight: "bold", width: 319 }}>
        {leaveType}
      </Text>
    </Text>
    <Text style={{ color: "gray" }}>
      Time Allowance: {"\n"}
      <Text style={{ color: "black", fontWeight: "bold", width: 319 }}>
        {timeAllowance}
      </Text>
    </Text>
    <Text style={{ color: "gray" }}>
      LAHA: {"\n"}
      <Text style={{ color: "black", fontWeight: "bold", width: 319 }}>
        {Laha}
      </Text>
    </Text>
  </View>
);
const ViewBottomItem = ({ description, payrollNotes }) => (
  <View>
    <Text style={{ color: "gray" }}>Description</Text>
    <Text style={{ fontWeight: "bold" }}>{description}</Text>
    <Text style={{ color: "gray", marginTop: 20 }}>Payroll Notes</Text>
    <Text style={{ fontWeight: "bold" }}>{payrollNotes}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 319,
  },
  content: {
    backgroundColor: "#F6F6F6",
    width: 319,
    marginTop: 10,
  },
});
