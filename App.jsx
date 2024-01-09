import React from 'react';
import GetStarted from './src/GetStarted';
import Home from './src/Home';
import ItemPage from './src/ItemPage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetStarted">
        <Stack.Screen name="GetStarted" options={{headerShown:false}} component={GetStarted} />
        <Stack.Screen name="Home" options={{headerShown:false}} component={Home} />
        <Stack.Screen name="ItemPage" options={{headerShown:false}} component={ItemPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
