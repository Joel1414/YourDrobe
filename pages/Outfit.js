import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../styles';
import * as Location from 'expo-location';

const API_KEY = "5fbd4f888cc555b162748e6e02814f39"; 

const Outfit = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [showWeather, setShowWeather] = useState(false);

  const fetchWeatherData = async (lat, lon) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
      const data = await response.json();
      if (data && data.main) {
        setWeatherData(data.main);
        setShowWeather(true); 
      }
    } catch (err) {
      setError("Failed to fetch weather data.");
    }
  };

  const toggleWeatherContainer = () => {
    setShowWeather(prevState => !prevState);
  };

  useEffect(() => {
    const fetchInitialWeather = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setError('Permission to access location was denied.');
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        fetchWeatherData(location.coords.latitude, location.coords.longitude);
      } catch (err) {
        setError('Unable to get location. Make sure you have granted location access.');
      }
    };
    
    fetchInitialWeather();
  }, []);  // The empty dependency array ensures this useEffect runs only once, right after component mounts

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Today's Outfit</Text>
      
      <TouchableOpacity style={styles.generateButton}>
        <Text style={styles.generateButtonText}>Generate Outfit</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.weatherButton} onPress={toggleWeatherContainer}>
        <Image source={require('../icons/cloud.png')} style={{ width: 50, height: 50 }}/>
      </TouchableOpacity>

      {showWeather && weatherData && (
        <View style={styles.weatherContainer}>
          <Text>Temperature: {weatherData.temp}°K</Text>
          <Text>Humidity: {weatherData.humidity}%</Text>
          <Text>Pressure: {weatherData.pressure} hPa</Text>
        </View>
      )}

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

export default Outfit;
