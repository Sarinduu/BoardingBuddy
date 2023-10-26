import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import DropDownPicker from "react-native-dropdown-picker";

const RegisterScreen = () => {
  const [username, setusername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  //-------
  const [open, setOpen] = useState(false);
  //const [value, setValue] = useState(null);

  const [items, setItems] = useState([
    { label: 'Tenant', value: 'tenant' },
    { label: 'Restaurant', value: 'restaurant' },
    { label: 'Landlord', value: 'landlord' }
  ]);
  //-------

  // const [image, setImage] = useState("");
  const navigation = useNavigation();
  const handleRegister = () => {
    const user = {
      name: name,
      username: username,
      password: password,
      role: role,
    };

    // send a POST  request to the backend API to register the user
    axios
      .post("http://192.168.1.5:8000/api/user/register", user)
      .then((response) => {
        console.log(response);
        Alert.alert(
          "Registration successful",
          "You have been registered Successfully"
        );
        setName("");
        setusername("");
        setPassword("");
        setRole("");
        // setImage("");
      })
      .catch((error) => {
        Alert.alert(
          "Registration Error",
          "An error occurred while registering"
        );
        console.log("registration failed", error);
      });
  };
  return (
    <View style={styles.container}>
    <KeyboardAvoidingView>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Create your account</Text>

       
      </View>

      <View style={{ marginTop: 20 }}>
        <View style={{ marginTop: 10 }}>
         

          <TextInput
            value={name}
            onChangeText={(text) => setName(text)}
            style={styles.input}
            placeholderTextColor="#a6a6a6"
            placeholder="Name"
          />
        </View>

        <View style={{ marginTop: 10, zIndex:10 }}>
        

          <DropDownPicker
        open={open}
        value={role}
        items={items}
        setOpen={setOpen}
        setValue={setRole}
        setItems={setItems}
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdownContainer}
        textStyle={styles.textStyle}
        placeholderTextColor="#a6a6a6"
        placeholder="Type"
      />
        </View>

        <View style={{ marginTop: 10 }}>
         
          <TextInput
            value={username}
            onChangeText={(text) => setusername(text)}
            style={styles.input}
            placeholderTextColor="#a6a6a6"
            placeholder="username"
          />
        </View>

        <View style={{ marginTop: 10 }}>
         

          <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            style={styles.input}
            placeholderTextColor="#a6a6a6"
            placeholder="Password"
          />
        </View>

        <Pressable onPress={handleRegister} style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>

        <Pressable onPress={() => navigation.goBack()} style={{ marginTop: 40 }}>
          <Text style={styles.signUpText}>Already Have an account? <Text style={{ color: '#1DAB87' }}>Sign In</Text></Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
  },
  titleContainer: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: '#1D3A70',
    fontSize: 24,
    fontWeight: '700',
  },
  subTitleText: {
    fontSize: 17,
    fontWeight: '600',
    marginTop: 15,
    color: 'gray',
  },
  inputLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: 'gray',
  },
  input: {
    fontSize: 18,
    
    marginVertical: 10,
    width: 320,
    height: 50,
    padding: 10, // Add padding to the input field
    borderRadius: 10, // Add rounded corners
    color: 'black',
    backgroundColor: 'rgba(74, 85, 162, 0.1)', // Add a light background color
  },
  button: {
    width: 200,
    backgroundColor: '#1D3A70', // Updated button background color
    padding: 15,
    marginTop: 50,
    alignSelf: 'center', // Use alignSelf instead of marginLeft and marginRight
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  signUpText: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold'
  },
  
  dropdown: {
    backgroundColor: 'rgba(74, 85, 162, 0.1)',
    borderRadius: 10,
    height: 50,
    width:320,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth:0,
   
  },
  dropdownContainer: {
    maxHeight: 200,
    borderRadius: 10,
    borderWidth:0,
   
    backgroundColor: '#ffffff',
  },
  textStyle: {
    fontSize: 16,
    color: '#a6a6a6',
  },
});
