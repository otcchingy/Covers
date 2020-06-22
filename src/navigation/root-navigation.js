import {createStackNavigator} from '@react-navigation/stack';

import React, {Component} from 'react';

import HeaderLeft from './../components/headerLeft';
import HeaderRight from './../components/headerRight';

import TabsScreen from './main-navigation';

const Root = createStackNavigator();
export default class RootNavigation extends Component {
    render() {
        return (
            <Root.Navigator mode="modal">
                <Root.Screen name="Root" component={TabsScreen} options={{
                    headerTitle: null,
                    headerLeft: () => (<HeaderLeft/>),

                    headerRight: () => (<HeaderRight/>),
                    headerStyle: {
                        height: 100,
                    }
                }}/>
            </Root.Navigator>
        )
    }
}