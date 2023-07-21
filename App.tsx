import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeScreen from "./screens/home";
import ProfileScreen from "./screens/profile";
import ClickerScreen from "./screens/clicker";

const Tab = createBottomTabNavigator()


const MyTabs = () => {

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {

            return <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />;
          },
        }} />
      <Tab.Screen name="Clicker" component={ClickerScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {

            return <Ionicons name={focused ? 'hand-right' : 'hand-right-outline'} size={size} color={color} />;
          },
        }} />
      <Tab.Screen name="Profile" component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {

            return <Ionicons name={focused ? 'person' : 'person-outline'} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
        }} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
