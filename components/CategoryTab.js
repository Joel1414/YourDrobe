import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../styles';

const ICONS = {
  Tops: require('../bigIcons/Tops.png'),
  Bottoms: require('../bigIcons/Bottoms.png'),
  Accessories: require('../bigIcons/Accessories.png'),
  Shoes: require('../bigIcons/Shoes.png'),
};

const CategoryTab = ({ category, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.tabContainer}>
      <Image source={ICONS[category]} style={styles.icon} />
      <Text style={styles.categoryName}>{category}</Text>
    </TouchableOpacity>
  );
};

export default CategoryTab;