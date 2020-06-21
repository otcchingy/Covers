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
            style={{flex:1}}
            >
            <View style={{
                paddingTop:150 ,flex:1,
                marginHorizontal:15
            }}>
            <View style={{
                
            }}>
            <Text style={{
                color:'#f3f3f3',
                fontSize: 60
                ,textAlign:'center',fontFamily:'rale_bold'
            }}>COVERS</Text>
            <Text style={{
                color:'#f3f3f3',fontFamily:'rale_bold',
                fontSize:14,textAlign:'center'
            }}>(COVID-19 EMERGENCY RESPONSE SOLUTION)</Text>
            </View>
            <View>
            <Text style={{
                color:'#f3f3f3',
                fontSize:14,textAlign:'center',fontFamily:'rale_regular'
            }}>Join the effort by well-meaning Africans using technology to slow down and eventually halt the spread of COVID-19</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'center',paddingTop:40,}}>
            <TextInput keyboardType={'phone-pad'}
            value={this.state.phone}
            onChangeText={(value)=>this.setState({phone:value,validity:false})}
            style={{
                flex:1,
                backgroundColor:'#f3f3f3',
                borderRadius:5,fontFamily:'rale_regular',
                fontSize:14,
                height:50,alignSelf:'center'
            }}
            placeholder='Phone Number'
            maxLength={10}
            />
            </View>
            <View style={{flexDirection:'row',paddingTop:15}}>
            <Button success
            disabled={!Boolean(this.state.phone)}
            style={{
                flex:1,
                height:50,alignSelf:'center',justifyContent:'center',
                borderRadius:5
            }}
            onPress={()=>{this.props.navigation.navigate('Change Phone',{data:this.state.phone})}}
            >
            <Text>Get Started..</Text>
            </Button>
            </View>
            </View>
            </ImageBackground>
            </View>
        )
    }
}