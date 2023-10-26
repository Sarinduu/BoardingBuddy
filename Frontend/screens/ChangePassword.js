//import liraries
import React, { Component } from 'react';
import { View, TextInput, KeyboardAvoidingView, Platform, StyleSheet, Button } from 'react-native';

// create a component
const ChangePassword = () => {
    return (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}
        >
          <View style={styles.inner}>
            <TextInput
              placeholder="Username"
              style={styles.textInput}
            />
            <TextInput
              placeholder="Password"
              style={styles.textInput}
              secureTextEntry
            />
            <Button title="Submit" onPress={() => {}} />
          </View>
        </KeyboardAvoidingView>
      );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      inner: {
        padding: 24,
        flex: 1,
        justifyContent: "center",
      },
      textInput: {
        height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        marginBottom: 36,
      },
});

//make this component available to the app
export default ChangePassword;
