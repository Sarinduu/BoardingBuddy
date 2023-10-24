import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Button, ScrollView,Pressable } from 'react-native';
import Modal from 'react-native-modal'; // Import Modal from react-native-modal
import { launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native'; 

const Get_LL_boardings = () => {
  const navigation = useNavigation();
  const [boardings, setBoardings] = useState([]);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);

  // State to store the success message
  const [successMessage, setSuccessMessage] = useState('');




  const handleViewPress = (id) => {
    console.log("id", id);
    navigation.navigate('view_Boarding', { boarding: id });
  };


  useEffect(() => {
    // Fetch boardings from the backend API when the component mounts
    fetchBoardings();
  }, []);

  const fetchBoardings = async () => {
    try {
      const response = await fetch('http://192.168.1.13:8000/api/boardings');
      if (response.ok) {
        const data = await response.json();
        setBoardings(data);
      } else {
        console.error('Failed to fetch boardings');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const handleUpdatePress = (item) => {
    // Implement navigation or logic to update the selected boarding
    // You can navigate to the update screen or show a modal, for example.
    // Example: navigation.navigate('UpdateBoarding', { boarding: item });
  };

  const handleDeletePress = async (item) => {
    try {
      const response = await fetch(`http://192.168.1.13:8000/api/boardings/${item._id}`, {
        method: 'DELETE',
      });

      if (response.status === 204) {
        // Boarding data deleted successfully
        setSuccessMessage('Boarding data deleted successfully');
        setIsSuccessModalVisible(true);
        // You can update your UI or take any other necessary action here
        // For example, you can fetch the updated boardings list by calling fetchBoardings()
        fetchBoardings();
      } else {
        // Handle errors, e.g., display an error message to the user
        console.error('Error deleting boarding data');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  // Function to hide the success message modal
  const hideSuccessMessage = () => {
    setIsSuccessModalVisible(false);
    setSuccessMessage('');
  };

  const renderBoardingItem = ({ item }) => (
    <Pressable style={styles.boardingItem} onPress={() => handleViewPress(item._id)}>
      <Image source={{ uri: item.image }} style={styles.boardingImage} />
      <ScrollView style={styles.boardingDetails}>
        <Text style={styles.boardingText}>Location: {item.boardingLocation}</Text>
        <Text style={styles.boardingText}>Gender: {item.gender}</Text>
        <Text style={styles.boardingText}>Price: Rs.{item.price}</Text>
        <Text style={styles.boardingText}>Description: {item.description}</Text>
      </ScrollView>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      {/* Header Text */}
     

      <FlatList
        data={boardings}
        keyExtractor={(item) => item._id} 
        renderItem={renderBoardingItem}
      />

      {/* Success message modal */}
      <Modal isVisible={isSuccessModalVisible}>
        <View style={styles.successModal}>
          <Text>{successMessage}</Text>
          <Button title="OK" onPress={hideSuccessMessage} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    padding: 10,
    marginTop:40,
    marginLeft:100
  },
  boardingItem: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  boardingImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  boardingDetails: {
    flex: 1,
    marginLeft: 10,
  },
  boardingText: {
    fontSize: 16,
  },
  buttonContainer: {
    justifyContent: 'flex-end',
  },
  successModal: {
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
  },
});

export default Get_LL_boardings;
