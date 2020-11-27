import React, { Component } from "react"
import { View, Text } from "react-native"

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen'
import NewDeckScreen from './screens/NewDeckScreen'
import DeckScreen from "./screens/DeckScreen"

const Stack = createStackNavigator()

function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="New Deck" component={NewDeckScreen} />
                <Stack.Screen name="View Deck" component={DeckScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator