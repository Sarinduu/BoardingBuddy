//import liraries
import { StyleSheet, Image} from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { useTheme } from "react-native-paper";

import FoodPlaces from "../screens/FoodPlaces";
import Profile from "../screens/Profile";
import AccountInfo from "../screens/AccountInfo";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function TabNavigatorRestaurant() {
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
          name="FoodPlaces"
          component={FoodPlacesTabNavigations}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require("../assets/food.png")}
                style={{ width: 25, height: 25 }}
              />
            ),
          }}
        />
        
        <Tab.Screen
          name="Profile"
          component={ProfileTabNavigations}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require("../assets/user.png")}
                style={{ width: 25, height: 25 }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

// -- Restaurant foodpalce
  function FoodPlacesTabNavigations() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Tenant_FoodPlaces"
          component={FoodPlaces}
          options={{ title: "FoodPlaces" }}
        />
      </Stack.Navigator>
    );
  }
  

  // -- Restaurant profile
  function ProfileTabNavigations() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Tenant_Profile"
          component={Profile}
          options={{ title: "Profile" }}
        />
         <Stack.Screen
          name="accountinfo"
          component={AccountInfo}
          options={{ title: "AccountInfo" }}
        />
      </Stack.Navigator>
    );
  }
  
// create a component
const RestaurantNavigator = () => {
    return (
       <TabNavigatorRestaurant/>
    );
};

// define your styles
const styles = StyleSheet.create({
   
});

//make this component available to the app
export default RestaurantNavigator;
