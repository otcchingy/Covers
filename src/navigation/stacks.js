import {createStackNavigator} from '@react-navigation/stack';

import React, {Component} from 'react';

import BackgroundScreen from '../screens/infoScreen';
import VerifyScreen from '../screens/verifyScrees';
import WelcomeScreen from '../screens/welcomeScreen';

import RootNavigation from './root-navigation';


const Stack = createStackNavigator();
export default class Stacks extends Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Change Phone" component={VerifyScreen}/>
                <Stack.Screen name="General Information" component={BackgroundScreen} options={{headerLeft: null}}/>
                <Stack.Screen name="Root" component={RootNavigation} options={{
                    headerShown: false, gestureEnabled: false
                }}/>

            </Stack.Navigator>
        )
    }
}