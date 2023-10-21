import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import styles from '../styles';
import CategoryTab from '../components/CategoryTab';
import Item from '../pages/Item';
import ConfirmPhoto from './ConfirmPhoto'; 

const Wardrobe = () => {
  const [cameraOpen, setCameraOpen] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [photoData, setPhotoData] = useState(null);

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

  const handleUpload = async (name) => {
    const item = new Item(`${name}.jpg`, photoData.base64);
    console.log("Attempting To Upload!");
    await item.uploadToS3();
    console.log("Done Uploading.");
  };

  let cameraRef;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Wardrobe</Text>
      {photo && !cameraOpen ? (
        <ConfirmPhoto 
          photo={photo} 
          onRetake={openCamera}
          onConfirm={(name) => {
            handleUpload(name);
            setPhoto(null);
          }}
          onExit={() => setPhoto(null)}
        />
      ) : !cameraOpen ? (
        <>
          <View style={styles.tabsContainer}>
            <CategoryTab category="Tops" onPress={() => handleTabPress('Tops')} />
            <CategoryTab category="Bottoms" onPress={() => handleTabPress('Bottoms')} />
            <CategoryTab category="Accessories" onPress={() => handleTabPress('Tops')} />
            <CategoryTab category="Shoes" onPress={() => handleTabPress('Bottoms')} />
          </View>
          <TouchableOpacity style={styles.addButton} onPress={openCamera}>
            <Image source={require('../bigIcons/Plus2.png')} style={{ width: 100, height: 100 }} />
          </TouchableOpacity>
        </>
      ) : (
        <Camera 
          ref={ref => (cameraRef = ref)}
          style={{ flex: 1, height: '100%' }}
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
