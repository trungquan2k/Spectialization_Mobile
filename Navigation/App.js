import * as React from "react";
import { Button, SafeAreaView, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from "../final-project/src/navigation/DrawerNavigation";

// const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
  );
}
