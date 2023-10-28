import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';

const Store = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://172.20.10.2:8000/api/store/get-all-stores');
        setStores(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {stores.map((store, index) => (
        <View style={styles.storeContainer} key={index}>
          <Image source={{uri: store.storeImage}} style={styles.image} />

        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.heading}>{store.storeName}</Text>
          <Text style={styles.rightText}>{store.storeRating}</Text>
        </View>
          <Text style={styles.description}>{store.storeAddress}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.additionalText}>Open: {store.openingHours}</Text>
          <Text style={styles.additionalText}>-{store.closingHours}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  storeContainer: {
    width: '90%',
    marginTop: 15,
    borderRadius: 15,
    backgroundColor: 'white',
    padding: 10,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 18,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  rightText: {
    fontSize: 16,
    alignSelf: 'flex-end',
    marginStart: 'auto',
  },
  description: {
    fontSize: 16,
    marginTop: 10,
  },
  additionalText: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default Store;
