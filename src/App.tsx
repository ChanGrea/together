import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MapScreen from './scenes/MapScreen';
import HomeScreen from './scenes/HomeScreen';
import SettingScreen from './scenes/SettingScreen';

export interface Props {}

const Tab = createBottomTabNavigator();

const App: React.FC<Props> = props => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={SettingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
