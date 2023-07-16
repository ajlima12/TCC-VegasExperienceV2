import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ProfileScreen from './screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import SavedScreen from './screens/SavedScreen';
import AudioScreen from './screens/AudioScreen';
import Carousel from './components/Carousel'; // Importe o componente Carousel

const StackNavigator = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  function BottomTabs() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: '#B4C1FC' },
          tabBarLabelStyle: { color: 'white' },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'black',
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? <Ionicons name="airplane-sharp" size={24} color="#3865E0" /> : <Ionicons name="airplane-outline" size={24} color="#3865E0" />,
          }}
        />

        <Tab.Screen
          name="Roteiro"
          component={SavedScreen}
          options={{
            tabBarLabel: 'Roteiro',
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? <MaterialCommunityIcons name="bag-suitcase" size={24} color="#3865E0" /> : <MaterialCommunityIcons name="bag-suitcase-outline" size={24} color="#3865E0" />,
          }}
        />

        <Tab.Screen
          name="Perfil"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Perfil',
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? <Ionicons name="person" size={24} color="#3865E0" /> : <Ionicons name="person-outline" size={24} color="#3865E0" />,
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={BottomTabs} options={{ headerShown: false }} />
        <Stack.Screen name="AudioScreen" component={AudioScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );


};

export default StackNavigator;

const styles = StyleSheet.create({});
