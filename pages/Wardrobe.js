import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';
import { Image } from 'react-native';


const Wardrobe = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Wardrobe</Text>
      <TouchableOpacity style={styles.addButton}>
      <Image source={require('../bigIcons/Plus2.png')} style={{ width: 100, height: 100  }} />
      
      </TouchableOpacity>
      
    </View>
  );
}

export default Wardrobe;