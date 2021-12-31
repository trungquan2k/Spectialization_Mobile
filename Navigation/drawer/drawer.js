import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import * as React from "react";
import { Button, View } from "react-native";
import HomeScreen from "../screen/homScreen";
import myProfileScreen from "../screen/myProfileScreen";
import EmployeeBenefitScreen from "../screen/employeeBenefitScreen";
import CustomSidebarMenu from "./customSidebarMenu";
import { Ionicons } from "@expo/vector-icons";
import MyRequisitionScreen from "../screen/myRequisitionsScreen";
import LinkScreen from "../screen/linkScreen";
import ContactScreen from "../screen/contactUsScreen";

import MyTabs from "../components/bottomsTab";


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
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: () => <Ionicons name="home-outline" size={20} color="black" />,
        }}
      />
      <Drawer.Screen
        name="My Profile"
        component={myProfileScreen}
        options={{
          drawerIcon: () => <Ionicons name="person-outline" size={20} color="black" />,
        }}
      />
      <Drawer.Screen
        name="Employee Benefits"
        component={EmployeeBenefitScreen}
        options={{
          drawerIcon: () => <Ionicons name="heart-outline" size={20} color="black" />,
        }}
      />
      <Drawer.Screen
        name="My Requisition"
        component={MyRequisitionScreen}
        options={{
          drawerIcon: () => <Ionicons name="cart-outline" size={20} color="black" />,
        }}
      />
      <Drawer.Screen
        name="Link"
        component={LinkScreen}
        options={{
          drawerIcon: () => <Ionicons name="link-outline" size={20} color="black" />,
        }}
      />
      <Drawer.Screen
        name="Contact Us"
        component={ContactScreen}
        options={{
          drawerIcon: () => <Ionicons name="phone-portrait-outline" size={20} color="black" />,
        }}
      />
      <Drawer.Screen
        name="Site Event"
        component={MyTabs}
        options={{
          drawerIcon: () => <Ionicons name="phone-portrait-outline" size={20} color="black" />,
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
