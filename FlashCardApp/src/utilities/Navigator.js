import React, { Component } from "react"
import { View, Text } from "react-native"

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './../UI/screens/HomeScreen'
import NewDeckScreen from './../UI/screens/NewDeckScreen'
import DeckScreen from './../UI/screens/DeckScreen'
import NewCardScreen from './../UI/screens/NewCardScreen'
import StatsScreen from './../UI/screens/StatsScreen'
import StudyScreen from './../UI/screens/StudyScreen'
// header navigation
const Stack = createStackNavigator()

function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="New Deck" component={NewDeckScreen} />
                <Stack.Screen name="View Deck" component={DeckScreen} />
                <Stack.Screen name="New Card" component={NewCardScreen} />
                <Stack.Screen name="Study" component={StudyScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator