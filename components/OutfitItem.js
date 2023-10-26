import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles'; 

const OutfitItem = ({ item, onRefresh, onFavorite, onInfo }) => {
    return (
        <View style={styles.outfitItemContainer}>
            <Image source={{ uri: item.base64Data }} style={styles.outfitItemImage} />
            <View style={styles.outfitItemInnerContainer}>
                <Text style={styles.outfitItemText}>{item.name}</Text>
                <View style={styles.outfitIconContainer}>
                    <TouchableOpacity onPress={onRefresh}>
                        <Image source={require('../icons/Icon_Refresh.png')} style={styles.outfitItemInfoIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onFavorite}>
                        <Image source={require('../icons/Favorite.png')} style={styles.outfitItemInfoIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onInfo}>
                        <Image source={require('../icons/Information.png')} style={styles.outfitItemInfoIcon} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default OutfitItem;





