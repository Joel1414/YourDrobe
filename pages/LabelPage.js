import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import styles from '../styles';

const LabelPage = ({
    possibleLabels,
    possibleColors,
    possibleWeather,
    possibleTemperatures, // New prop for possible temperature values
    item,
    onDone,
    onExit,
    defaultLabels = [],
    defaultColors = [],
    defaultWeather = [],
    defaultTemperature = [] // New prop for default temperature values
}) => {
    const [selectedLabels, setSelectedLabels] = useState([...defaultLabels, ...(item.labels || [])]);
    const [selectedColors, setSelectedColors] = useState([...defaultColors, ...(item.colors || [])]);
    const [selectedWeather, setSelectedWeather] = useState([...defaultWeather, ...(item.weather || [])]);
    const [selectedTemperature, setSelectedTemperature] = useState([...defaultTemperature, ...(item.temperatures || [])]); // New state for selected temperatures

    const toggleSelection = (selectionType, value) => {
        let currentSelection, setSelection;

        switch(selectionType) {
            case 'label':
                currentSelection = selectedLabels;
                setSelection = setSelectedLabels;
                break;
            case 'color':
                currentSelection = selectedColors;
                setSelection = setSelectedColors;
                break;
            case 'weather':
                currentSelection = selectedWeather;
                setSelection = setSelectedWeather;
                break;
            case 'temperature': // New case for temperature
                currentSelection = selectedTemperature;
                setSelection = setSelectedTemperature;
                break;
            default:
                return;
        }

        if (currentSelection.includes(value)) {
            setSelection(currentSelection.filter(item => item !== value));
        } else {
            setSelection([...currentSelection, value]);
        }
    };


    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <TouchableOpacity style={styles.exitButton} onPress={onExit}>
                <Image source={require('../icons/Icon_Exit.png')} style={styles.exitIcon}/>
            </TouchableOpacity>
            <Text style={styles.imageNameText}>{item.name}</Text>
            <Image source={{ uri: item.photo }} style={styles.photo2} />

            <Text style={styles.headerText}>Item Type</Text>
            <ScrollView contentContainerStyle={styles.labelContainer} horizontal={true} showsHorizontalScrollIndicator={false}>
                {possibleLabels.map(label => (
                    <TouchableOpacity 
                        key={label} 
                        style={selectedLabels.includes(label) ? styles.labelSelected : styles.label}
                        onPress={() => toggleSelection('label', label)}
                    >
                        <Text style={styles.labelText}>{label}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <Text style={styles.headerText}>Colors</Text>
            <ScrollView contentContainerStyle={styles.labelContainer} horizontal={true} showsHorizontalScrollIndicator={false}>
                {possibleColors.map(color => (
                    <TouchableOpacity 
                        key={color} 
                        style={selectedColors.includes(color) ? styles.labelSelected : styles.label}
                        onPress={() => toggleSelection('color', color)}
                    >
                        <Text style={styles.labelText}>{color}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <Text style={styles.headerText}>Weather</Text>
            <ScrollView contentContainerStyle={styles.labelContainer} horizontal={true} showsHorizontalScrollIndicator={false}>
                {possibleWeather.map(weather => (
                    <TouchableOpacity 
                        key={weather} 
                        style={selectedWeather.includes(weather) ? styles.labelSelected : styles.label}
                        onPress={() => toggleSelection('weather', weather)}
                    >
                        <Text style={styles.labelText}>{weather}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <Text style={styles.headerText}>Temperature</Text>
            <ScrollView contentContainerStyle={styles.labelContainer} horizontal={true} showsHorizontalScrollIndicator={false}>
                {possibleTemperatures.map(temp => (
                    <TouchableOpacity 
                        key={temp} 
                        style={selectedTemperature.includes(temp) ? styles.labelSelected : styles.label}
                        onPress={() => toggleSelection('temperature', temp)}
                    >
                        <Text style={styles.labelText}>{temp}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <TouchableOpacity style={styles.doneButton2} onPress={() => { 
                item.labels = selectedLabels; // Update the item object with the new labels
                item.colors = selectedColors;
                item.weather = selectedWeather;
                onDone(item);
            }}>
                <Text style={styles.doneButtonText}>Done</Text>
            </TouchableOpacity>
        </View>
    );
};



export default LabelPage;