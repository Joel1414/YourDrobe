import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../styles';
import OutfitItem from '../components/OutfitItem'; 
import * as Location from 'expo-location';
import { useData } from '../DataContext'; // Import the useData hook
import Item from '../utils/Item'; // Import the Item class
import { getOutfit } from '../utils/OutfitGenerator';

const API_KEY = "5fbd4f888cc555b162748e6e02814f39"; 

const NEW_OUTFIT_LIST = [
    { 
        name: 'Black Sunnies',
        imageUrl: require('../icons/Sunnies2.png')
    },
    {
        name: 'Blue Shirt',
        imageUrl: require('../icons/WShirt.png')
    },
    {
        name: 'White Gym Shorts',
        imageUrl: require('../icons/Short2.png')
    },
    {
        name: 'Blue Sneakers',
        imageUrl: require('../icons/WSneaker.png')
    }
];

const OUTFIT_LIST_2 = [
    {
        name: 'Black Sports Cap',
        imageUrl: require('../icons/BlackCap.png')
    },
    {
        name: 'White Singlet',
        imageUrl: require('../icons/Singlet.png')
    },
    {
        name: 'Black Leggings',
        imageUrl: require('../icons/Leggings.png')
    },
    {
        name: 'Red Sneakers',
        imageUrl: require('../icons/RedSneaker.png')
    }
];

const currentOutfit = [
    { 
        name: 'Orange Sunnies',
        imageUrl: require('../icons/Sunnies.png')
    },

    {
        name: 'Green Shirt',
        imageUrl: require('../icons/ShirtGreen.png')
    },
        
    {
        name: 'Jean Shorts',
        imageUrl: require('../icons/JeanShort.png')
    },

    {
        name: 'Birkenstocks',
        imageUrl: require('../icons/Birk.png')
    }
];

class OutfitClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentOutfit: [
                { 
                    name: 'Orange Sunnies',
                    imageUrl: require('../icons/Sunnies.png')
                },

                {
                    name: 'Green Shirt',
                    imageUrl: require('../icons/ShirtGreen.png')
                },
                    
                {
                    name: 'Jean Shorts',
                    imageUrl: require('../icons/JeanShort.png')
                },

                {
                    name: 'Birkenstocks',
                    imageUrl: require('../icons/Birk.png')
                }
            ],
            clickCount: 0,
            error: null,
            showWeather: false,
            weatherData: null,
            weatherData2: null,
        };
        this.itemsList = this.props.items;
    }

    generateOutfit = () => {
        let newCount = this.state.clickCount + 1;
        let newOutfitList = [];
        switch (newCount) {
            case 1:
                newOutfitList = NEW_OUTFIT_LIST;
                break;
            case 2:
                newOutfitList = OUTFIT_LIST_2;
                break;
            default:
                newCount = 0;  // Reset the counter if it goes beyond the available lists
                newOutfitList = currentOutfit;  // Set to the original outfit or any other default
                break;
        }
        this.setState({
            clickCount: newCount,
            currentOutfit: newOutfitList
        });
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
