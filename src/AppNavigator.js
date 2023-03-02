import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MainSplashScreen from './screen/MainSplashScreen';
import MainAppScreen from './screen/MainAppScreen';
import MaindrawerScreen from './zz/MaindrawerScreen';

const Stack = createStackNavigator()
export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="MainSplashScreen"  component={MainSplashScreen}  options={{headerShown: false}}/>
                <Stack.Screen name="MainAppScreen"  component={MainAppScreen}  options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>

    )
}