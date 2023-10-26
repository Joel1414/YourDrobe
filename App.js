import React from 'react';
import Outfit from './pages/Outfit';
import Settings from './pages/Settings';
import Waredrobe from './pages/Wardrobe';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Item from './utils/Item';

const Tab = createBottomTabNavigator();

const itemsList = [
  new Item('Grey Thrills Cap', 'base64DataHere'),
  new Item('White Sams Shirt', 'base64DataHere'),
  // ... more items
];

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
          initialParams={{ items: itemsList }}  // Passing the itemsList here
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
