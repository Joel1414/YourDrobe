import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import styles from '../styles';

const ClothingList = ({ categoryTitle, items, onExit }) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onExit}>
            <Image source={require('../icons/Icon_Exit.png')} style={styles.clothingExitButton} />
        </TouchableOpacity>
        <Text style={styles.clothingTitle}>{categoryTitle}</Text>
        
        <ScrollView contentContainerStyle={styles.clothingList}>
          {items.map((item, index) => (
            <View key={index} style={styles.clothingContainer}>
              <Image source={{ uri: item.imageURI }} style={styles.clothingImage} />
            </View>
          ))}
        </ScrollView>
      </View>
    );
}

export default ClothingList;