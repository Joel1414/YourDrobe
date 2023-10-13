// styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(2, 9, 36, 1)', 
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
    backgroundColor: 'rgba(112, 191, 157, 1)', 
    padding: 10,
    borderRadius: 20,
    alignSelf: 'center',
    marginBottom: 20,
    position: 'absolute',
    bottom: 50,
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  generateButtonText: {
    color: '#FFF',
    fontSize: 18
  },

  addButton: {
    backgroundColor: 'rgba(112, 191, 157, 1)', 
    padding: 10,
    borderRadius: 100,
    alignSelf: 'center',
    marginBottom: 20,
    position: 'absolute',
    bottom: 50,
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center'
  },

  tabsContainer: {
    backgroundColor: 'rgba(16, 25, 44, 1)',
    top: '40%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 10,
    padding: 20,
},

  tabContainer: {
    width: '48%',       // Adjust based on the desired spacing
    height: 150,        // Adjust height as needed
    backgroundColor: 'rgba(39, 43, 60, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,   // Spacing between rows
    borderRadius: 10,
  },

  icon: {
    width: 100,
    height: 100,
    tintColor: '#FFF',
    marginBottom: 5,
  },
  categoryName: {
    color: '#FFF',
    fontSize: 16,
  },

  

});

export default styles;
