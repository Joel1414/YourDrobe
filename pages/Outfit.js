import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../styles';
import OutfitItem from '../components/OutfitItem'; 
import * as Location from 'expo-location';
import { useData } from '../DataContext'; // Import the useData hook
import Item from '../utils/Item'; // Import the Item class
import { getOutfit } from '../utils/OutfitGenerator';

const API_KEY = "5fbd4f888cc555b162748e6e02814f39"; 

class OutfitClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentOutfit: [],
            error: null,
            showWeather: false,
            weatherData: null,
            weatherData2: null,
        };
        this.itemsList = this.props.items;
    }

    generateOutfit = async () => {
        const { weatherData } = this.state;

        // Convert the temperature from Kelvin to Celsius
        const tempInCelsius = Math.round(weatherData.temp - 274.15);

        try {
            const outfit = await getOutfit(tempInCelsius);
            this.setState({ currentOutfit: outfit });
        } catch (error) {
            console.error("Error generating outfit: ", error);
            this.setState({ error: "Failed to generate outfit." });
        }
    };

    componentDidMount() {
        this.fetchInitialWeather();
    }

    fetchInitialWeather = async () => {
        try {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                this.setState({ error: 'Permission to access location was denied.' });
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            this.fetchWeatherData(location.coords.latitude, location.coords.longitude);
        } catch (err) {
            this.setState({ error: 'Unable to get location. Make sure you have granted location access.' });
        }
    };

    fetchWeatherData = async (lat, lon) => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
            const data = await response.json();
            if (data && data.main && data.weather) {
                this.setState({ weatherData: data.main, weatherData2: data.weather[0], showWeather: true });
            }
        } catch (err) {
            this.setState({ error: "Failed to fetch weather data." });
        }
    };

    toggleWeatherContainer = () => {
        this.setState(prevState => ({ showWeather: !prevState.showWeather }));
    };

    generateOutfit = () => {
        // Logic for generating outfit goes here
    };

    regenerateOutfit = () => {
        // Logic for regenerating outfit goes here
    };

    render() {
        return (
          <View style={styles.container}>
            <Text style={styles.header}>Today's Outfit</Text>
            {this.state.currentOutfit.map((item, index) => (
                <OutfitItem 
                    key={index} 
                    name={item.name}  // passing the item name
                    imageUrl={item.imageUrl}  // passing the item image URL
                    // Continue with other props like onRefresh, onFavorite, onInfo etc.
                />
            ))}


                <TouchableOpacity style={styles.generateButton} onPress={this.generateOutfit}>
                    <Text style={styles.generateButtonText}>Generate Outfit</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.weatherButton} onPress={this.toggleWeatherContainer}>
                    <Image source={require('../icons/cloud.png')} style={{ width: 50, height: 50 }}/>
                </TouchableOpacity>

                {this.state.showWeather && this.state.weatherData && this.state.weatherData2 && (
                    <View style={styles.weatherContainer}>
                        <Text>Temperature: {Math.round(this.state.weatherData.temp - 274.15)}°C</Text>
                        <Text>Humidity: {this.state.weatherData.humidity}%</Text>
                        <Text>Pressure: {this.state.weatherData.pressure} hPa</Text>
                        <Text>Weather: {this.state.weatherData2.description}</Text>
                    </View>
                )}

                {this.state.error && <Text style={styles.errorText}>{this.state.error}</Text>}
            </View>
        );
    }
}

// This is the functional wrapper component
const Outfit = (props) => {
    const { itemsList } = useData();  // <-- Use the useData hook here

    return <OutfitClass {...props} items={itemsList} />; // <-- Pass itemsList to OutfitClass
}

export default Outfit;
