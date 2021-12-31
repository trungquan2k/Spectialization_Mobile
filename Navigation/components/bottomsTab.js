import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
const Tab = createBottomTabNavigator();
import { Ionicons } from "@expo/vector-icons";

function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile!</Text>
    </View>
  );
}

function Plant() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Notifications!</Text>
    </View>
  );
}


function SiteEvent() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Site Event!</Text>
      </View>
    );
  }

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon:() => <Ionicons name="home-outline" size={20} color="black" />,
        }}
      />
      <Tab.Screen
        name="Plant"
        component={Plant}
        options={{
          headerShown: false,
          tabBarIcon:() => <Ionicons name="settings" size={20} color="black" />,
        }}
      />
      <Tab.Screen
        name="Site Event"
        component={SiteEvent}
        options={{
          headerShown: false,
          tabBarIcon:() => <Ionicons name="calendar" size={20} color="black" />,
        }}
      />
      <Tab.Screen
        name="Link"
        component={SiteEvent}
        options={{
          headerShown: false,
          tabBarIcon:() => <Ionicons name="link" size={20} color="black" />,
        }}
      />
      <Tab.Screen
        name="Contact Us"
        component={SiteEvent}
        options={{
          headerShown: false,
          tabBarIcon:() => <Ionicons name="md-phone-landscape-outline" size={20} color="black" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
