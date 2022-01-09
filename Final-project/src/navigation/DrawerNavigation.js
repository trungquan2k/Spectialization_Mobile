import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";



import CustomSidebarMenu from "../components/customSidebarMenu";
import { Ionicons } from "@expo/vector-icons";
import BottomTabNavigator from "./TabNavigation";
// import CentreScreen from "../screens/CentreScreen";
// import ProfileScreen from "../screens/ProfileScreen";
// import DashboardScreen from "../screens/DashBoardScreen";
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Application"
            drawerContentOptions={{
                activeTintColor: "#e91e63",
                itemStyle: { marginVertical: 5 },
            }}
            drawerContent={(props) => <CustomSidebarMenu {...props} />}
        >
            <Drawer.Screen
                name="Application"
                component={BottomTabNavigator}
                options={{
                    headerShown:false,
                    drawerIcon: () => <Ionicons name="home-outline" size={20} color="black" />,
                }} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;