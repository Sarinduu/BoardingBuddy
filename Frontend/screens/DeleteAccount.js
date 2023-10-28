import React, { useState ,useContext} from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { UserType } from "../UserContext";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";


const DeleteAccount = () => {
    const { userId,setUserRole} = useContext(UserType);
    const navigation = useNavigation();



  const deleteUser = async () => {
    try {
      const response = await fetch(`http://192.168.1.6:8000/api/user/deleteuser/${userId}`, {
        method: 'DELETE',
      });

      if (response.status === 204) {
        Alert.alert('User Deleted Successfully');
        setUserRole(null);
        AsyncStorage.clear();
        navigation.navigate("Login");

      } else if (response.status === 404) {
        Alert.alert('User not found');
      } else {
        const data = await response.json();
        Alert.alert(data.error);
      }
    } catch (error) {
      Alert.alert('An error occurred while deleting the user.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Delete Account</Text>
      <Button title="Delete Account" onPress={deleteUser} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default DeleteAccount;
