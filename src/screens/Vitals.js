import { Ionicons } from '@expo/vector-icons';

import React, { Component } from 'react';

import {View,StyleSheet,Text,TouchableOpacity,Alert,ScrollView} from 'react-native';

import {Button,Container,Header,Card,CardItem,Left,Content, Right,Body,Radio} from 'native-base';

import Modal from 'react-native-modal';





export default class VitalsScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            show:false
        }
    }

    close(show1){
        this.setState({show:show1});
    }

    render(){
        return(
            <Container style={{flex:1}}>
            <View style={{height:50,marginLeft:20}}>
            <Text style={{fontFamily:'Roboto_medium',fontSize:30}}>Vitals</Text>
            </View>
            <View
            style={{justifyContent:'center',flex:0.5,flexDirection:'row'}}
            >
            <Button transparent
            style={{
                justifyContent:'center',
                borderStyle:'dashed',
                borderColor:'#000',
                borderWidth:1,
                flex:0.5,height:55,
            
            }}
            onPress={()=>this.setState({show:true})}
            >
            <Text
            style={{
                textTransform:'capitalize',
                color:'#000',fontFamily:'rale_bold',
                fontSize:16
        }}
            >Log Vitals</Text>
            </Button>
            </View>
            <View>
            <Modal
            style={{flex:1,backgroundColor:'none',margin:0,height:180,justifyContent:'flex-start',paddingTop:10}}
            animationType = {"slide"}
            
            transparent={false}
            visible={this.state.show}
            onRequestClose={() => {
                this.close(!this.state.show);
            }}
            >
            
            <View style={styles.modalView}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontFamily:'rale_bold',fontSize:35}}>Make Report</Text>
            <Ionicons name="md-close" size={30} color="black" 
            onPress={() => {
                this.close(!this.state.show);}}
                
            />
            </View>
            <View style={{flex:1,justifyContent:'flex-end',alignItems:'center'}}>
            <Button style={{height:55}}
            dark block
            onPress={
                ()=>{this.close(!this.state.show),
                    navigate('UpdateReport',{data:this.state.case,data1:this.state.case1}),
                Alert.alert('Your report has been updated successfully')
                }}
            >
            <Text style={{color:'#fff',fontFamily:'rale_bold'}}>Report Case</Text>
            </Button>
            </View>
            </View>
          </Modal>
            </View>
            </Container>
        )
    }
}
const styles=StyleSheet.create({
    modalView: {
        margin: 0,
        backgroundColor: "white",
        borderTopRightRadius: 5,borderTopLeftRadius:5,
        padding:15,
        height:727,flex:1
      }
})