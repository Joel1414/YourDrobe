// styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(2, 9, 36, 1)', 
    alignItems: 'center',
    justifyContent: 'center',
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


  generateButton: {
    backgroundColor: 'rgba(112, 191, 157, 1)', 
    padding: 10,
    borderRadius: 20,
    alignSelf: 'center',
    marginBottom: 20,
    position: 'absolute',
    bottom: 10,
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  generateButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold'
    
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 10,
    padding: 20,
    bottom: 50,
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

  toggleGroup: {
    flex: 1,
    justifyContent: 'center', // this centers the children vertically
    alignItems: 'center', // this centers the children horizontally
  },

  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderWidth: 1,
    borderColor: 'gray', // or any desired separator color
    maxWidth: '90%',
    minWidth: '90%',

    marginVertical: 10,
    borderRadius: 15,
    backgroundColor: 'rgba(30, 34, 53, 1)',
  },
  textContainer: {
    maxWidth: '75%' // ensures there's room for the switch
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  description: {
    marginTop: 5,
    fontSize: 14,
    color: 'white'
  },

  closeCameraButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    padding: 10,
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderRadius: 5
  },
  
  closeButtonText: {
    fontSize: 16,
    color: '#000'
  },

  weatherContainer: {
    position: 'absolute',
    width: 200,
    top: '10%',
    right: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderRadius: 20
  },

  weatherButton: {
    position: 'absolute',
    top: '5%',
    right: '10%',
    padding: 10,
    borderRadius: 5,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 20,
    alignSelf: 'center',
    position: 'absolute',
    top: 150,
    left: 100,
  },

  exitButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  exitIcon: {
    width: 50,
    height: 50
  },
  itemText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  photo: {
    width: 300,
    height: 350,
    borderRadius: 20,
    padding: 200,
    marginTop: 50
  },

  reCaptureButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
    height: 40,
    backgroundColor: 'rgba(44, 48, 66, 1)',
    borderRadius: 30,
    marginTop: 20,
    padding: 10,
  },

  reCaptureIcon: {
    width: 30,
    height: 30,

  },

  input: {
    padding: 10,
    width: 200,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: 'rgba(33, 37, 56, 1)',
    borderRadius: 20,
    color: 'white',
  },


  labelContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(30, 34, 53, 1)',
    alignItems: 'center',
    maxHeight: 50,
    borderRadius: 20
},

label: {
    backgroundColor: '#333333',
    borderRadius: 15,
    padding: 10,
    margin: 5,
    marginLeft: 10,
},

labelSelected: {
    backgroundColor: '#4B99A9',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
    marginLeft: 10,
},
labelText: {
    color: '#FFFFFF',
},
doneButton: {
    backgroundColor: 'rgba(112, 191, 157, 1)',
    borderRadius: 20,
    padding: 15,
    width: 200,
    alignItems: 'center',
    top: 50,
},

doneButton2: {
  backgroundColor: 'rgba(112, 191, 157, 1)',
  borderRadius: 20,
  padding: 15,
  width: 200,
  alignItems: 'center',
  position: 'relative',
  bottom: 20,
},

doneButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
},

headerText: {
  fontSize: 18,
  color: '#FFFFFF',
  marginBottom: 10,
},

photo2: {
  width: 175,
  height: 225,
  borderRadius: 20,
  padding: 130,
  marginTop: 50
},

imageNameText: {
  fontSize: 20,
  color: '#FFFFFF',
  marginVertical: 20,
  position: 'relative', 
  top: 60,
  right: '20%'
},

outfitItemContainer: {
  flexDirection: 'row',      // To align image, text, and icons horizontally
  alignItems: 'center',      // To vertically center everything in the row
  padding: 10,
  borderWidth: 1,     // Adds a line below each item for separation
  borderColor: '#d3d3d3',  // Color of the separation line
  margin: 10,          // Margin at the bottom of each item
  backgroundColor: 'rgba(39, 43, 60, 1)',
  borderRadius: 20,
},

outfitItemInnerContainer : {
  flexDirection: 'column',
  alignItems: 'center',
  flex: 1,
},

outfitItemImage: {
  width: 120,     
  height: 120,    
  marginRight: 10, 
  backgroundColor: 'rgb(54, 57, 74)',
  borderRadius: 20,
},

outfitItemText: {
  flex: 1,       
  fontSize: 22,
  fontWeight: 'bold',
  color: '#FFF',
  top: 10,

},

outfitIconContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  bottom: 20,
  
},

outfitItemInfoIcon: {
  width: 40,     
  height: 40,   
  marginLeft: 10, 
},



});




export default styles;
