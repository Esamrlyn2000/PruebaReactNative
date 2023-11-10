import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screen/HomeScreen";
import AboutScreen from './screen/AboutScreen';
import CarCreateScreen from './screen/CarCreateScreen';

export default function App() {
  const Stack = createNativeStackNavigator();

  const transitionConfig = {
    animation: 'spring',
    config: {
      stiffness: 500, 
      damping: 50,    
    },
  };


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
            transitionSpec: {
              open: transitionConfig,
              close: transitionConfig,
            },
          }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Sobre"
          options={{
            headerShown: false,
            transitionSpec: {
              open: transitionConfig,
              close: transitionConfig,
            },
          }}
          component={AboutScreen}
        />
        <Stack.Screen
          name="create"
          options={{
            headerShown: false,
            transitionSpec: {
              open: transitionConfig,
              close: transitionConfig,
            },
          }}
          component={CarCreateScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
