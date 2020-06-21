import React,{Component} from 'react';

import {Text,Content,Button} from 'native-base';

import {ImageBackground,View,TextInput} from 'react-native';

export default class WelcomeScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            phone:'',
            validity:true
        }
    }
    
    
    render(){
        return(
            <View style={{flex:1}}>
            <ImageBackground source={require('../../assets/images/welcome.png')}
            style={{width:'100%',height:'100%'}}
            >
            <View style={{
                fontFamily:'Roboto',
                marginTop:200 
            }}>
            <View style={{
                
            }}>
            <Text style={{
                color:'#f3f3f3',
                fontSize: 55,fontWeight:'bold'
                ,textAlign:'center'
            }}>COVERS</Text>
            <Text style={{
                color:'#f3f3f3',fontWeight:'bold',
                fontSize:12,textAlign:'center'
            }}>(COVID-19 EMERGENCY RESPONSE SOLUTION)</Text>
            </View>
            <View>
            <Text style={{
                color:'#f3f3f3',
                fontSize:11,textAlign:'center'
            }}>Join the effort by well-meaning Africans using technology to slow</Text>
            <Text style={{
                color:'#f3f3f3',
                fontSize:11,textAlign:'center'
            }}>down and eventually halt the spread of COVID-19</Text>
            </View>
            <TextInput keyboardType={'phone-pad'}
            value={this.state.phone}
            onChangeText={(value)=>this.setState({phone:value,validity:false})}
            style={{
                backgroundColor:'#f3f3f3',
                marginTop:30,borderRadius:5,fontWeight:'bold',
                width:350,height:50,alignSelf:'center'
            }}
            placeholder='Phone Number'
            maxLength={10}
            />
            <Button success
            disabled={!Boolean(this.state.phone)}
            style={{
                width:350,marginTop:10,
                height:50,alignSelf:'center',justifyContent:'center',
                borderRadius:5
            }}
            onPress={()=>{this.props.navigation.navigate('Change Phone',{data:this.state.phone})}}
            >
            <Text>Get Started..</Text>
            </Button>
            </View>
            </ImageBackground>
            </View>
        )
    }
}