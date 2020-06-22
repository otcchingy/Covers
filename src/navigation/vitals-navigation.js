import {createStackNavigator} from '@react-navigation/stack';

import React, {Component} from 'react';

import VitalsScreen from '../screens/vitalsScreen';
import updateVitalsScreen from '../screens/updateVitalsScreen';

const Stack = createStackNavigator();

export default class Vitals extends Component {
    render() {
        return (
            <Stack.Navigator
                screenOptions={{headerShown: false}}
            >
                <Stack.Screen name="Vitals" component={VitalsScreen}/>
                <Stack.Screen name="UpdateVitals" component={updateVitalsScreen}/>
            </Stack.Navigator>
        )
    }
}