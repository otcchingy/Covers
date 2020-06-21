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
            <View style={{marginTop:250,alignItems:'center'}} >
            <View style={{marginBottom:30,}}>
            <Text style={{fontSize:16,fontWeight:'bold',fontFamily:'Roboto_medium'}}> Verification PIN</Text>
            </View>
            <View style={{marginBottom:30}}>
            <Text style={{fontFamily:'Roboto',fontSize:12}}>Enter the verification code</Text>
            <Text style={{fontFamily:'Roboto',alignSelf:'center',fontSize:12}}>we just sent you on</Text>
            <Text style={{fontFamily:'Roboto',alignSelf:'center',fontSize:12}}>{data}</Text>
            </View>
            <TextInput keyboardType={'number-pad'}
            style={{
                width:280,
                height:50,borderBottomWidth:2,
                textAlign:'center',fontSize:20,
                marginBottom:25
            }}
            onChangeText={(value)=>this.setState({code:value,validity:false})}
            maxLength={4}
            />
            <Button info
             disabled={!Boolean(this.state.code)}
            style={{width:280,height:48,justifyContent:'center',marginBottom:40}}
            onPress={()=>this.props.navigation.navigate('General Information')}
            >
            <Text style={{color:'#fff',fontFamily:'Roboto'}}> Submit code</Text>
            </Button>
            <View>
            <Text style={{fontFamily:'Roboto',fontSize:12}}> Have not received your code?</Text>
            </View>
            <Button transparent><Text style={{fontFamily:'Roboto_medium',fontSize:14}}> Resend Code</Text></Button>
            </View>
            </View>
        )
    }
}