import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { UserContext } from "./UserContext";
import GgNavigator from "./GgNavigator";
import StackNavigator from "./StackNavigator";
import TabNavigator from "./TabNavigator";
export default function App() {
  
  return (
    <>
      <UserContext>
        <GgNavigator/>
        {/* <TabNavigator/> */}
        {/* <StackNavigator/> */}
      </UserContext>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
