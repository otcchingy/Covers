import React,{Component} from 'react';

import {View,Text,TextInput} from 'react-native';

import {Button} from 'native-base';

export default class VerifyScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            code:'',
            validity:true
        }
    }
    render(){
        const {data}=this.props.route.params
        return(
            <View style={{flex:1,backgroundColor:'#FFFF',}}>
            <View style={{paddingTop:150,alignItems:'center',justifyContent:'center'}} >
            <View style={{}}>
            <Text style={{fontSize:22,fontFamily:'rale_bold'}}> Verification PIN</Text>
            </View>
            <View style={{}}>
            <Text style={{fontFamily:'rale_bold',fontSize:14}}>Enter the verification code</Text>
            <Text style={{fontFamily:'rale_bold',alignSelf:'center',fontSize:14}}>we just sent you on</Text>
            <Text style={{fontFamily:'rale_bold',alignSelf:'center',fontSize:20}}>{data}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
            <TextInput keyboardType={'number-pad'}
            style={{
                flex:0.66,
                height:50,borderBottomWidth:2,
                textAlign:'center',fontSize:20,
            }}
            onChangeText={(value)=>this.setState({code:value,validity:false})}
            maxLength={4}
            />
            </View>
            <View style={{flexDirection:'row',paddingTop:10}}>
            <Button dark
             disabled={!Boolean(this.state.code)}
            style={{flex:0.67,height:48,justifyContent:'center'}}
            onPress={()=>this.props.navigation.navigate('General Information')}
            >
            <Text style={{color:'#fff',fontFamily:'Roboto'}}> Submit code</Text>
            </Button>
            </View>
            <View style={{paddingTop:10}}>
            <Text style={{fontFamily:'Roboto',fontSize:12}}> Have not received your code?</Text>
            </View>
            <Button transparent><Text style={{fontFamily:'Roboto_medium',fontSize:14}}> Resend Code</Text></Button>
            </View>
            </View>
        )
    }
}