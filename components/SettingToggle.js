import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';
import styles from '../styles';

const SettingToggle = ({ title, description }) => {
  const [isEnabled, setIsEnabled] = useState(title === "Location Services");


  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  return (
    <View style={styles.toggleContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default SettingToggle;
