import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { UserType } from "../UserContext";

const LL_boardings = () => {
  const { userId, setUserId } = useContext(UserType);

  const navigation = useNavigation();
  const [boardingLocation, setBoardingLocation] = useState("");
  const [gender, setGender] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleAddBoarding = async () => {
    try {
      const response = await axios.post(
        "http://192.168.1.13:8000/api/boardings",
        {
          boardingLocation,
          gender,
          price,
          description,
          image,
          userId,
        }
      );

      console.log("Boarding added:", response.data);
      navigation.navigate("MakePayment");
    } catch (error) {
      console.error("Error adding boarding:", error);
    }
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        
      </View>

      <Text style={styles.text2}>Boarding Location</Text>
      <TextInput
        style={styles.inputField}
        placeholder="Boarding Location"
        value={boardingLocation}
        onChangeText={(text) => setBoardingLocation(text)}
      />

      <Text style={styles.text}>Gender</Text>
      <Text style={styles.text2}>Gender</Text>
      <View style={styles.radioButtons}>
        <TouchableOpacity
          style={[
            styles.radioButton,
            gender === "Male" ? styles.selectedRadioButton : {},
          ]}
          onPress={() => setGender("Male")}
        >
          <Text>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.radioButton,
            gender === "Female" ? styles.selectedRadioButton : {},
          ]}
          onPress={() => setGender("Female")}
        >
          <Text>Female</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.radioButton,
            gender === "Other" ? styles.selectedRadioButton : {},
          ]}
          onPress={() => setGender("Other")}
        >
          <Text>Other</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.text}>Price</Text>
      <TextInput
        style={styles.inputField}
        placeholder="Price"
        value={price}
        onChangeText={(text) => setPrice(text)}
      />

      <Text style={styles.text}>Description</Text>
      <TextInput
        style={styles.inputField}
        placeholder="Description"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />

      <Text style={styles.text}>Image</Text>
      <TextInput
        style={styles.inputField}
        placeholder="Image URL"
        value={image}
        onChangeText={(text) => setImage(text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleAddBoarding}>
        <Text style={styles.buttonText}>Add Boarding</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  header: {
    marginTop: -230,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  text: {
    marginRight: 250,
    alignItems: "right",
    justifyContent: "center",
  },
  text2: {
    marginRight: 185,
  },
  backwardIcon: {
    position: "absolute",
    top: -20,
    right:10,
    marginRight:200
  },
  inputField: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: "#4BC56A",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  radioButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
    marginRight: 75,
  },
  radioButton: {
    marginRight: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  selectedRadioButton: {
    backgroundColor: "#4BC56A",
    borderColor: "#4BC56A",
  },
});

export default LL_boardings;
