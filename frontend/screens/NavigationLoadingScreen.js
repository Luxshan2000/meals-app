import React, { useState } from 'react';
import { View, Text, Modal, ActivityIndicator, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';


const NavigationLoadingScreen = () => {
    const visible = useSelector((state)=> state.favouriteMeals.isloading)
    return (
      <Modal
        animationType="fade" // You can adjust the animation type as per your preference
        transparent={true}
        visible={true}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ActivityIndicator size="large" color="blue" />
            <Text>Loading...</Text>
          </View>
        </View>
      </Modal>
    );
  };
  
export default NavigationLoadingScreen

const styles = StyleSheet.create( {
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    modalContent: {
      backgroundColor: 'lightgray',
      padding: 20,
      borderRadius: 10,
      alignItems: 'center',
      width:'60%'
    },
  });
  
