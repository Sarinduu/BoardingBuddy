import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";
import { UserType } from '../../UserContext';

const CreateStoreForm = () => {
  const navigation = useNavigation();

  const { userId, setUserId } = useContext(UserType);
  const [formData, setFormData] = useState({
    userId: userId,
    storeAddress: '',
    businessType: '',
    storeName: '',
    storeDescription: '',
    storeImage: '',
    storeRating: '',
    storeEmail: '',
    storeHotline: '',
    openingHours: '',
    closingHours: '',
    isPremium: false
  });

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://172.20.10.2:8000/api/store/create-store', formData);
      alert("Store created successfully");
      navigation.navigate("merchantProfile");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container}>
        <Text style={styles.label}>Get Started</Text>

        <TextInput
          style={styles.input}
          placeholder="Store Address"
          onChangeText={(text) => setFormData({ ...formData, storeAddress: text })}
        />

        <TextInput
          style={styles.input}
          placeholder="Business Type"
          onChangeText={(text) => setFormData({ ...formData, businessType: text })}
        />

        <TextInput
          style={styles.input}
          placeholder="Store Name"
          onChangeText={(text) => setFormData({ ...formData, storeName: text })}
        />

        <TextInput
          style={styles.input}
          placeholder="Store Description"
          onChangeText={(text) => setFormData({ ...formData, storeDescription: text })}
        />

        <TextInput
          style={styles.input}
          placeholder="Store Email"
          onChangeText={(text) => setFormData({ ...formData, storeEmail: text })}
        />

        <TextInput
          style={styles.input}
          placeholder="Store Hotline"
          onChangeText={(text) => setFormData({ ...formData, storeHotline: text })}
        />

        <TextInput
          style={styles.input}
          placeholder="Opening Hours"
          onChangeText={(text) => setFormData({ ...formData, openingHours: text })}
        />

        <TextInput
          style={styles.input}
          placeholder="Closing Hours"
          onChangeText={(text) => setFormData({ ...formData, closingHours: text })}
        />

        <Button
          title="Create Store"
          onPress={handleSubmit}
          color="#1D3A70" // Set button text color
        />
        <TextInput
          
        />
        <TextInput
          
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
    color: '#1DAB87',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 40,
    padding: 10,
  },
});

export default CreateStoreForm;
