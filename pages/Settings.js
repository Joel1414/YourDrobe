import { View, Text } from 'react-native';
import styles from '../styles';
import SettingToggle from '../components/SettingToggle';


const Settings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      <View style={styles.toggleGroup}>
        <SettingToggle title="Preference Data" description="This feature enables your preference data to be stored to enable better suggestions." />
        <SettingToggle title="Location Services" description="Enables the app to track your location to get the correct weather forecast." />
        <SettingToggle title="External Fashion" description="This enables other peoples preferences to influence your fashion suggestions." />
        <SettingToggle title="External Data Storage" description="If you have large clothes selections you may need to enable this to store the entire wardrobe." />

      </View>

      
    </View>
  );
}

export default Settings;