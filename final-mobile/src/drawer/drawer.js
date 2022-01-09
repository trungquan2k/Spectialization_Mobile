import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import * as React from "react";
import { Button, View } from "react-native";

import CustomSidebarMenu from "./customSidebarMenu";
import { Ionicons } from "@expo/vector-icons";
import DashboardScreen from "../DashboardScreen";



const Drawer = createDrawerNavigator();

export default function DrawerApp() {
  return (
    // <View>
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContentOptions={{
        activeTintColor: "#e91e63",
        itemStyle: { marginVertical: 5 },
      }}
      drawerContent={(props) => <CustomSidebarMenu {...props} />}
    >
      <Drawer.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          drawerIcon: () => <Ionicons name="home-outline" size={20} color="black" />,
        }}
      />
      
    </Drawer.Navigator>
    // </View>
  );
}
// My Requisitions
// options={{
//     headerLeft: () => (
//       <Ionicons name="home" size={20} color="green" />
//       // <FontAwesome
//       //   name="bars"
//       //   size={20}
//       //   style={{paddingLeft:10, paddingRight:10}}
//       //   onPress={()=>navigation.openDrawer()}
//       // />
//     ),
//   }}
