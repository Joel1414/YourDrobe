import React, {useEffect, useState} from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import styles from '../styles';
import {getItemImageUrlsOfType} from "../utils/OutfitGenerator";

const ClothingList = ({categoryTitle, onExit}) => {
    const [items, setItems] = useState([]);  // State to hold the items

    useEffect(() => {
        // Fetch the items and update the state
        const fetchItems = async () => {
            const fetchedItems = await getItemImageUrlsOfType(categoryTitle);
            console.log("Items: ", fetchedItems)
            setItems(fetchedItems);
        };

        fetchItems();
    }, [categoryTitle]);  // Effect runs when `categoryTitle` changes

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onExit}>
            <Image source={require('../icons/Icon_Exit.png')} style={styles.clothingExitButton} />
        </TouchableOpacity>
        <Text style={styles.clothingTitle}>{categoryTitle}</Text>
        
        <ScrollView contentContainerStyle={styles.clothingList}>
          {items.map((item, index) => (
            <View key={index} style={styles.clothingContainer}>
                <Image source={{uri: item}} style={styles.clothingImage}/>
            </View>
          ))}
        </ScrollView>
      </View>
    );
}


export default ClothingList;