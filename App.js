
import Outfit from './pages/Outfit';
import Settings from './pages/Settings';
import Waredrobe from './pages/Wardrobe';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
const Tab = createBottomTabNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#1E1E1E' },
        activeTintColor: '#AAA', 
        inactiveTintColor: '#AAA',
 

      }}
      >
      
        <Tab.Screen 
          name="Settings" 
          component={Settings}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image source={require('./icons/Settings.png')} style={{ width: size, height: size, tintColor: color }} />
            ),
          }}
        />
        <Tab.Screen 
          name="Outfit" 
          component={Outfit}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image source={require('./icons/Icon_Sock.png')} style={{ width: size, height: size, tintColor: color }} />
            ),
          }}
        />

        <Tab.Screen 
          name="Waredrobe" 
          component={Waredrobe}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image source={require('./icons/Icon_Hanger.png')} style={{ width: size, height: size, tintColor: color }} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>

  );
}



