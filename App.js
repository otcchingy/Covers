import {Ionicons} from '@expo/vector-icons';

import {NavigationContainer} from '@react-navigation/native';

import 'react-native-gesture-handler';

import {AppLoading} from 'expo';

import * as Font from 'expo-font';

import React, {Component} from 'react';

import Stacks from './src/navigation/stacks';


export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isReady: false,
        };
    }

    async componentDidMount() {
        await Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            AntDesign: require('native-base/Fonts/AntDesign.ttf'),
            air_bnb_bold: require('./assets/fonts/AirbnbCereal-Bold.ttf'),
            air_bnb_regular: require('./assets/fonts/AirbnbCereal-Medium.ttf'),
            air_bnb_light: require('./assets/fonts/AirbnbCereal-Book.ttf'),
            ...Ionicons.font,
        });
        this.setState({isReady: true});
    }

    render() {
        if (!this.state.isReady) {
            return <AppLoading/>;
        }
        return (
            <NavigationContainer>
                <Stacks/>
            </NavigationContainer>
        );
    }
}


