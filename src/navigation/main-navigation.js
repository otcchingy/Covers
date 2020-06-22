import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React, {Component} from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/homeScreen';
import SettingsScreen from '../screens/settingsScreen';

import Reports from './reports-navigation';
import Vitals from './vitals-navigation';

const Tab = createBottomTabNavigator();
export default class TabsScreen extends Component {
    render() {
        return (
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'md-home' : 'md-home';
                        } else if (route.name === 'Report') {
                            iconName = focused ? 'ios-paper-plane' : 'ios-paper-plane';
                        }
                        else if (route.name === 'Vitals') {
                            iconName = focused ? 'ios-pulse' : 'ios-pulse';
                        }
                        else if (route.name === 'Settings') {
                            iconName = focused ? 'ios-settings' : 'ios-settings';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={30} color={color}/>;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'black',
                    inactiveTintColor: 'gray',
                    style: {
                        height: 70,

                    },
                    labelStyle: {
                        fontSize: 15,
                        fontFamily: 'air_bnb_regular'
                    },
                }}
            >
                <Tab.Screen name="Home" component={HomeScreen}/>
                <Tab.Screen name="Report" component={Reports}/>
                <Tab.Screen name="Vitals" component={Vitals}/>
                <Tab.Screen name="Settings" component={SettingsScreen}/>
            </Tab.Navigator>

        )
    }
}