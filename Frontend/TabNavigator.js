import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Boardings from "./screens/Boardings";
import FoodPlaces from "./screens/FoodPlaces";
import ChatsScreen from "./screens/ChatsScreen";
import Profile from "./screens/Profile";

const TabNavigator = () => {
  const Tab = createMaterialBottomTabNavigator();
  return(  
    <NavigationContainer>
    <Tab.Navigator>
        <Tab.Screen name="Boardings" component={Boardings}/>
        <Tab.Screen name="FoodPlaces" component={FoodPlaces} />
        <Tab.Screen name="Chats" component={ChatsScreen}/>
        <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
    </NavigationContainer>
    );
};

export default TabNavigator;

const styles = StyleSheet.create({});
