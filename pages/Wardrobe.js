import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import styles from '../styles';
import CategoryTab from '../components/CategoryTab';
import Item from '../utils/Item';
import ConfirmPhoto from './ConfirmPhoto'; 
import LabelPage from './LabelPage'; // Importing the LabelPage component
import ClothingList from '../components/ClothingList'; // Importing the ClothingList component

const Wardrobe = () => {
  const [cameraOpen, setCameraOpen] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [photoData, setPhotoData] = useState(null);
  const [photoName, setPhotoName] = useState(null);
  const [showLabelPage, setShowLabelPage] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null); // New state to track the active category

  const itemsForCategory = {
      Tops: [], // Array of items for Tops
      Bottoms: [], // Array of items for Bottoms
      Accessories: [], // Array of items for Accessories
      Shoes: [], // Array of items for Shoes
  };

    const openCamera = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        setHasPermission(status === 'granted');
        if (status === 'granted') {
            setCameraOpen(true);
        } else {
            alert('Camera permission is required.');
        }
    };

    const takePicture = async () => {
        if (cameraRef) {
            const photoCapture = await cameraRef.takePictureAsync();
            setPhoto(photoCapture.uri);
            setPhotoData(photoCapture);
            setCameraOpen(false);
        }
    };

    const handleDone = async (item) => {
        console.log("Attempting To Upload!");
        // await item.uploadToS3(); // Assuming the uploadToS3 function is in the Item class
        console.log("Done Uploading.");

        // TODO Remove me: used for testing
        const uploadItem = new Item("bucket_hat", null)

        console.log("Getting labels...",)
        await uploadItem.setLabels()
        console.log("Labels: ", uploadItem.labels)
        console.log("Weather Labels: ", uploadItem.weatherLabels)
        console.log("Style Labels: ", uploadItem.styleLabels)
        console.log("Labeling Complete!")
        console.log("Attempting to save item to db...")
        await uploadItem.uploadItemToDatabase()
        console.log("I really hope this is uploaded")

        setShowLabelPage(false);
        setPhoto(null);
        setPhotoName(null);
    };

    const handleTabPress = (category) => {
      setActiveCategory(category);
   };
   

    let cameraRef;

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Wardrobe</Text>
            
            {showLabelPage ? (
                <LabelPage 
                  defaultLabels={['Hat']}
                  defaultColors={['Teal']}
                  defaultWeather={['All']}
                  defaultTemperature={['25']}
                  possibleLabels={['Hat', 'Earrings', 'Necklace', 'Glasses', 'Fancy', 'Sport', 'Felt', 'Casual', 'Silk', 'Cotton', 'Linen']} 
                  possibleColors={['Teal', 'Yellow', 'Red', 'Blue', 'Green', 'Orange', 'Purple', 'Pink', 'Black', 'White', 'Grey', 'Brown']}
                  possibleWeather={['All', 'Sunny', 'Rainy', 'Snowy', 'Summer', 'Winter', 'Spring', 'Autumn']}
                  possibleTemperatures={['-20', '-5', '25', '50']}
                  item={{ name: photoName, photo: photoData.uri, labels: [] }} 
                  onDone={handleDone} 
                  onExit={() => setShowLabelPage(false)}
                />
            ) : photo && !cameraOpen ? (
                <ConfirmPhoto 
                  photo={photo} 
                  onRetake={openCamera}
                  onConfirm={(name) => {
                      setPhotoName(name);
                      setShowLabelPage(true);
                  }}
                  onExit={() => setPhoto(null)}
                />
                ) : !cameraOpen && !activeCategory ? (  // Adjusted condition to also check if activeCategory is not set
                <>
                    <View style={styles.tabsContainer}>
                        <CategoryTab category="Tops" onPress={() => handleTabPress('Tops')} />
                        <CategoryTab category="Bottoms" onPress={() => handleTabPress('Bottoms')} />
                        <CategoryTab category="Accessories" onPress={() => handleTabPress('Accessories')} />
                        <CategoryTab category="Shoes" onPress={() => handleTabPress('Shoes')} />
                    </View>
                    <TouchableOpacity style={styles.addButton} onPress={openCamera}>
                        <Image source={require('../bigIcons/Plus2.png')} style={{ width: 100, height: 100 }} />
                    </TouchableOpacity>
                </>
            ) : activeCategory ? ( // Condition to check if activeCategory is set
                <ClothingList 
                  categoryTitle={activeCategory} 
                  items={itemsForCategory[activeCategory]} 
                  onExit={() => setActiveCategory(null)}
                />
    
            ) : (
                <Camera 
                    ref={ref => (cameraRef = ref)}
                    style={{ flex: 1, height: '100%', width: '100%' }}
                    type={Camera.Constants.Type.back}
                >
                    <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 20 }}>
                        <TouchableOpacity 
                            onPress={() => setCameraOpen(false)} 
                            style={styles.closeCameraButton}
                        >
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={takePicture} style={{
                            width: 70,
                            height: 70,
                            bottom: 0,
                            borderRadius: 35,
                            backgroundColor: '#fff',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <View style={{
                                width: 60,
                                height: 60,
                                borderRadius: 30,
                                backgroundColor: 'red',
                            }}/>
                        </TouchableOpacity>
                    </View>
                </Camera>
            )}
        </View>
    );
}

export default Wardrobe;
