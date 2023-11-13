import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Importa Ionicons

import HomeScreen from "./screen/HomeScreen";
import AboutScreen from './screen/AboutScreen';
import CarCreateScreen from './screen/CarCreateScreen';
import AutoScreen from './screen/AutoScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  const Stack = createNativeStackNavigator();

  const transitionConfig = {
    animation: 'spring',
    config: {
      stiffness: 500,
      damping: 50,
    },
  };

  const HomeStack = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        transitionSpec: {
          open: transitionConfig,
          close: transitionConfig,
        },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="create" component={CarCreateScreen} />
      <Stack.Screen name="auto" component={AutoScreen} />
    </Stack.Navigator>
  );

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Sobre') {
              iconName = focused ? 'information-circle' : 'information-circle-outline';
            }

            // Puedes devolver cualquier componente JSX aquí
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            headerShown: false,
            transitionSpec: {
              open: transitionConfig,
              close: transitionConfig,
            },
          }}
        />
        <Tab.Screen
          name="Sobre"
          component={AboutScreen}
          options={{
            headerShown: false,
            transitionSpec: {
              open: transitionConfig,
              close: transitionConfig,
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
