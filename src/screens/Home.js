import React, { Component } from 'react';

import {View,ScrollView,ImageBackground} from 'react-native';

import {Card,CardItem,Text} from 'native-base';

import {DATA} from '../index';



export default class HomeScreen extends Component{
    render(){
        return(
            <View style={{backgroundColor:'#fff',flex:1}}>
            <View style={{height:60,padding:10}}>
            <Text style={{fontFamily:'rale_bold',fontSize:35}}>Home</Text>
            </View>
            <ScrollView>
            <View style={{flex:1,padding:10}}>
            <ScrollView horizontal={true}>
            <Card style={{height:165}} transparent>
            <CardItem cardBody>
            <ImageBackground source={require('../../assets/images/confirmed.jpg')}
            style={{width:280,height:165}} borderRadius={12}
            >
            <View style={{alignItems:'flex-end'}}>
            <Text style={{fontSize:40,fontFamily:'rale_bold',color:'#fff'}}>641</Text>
            <Text style={{fontSize:20,fontFamily:'Roboto_medium',color:'#fff'}}>Confirmed Cases</Text>
            </View>
            </ImageBackground>
            </CardItem>
            </Card>
            <Card style={{height:165}} transparent>
            <CardItem cardBody >
            <ImageBackground source={require('../../assets/images/recovered.jpg')}
            style={{width:280,height:165}} borderRadius={12}
            >
            <View style={{alignItems:'flex-end'}}>
            <Text style={{fontSize:40,fontFamily:'rale_bold',color:'#fff'}}>83</Text>
            <Text style={{fontSize:20,fontFamily:'Roboto_medium',color:'#fff'}}>Recovered</Text>
            </View>
            </ImageBackground>
            </CardItem>
            </Card>
            <Card style={{height:165}}transparent>
            <CardItem cardBody>
            <ImageBackground source={require('../../assets/images/death.jpg')}
            style={{width:280,height:165}} borderRadius={12}
            >
            <View style={{alignItems:'flex-end'}}>
            <Text style={{fontSize:40,fontFamily:'rale_bold',color:'#fff'}}>8</Text>
            <Text style={{fontSize:20,fontFamily:'Roboto_medium',color:'#fff'}}>Deaths</Text>
            </View>
            </ImageBackground>
            </CardItem>
            </Card>
            </ScrollView>
            </View>
            <View style={{padding:20}}>
            <Text style={{fontFamily:'rale_bold',fontSize:18}}>Ghana's Situation Updates</Text>
            <Text style={{fontFamily:'rale_regular',fontSize:12}}>Last Updated:4/16/2020</Text>
            </View>
            <View style={{flex:1,padding:30}}>
            <View style={{padding:15}}>
            <Text style={{fontFamily:'rale_bold'}}>{DATA[0].title}</Text>
            <Text style={{fontFamily:'rale_regular',fontSize:14,marginTop:18}}>{DATA[0].data}</Text>
            </View>
            <View style={{padding:15}}>
            <Text style={{fontFamily:'rale_bold'}}>{DATA[0].title}</Text>
            <Text style={{fontFamily:'rale_regular',fontSize:14,marginTop:18}}>{DATA[0].data}</Text>
            </View>
            <View style={{padding:15}}>
            <Text style={{fontFamily:'rale_bold'}}>{DATA[0].title}</Text>
            <Text style={{fontFamily:'rale_regular',fontSize:14,marginTop:18}}>{DATA[0].data}</Text>
            </View>
            </View>
            </ScrollView>
            </View>
        )
    }
}
