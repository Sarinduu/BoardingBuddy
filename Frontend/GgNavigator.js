import { StyleSheet, Image, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { useTheme } from "react-native-paper";

import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import FriendsScreen from "./screens/FriendsScreen";
import ChatsScreen from "./screens/ChatsScreen";
import ChatMessagesScreen from "./screens/ChatMessagesScreen";

import Boardings from "./screens/Boardings";
import FoodPlaces from "./screens/FoodPlaces";
import Profile from "./screens/Profile";

// const navigation = useNavigation();
// const route = useRoute();

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  const theme = useTheme();
  theme.colors.secondaryContainer = "#1DAB87";
  return (
    <Tab.Navigator
      activeColor="#1DAB87"
      inactiveColor="#ffffff"
      activeBackgroundColor="#ffffff"
      barStyle={{
        backgroundColor: "#1D3A70",

        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        position: "absolute",
        overflow: "hidden",
        left: 0,
        bottom: 0,
        right: 0,
        paddingTop: 5,
      }}
    >
      <Tab.Screen
        name="Boardings"
        component={StackNavigator1}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("./assets/house.png")}
              style={{ width: 25, height: 25 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="FoodPlaces"
        component={StackNavigator2}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("./assets/food.png")}
              style={{ width: 25, height: 25 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chats"
        component={StackNavigator3}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("./assets/chat.png")}
              style={{ width: 25, height: 25 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={StackNavigator4}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("./assets/user.png")}
              style={{ width: 25, height: 25 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function StackNavigator1() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Boarding_page"
        component={HomeScreen}
        options={{ title: "Boardings" }}
      />
      <Stack.Screen
        name="Messages1"
        component={ChatMessagesScreen}
        options={{ presentation: "modal" }}
      />
    </Stack.Navigator>
  );
}

function StackNavigator2() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FoodPlaces_page"
        component={FoodPlaces}
        options={{ title: "FoodPlaces" }}
      />
    </Stack.Navigator>
  );
}

function StackNavigator3() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Chat_page"
        component={ChatsScreen}
        options={{ title: "Chats" }}
      />
      <Stack.Screen name="Friends" component={FriendsScreen} />
      <Stack.Screen
        name="Messages2"
        component={ChatMessagesScreen}
        options={{ presentation: "modal" }}
      />
    </Stack.Navigator>
  );
}

function StackNavigator4() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile_page"
        component={Profile}
        options={{ title: "Profile" }}
      />
    </Stack.Navigator>
  );
}

const GgNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default GgNavigator;

const styles = StyleSheet.create({});
