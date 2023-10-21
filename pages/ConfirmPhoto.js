import React, { useState } from 'react';
import { View, TextInput, Image, Button, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const ConfirmPhoto = ({ photo, onRetake, onConfirm, onExit }) => {
  const [itemName, setItemName] = useState('');

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <TouchableOpacity style={styles.exitButton} onPress={onExit}>
        <Image source={require('../icons/Icon_Exit.png')} style={styles.exitIcon}/>
      </TouchableOpacity>
      <Image source={{ uri: photo }} style={styles.photo} />
      <TouchableOpacity style={styles.reCaptureButton} onPress={onRetake}>
        <Image source={require('../icons/Icon_Capture.png')} style={styles.reCaptureIcon}/>
        <Text style={{color: 'white', }}>Re-Capture</Text>
      </TouchableOpacity>
      <TextInput
        value={itemName}
        onChangeText={setItemName}
        placeholder="Item Name"
        style={styles.input}
      />
      <TouchableOpacity style={styles.doneButton} onPress={() => onConfirm(itemName)}>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ConfirmPhoto;
