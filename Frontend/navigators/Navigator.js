import React from "react";
import { StyleSheet} from "react-native";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

import TenantNavigator from "./TenantNavigator";
import RestaurantNavigator from "./RestaurantNavigator";
import LandlordNavigator from "./LandlordNavigator";

const Stack = createNativeStackNavigator();

// -------------------- # Main Stack # --------------------
const Navigator = () => {
  return (
    <NavigationContainer>
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
          component={UserSelection}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigator;
const styles = StyleSheet.create({});


// --------------------  Get the user's role and provide appropriate tab navigation   --------------------
function UserSelection() {
  const [role, setRole] = useState("default");

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const urole = await AsyncStorage.getItem("urole");
        setRole(urole);
        console.log("this role" + role);
      } catch (error) {
        console.log("error", error);
      }
    };

    checkLoginStatus();
  }, [role]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabselecter"
        component={
          role === "tenant" ? TenantNavigator
            : role === "restaurant" ? RestaurantNavigator
            : role === "landlord" ? LandlordNavigator
            : role === "default" ? LoginScreen
            : null
        }
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}