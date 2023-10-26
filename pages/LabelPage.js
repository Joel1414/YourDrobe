import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    ScrollView,
    Keyboard,
    TouchableWithoutFeedback,
    TextInput
} from 'react-native';
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
    const [minTemperature, setMinTemperature] = useState(''); // New state for minimum temperature
    const [maxTemperature, setMaxTemperature] = useState(''); // New state for maximum temperature

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
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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

            <Text style={styles.headerText}>Temperature Range (°C)</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 10 }}>
                <TextInput
                    style={styles.temperatureInput}
                    placeholder="Min"
                    keyboardType="number-pad"
                    value={minTemperature}
                    onChangeText={setMinTemperature}
                />
                <Text style={{ marginHorizontal: 10 }}>to</Text>
                <TextInput
                    style={styles.temperatureInput}
                    placeholder="Max"
                    keyboardType="number-pad"
                    value={maxTemperature}
                    onChangeText={setMaxTemperature}
                />
            </View>

            <TouchableOpacity style={styles.doneButton2} onPress={() => { 
                item.labels = selectedLabels; // Update the item object with the new labels
                item.colors = selectedColors;
                item.weather = selectedWeather;
                item.temperatureRange = { min: minTemperature, max: maxTemperature }; // Update temperature range
                onDone(item);
            }}>
                <Text style={styles.doneButtonText}>Done</Text>
            </TouchableOpacity>
        </View>
        </TouchableWithoutFeedback>
    );
};



export default LabelPage;