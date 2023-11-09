import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screen/HomeScreen";
import AboutScreen from './screen/AboutScreen';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
      <Stack.Screen name="Sobre" options={{headerShown: false}} component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

