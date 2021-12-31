import * as React from "react";
import { Button, SafeAreaView, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import DrawerApp from "./drawer/drawer";

// const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <DrawerApp />
      </NavigationContainer>
  );
}
