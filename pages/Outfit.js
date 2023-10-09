import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';


const Outfit = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Today's Outfit</Text>
      <TouchableOpacity style={styles.generateButton}>
        <Text style={styles.generateButtonText}>Get New Outfit</Text>
      </TouchableOpacity>
      
      
    </View>
  );
}

export default Outfit;