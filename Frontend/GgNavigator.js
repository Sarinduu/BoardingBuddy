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
//merchant screens
import CreateStoreForm from "./screens/Merchant/CreateStoreScreen";
import AddItemToMenu from "./screens/Merchant/AddMenuItem";
import merchantProfile from "./screens/Merchant/MerchantProfile";
import Menu from "./screens/Merchant/Menu";
import PremiumPage from "./screens/Merchant/PremiumPage";
import PremiumIntroPage from "./screens/Merchant/PremiumIntroPage";
import Store from "./screens/Merchant/Stores";
import StoreDetails from "./screens/Merchant/StoreDetails";
import StoreReviews from "./screens/Merchant/StoreReviews";
import EditStoreImage from "./screens/Merchant/EditStoreProfileImage";

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
        name="Home"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Store"
        component={Store}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
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
        name="FoodPlaces"
        component={StoreStack}
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
        name="Premium"
        component={PremiumStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("./assets/favorite.png")}
              style={{ width: 25, height: 25 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={MerchantStack}
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

function StoreStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
          name="Stores"
          component={Store}
          options={{ title: "Stores" }}
        />
        <Stack.Screen
          name="StoreDetails"
          component={StoreDetails}
          options={{ title: "StoreDetails" }}  
        />
        <Stack.Screen
          name="StoreReviews"
          component={StoreReviews}
          options={{ title: "StoreReviews" }}
          />
    </Stack.Navigator>
  );
}

function MerchantStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
          name="merchantProfile"
          component={merchantProfile}
          options={{ title: "merchantProfile" }}
        />
         <Stack.Screen
          name="Menu"
          component={Menu}
          options={{ title: "Menu" }}
        />
        <Stack.Screen
          name="AddItemToMenu"
          component={AddItemToMenu}
          options={{ title: "AddItemToMenu" }} 
        />
         <Stack.Screen
          name="CreateStoreForm"
          component={CreateStoreForm}
          options={{ title: "AddItemToMenu" }} 
        />
        <Stack.Screen
          name="StoreReviews"
          component={StoreReviews}
          options={{ title: "StoreReviews" }} 
        />
        <Stack.Screen
          name="PremiumIntroPage"
          component={PremiumIntroPage}
          options={{ title: "PremiumIntroPage" }}
        />
        <Stack.Screen
          name="EditStoreImage"
          component={EditStoreImage}
          options={{ title: "EditStoreImage" }}
        />
    </Stack.Navigator>
  );
}

function PremiumStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
          name="PremiumIntroPage"
          component={PremiumIntroPage}
          options={{ title: "PremiumIntroPage" }}
        />
        <Stack.Screen
          name="PremiumPage"
          component={PremiumPage}
          options={{ title: "PremiumPage" }}
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
