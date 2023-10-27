// //import liraries
// import { StyleSheet, Image} from "react-native";
// import React from "react";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// import { useTheme } from "react-native-paper";

// import HomeScreen from "../screens/HomeScreen";
// import FriendsScreen from "../screens/FriendsScreen";
// import ChatsScreen from "../screens/ChatsScreen";
// import ChatMessagesScreen from "../screens/ChatMessagesScreen";

// import Profile from "../screens/Profile";
// import AccountInfo from "../screens/AccountInfo";

// const Stack = createNativeStackNavigator();
// const Tab = createMaterialBottomTabNavigator();


// function TabNavigatorLandlord() {
//     const theme = useTheme();
//     theme.colors.secondaryContainer = "#1DAB87";
//     return (
//       <Tab.Navigator
//         activeColor="#1DAB87"
//         inactiveColor="#ffffff"
//         activeBackgroundColor="#ffffff"
//         barStyle={{
//           backgroundColor: "#1D3A70",
  
//           borderTopLeftRadius: 20,
//           borderTopRightRadius: 20,
//           position: "absolute",
//           overflow: "hidden",
//           left: 0,
//           bottom: 0,
//           right: 0,
//           paddingTop: 5,
//         }}
//       >
//         <Tab.Screen
//           name="My Boarding"
//           component={BoardingTabNavigations}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <Image
//                 source={require("../assets/house.png")}
//                 style={{ width: 25, height: 25 }}
//               />
//             ),
//           }}
//         />
       
//         <Tab.Screen
//           name="Chats"
//           component={ChatTabNavigations}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <Image
//                 source={require("../assets/chat.png")}
//                 style={{ width: 25, height: 25 }}
//               />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Profile"
//           component={ProfileTabNavigations}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <Image
//                 source={require("../assets/user.png")}
//                 style={{ width: 25, height: 25 }}
//               />
//             ),
//           }}
//         />
//       </Tab.Navigator>
//     );
//   }

// // -- Landlord boarding
//   function BoardingTabNavigations() {
//     return (
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Tenant_Boarding"
//           component={HomeScreen}
//           options={{ title: "Boardings" }}
//         />
//         <Stack.Screen
//           name="Messages1"
//           component={ChatMessagesScreen}
//           options={{ presentation: "modal" }}
//         />
//       </Stack.Navigator>
//     );
//   }

  
// // -- Landlord chat
//   function ChatTabNavigations() {
//     return (
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Tenant_Chat"
//           component={ChatsScreen}
//           options={{ title: "Chats" }}
//         />
//         <Stack.Screen name="Friends" component={FriendsScreen} />
//         <Stack.Screen
//           name="Messages2"
//           component={ChatMessagesScreen}
//           options={{ presentation: "modal" }}
//         />
//       </Stack.Navigator>
//     );
//   }

//   // -- Landlord profile
//   function ProfileTabNavigations() {
//     return (
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Tenant_Profile"
//           component={Profile}
//           options={{ title: "Profile" }}
//         />
//          <Stack.Screen
//           name="accountinfo"
//           component={AccountInfo}
//           options={{ title: "AccountInfo" }}
//         />
//       </Stack.Navigator>
//     );
//   }
  

// // create a component
// const LandlordNavigator = () => {
//     return (
//        <TabNavigatorLandlord/>
//     );
// };

// // define your styles
// const styles = StyleSheet.create({});

// //make this component available to the app
// export default LandlordNavigator;
