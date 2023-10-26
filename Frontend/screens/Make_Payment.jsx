import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const MakePayment = () => {
    const navigation = useNavigation();
    const [selectedCard, setSelectedCard] = useState(null);
    const [cards, setCards] = useState([]);
    const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

    const handleCardSelection = (card) => {
        setSelectedCard((prevSelectedCard) =>
            prevSelectedCard === card ? null : card
        );
    };

    const handleDeleteCard = (cardId) => {
        // Send a DELETE request to the server to delete the card
        fetch(`http://192.168.1.13:8000/cards/${cardId}`, {
            method: 'DELETE',
        })
            .then((response) => {
                if (response.status === 204) {
                    // Card deleted successfully
                    fetchCards(); // Refresh the card list after deletion
                } else {
                    return response.json().then((data) => {
                        console.error('Error deleting card:', data.error);
                    });
                }
            })
            .catch((error) => {
                console.error('Error deleting card:', error);
            });
    };

    const handlePayment = () => {
        if (selectedCard) {
            const paymentUrl = 'http://192.168.1.13:8000/api/payments';
            const paymentData = {
                card: selectedCard,
                cardNumber: selectedCard.cardNumber,
            };
            fetch(paymentUrl, {
                method: 'POST',
                body: JSON.stringify(paymentData),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log('Payment Successful:', data);
                    setIsPaymentSuccessful(true);
                })
                .catch((error) => {
                    console.error('Error processing payment:', error);
                });
        }
    };

    const fetchCards = () => {
        const apiUrl = 'http://192.168.1.13:8000/api/cards';
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setCards(data);
            })
            .catch((error) => {
                console.error('Error fetching card details:', error);
            });
    };

    useEffect(() => {
        fetchCards();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()} 
                    style={styles.backButton}
                >
                    <FontAwesome name="arrow-left" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.header}>Make Payment</Text>
            </View>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Cards</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('CardDetails')}
                    style={styles.plusButton}
                >
                    <FontAwesome name="plus" size={20} color="blue" />
                </TouchableOpacity>
            </View>

            {cards.map((card, index) => (
                <View key={index} style={styles.cardContainer}>
                    <TouchableOpacity onPress={() => handleCardSelection(card)}>
                        <View style={styles.radio}>
                            {selectedCard === card && (
                                <View style={styles.radioDot} />
                            )}
                        </View>
                        <Text style={styles.cardNumber}>{card.cardNumber}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleDeleteCard(card._id)}
                        style={styles.deleteButton}
                    >
                        <FontAwesome name="trash" size={20} color="red" />
                    </TouchableOpacity>
                </View>
            ))}

            <TouchableOpacity
                style={[styles.makePaymentButton, { backgroundColor: '#1F9E28' }]}
                onPress={handlePayment}
                disabled={!selectedCard}
            >
                <Text style={styles.makePaymentButtonText}>Make Payment</Text>
            </TouchableOpacity>

            <Modal visible={isPaymentSuccessful} transparent={true}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Payment Successful!</Text>
                        <TouchableOpacity onPress={() => setIsPaymentSuccessful(false)}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    header: {
        fontSize: 24,
        padding: 10,
    },
    plusButton: {
        marginLeft: 100,
    },
    backButton: {
        marginRight: 80,
        marginTop: -300,
    },
    cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
        marginLeft: 20
    },
    radio: {
        width: 17,
        height: 17,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#007BFF',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    radioDot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#007BFF',
    },
    cardNumber: {
        fontSize: 15,
    },
    deleteButton: {
        marginLeft: 80,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 10,
    },
    modalText: {
        fontSize: 18,
        marginBottom: 10,
        textAlign: 'center',
    },
    makePaymentButton: {
        padding: 10,
        borderRadius: 5,
    },
    makePaymentButtonText: {
        color: 'white',
        fontSize: 18,
    },
    closeButtonText: {
        color: 'blue',
        fontSize: 18,
    },
});

export default MakePayment;
