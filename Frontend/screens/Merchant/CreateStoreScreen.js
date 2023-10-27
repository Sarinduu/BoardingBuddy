import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from "@react-navigation/native";

const navigation = useNavigation();

const CreateStoreForm = () => {
  const [formData, setFormData] = useState({
    userId: "1122020202",
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
  });

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://192.168.1.2:8000/create-store', formData);
      console.log(response.data);
      navigation.navigate("StoreDetails");
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
        style={styles.buttonContainer}
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
    inputLabel: {
        fontSize: 16,
        color: 'gray', 
        marginBottom: 5,
      },
    label: {
      fontSize: 20,
      marginBottom: 10,
      textAlign: 'center',
      color: '#1DAB87',
      textDecorationStyle: 'solid',
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 40,
      padding: 10,
    },
    buttonContainer: {
        backgroundColor: '#1D3A70',
        height: 30, 
        padding: 5,
      }
  });

export default CreateStoreForm;
