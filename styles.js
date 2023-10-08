// styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E', 
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 20,
    alignSelf: 'center',
    position: 'absolute',
    top: 50
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15
  },
  itemImage: {
    width: 60,
    height: 60,
    marginRight: 10
  },
  itemText: {
    color: '#FFF'
  },

  generateButton: {
    backgroundColor: '#5A3E85', 
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
    marginBottom: 20,
    position: 'absolute',
    bottom: 90
  },
  generateButtonText: {
    color: '#FFF',
    fontSize: 18

  },
  

});

export default styles;
