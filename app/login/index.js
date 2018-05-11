import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  TextInput,
  Dimensions
} from 'react-native';

const {height, width} = Dimensions.get('window')

import Button from 'apsl-react-native-button'

import tools from '../common/tools'
import Url from '../common/config'

export default class Login extends Component {
    constructor(props, context){
      super(props, context)
      this.state={
         phoneNum:""
      }
    }
    componentDidMount(){
      
    }
    _getLoginFun(){
      let params={
        phoneNumber:34234234,
        passWord:344322
      }
      tools.post(Url.loginUrl,params).then((data)=>{
        console.log(data) 
        this.props.afterLogin(data)       
      })
    }
    _changeInputTxt(txt){
      if(txt!==""){
        this.setState({
          phoneNum:txt
        })
      }
    }
    _loginFun(){
      this._getLoginFun();
    }  
    render() {
      return (
        <View style={styles.container}>
          <TextInput 
          style={styles.inpTxt}
          autoCapitalize={"none"}
          autoCorrect={false}
          keyboardType={'number-pad'}
          placeholder="请输入电话号码"
          onChangeText={(txt)=>{ this._changeInputTxt(txt) }}
          ></TextInput>
          <Button 
            onPress={()=>{this._loginFun()}} 
            textStyle={styles.loginButtonText} 
            style={styles.loginButton}
          >马上登录</Button>

        </View>
         
      )
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#cccccc',
      padding:10
    },
    inpTxt:{
      borderWidth:1,
      borderColor:"#999999",
      borderStyle:"dotted",
      height:35,
      backgroundColor:"#ffffff",
      width:width-20,
      paddingHorizontal: 10,
      marginBottom:20
      
    },
    loginButtonText:{
      color:"#8e44ad",
      backgroundColor: '#ffffff',
      height:38,
      lineHeight:38

    },
    loginButton:{
      borderColor: '#8e44ad',
      backgroundColor: '#ffffff',
      borderRadius: 0,
      borderWidth: 1,
      height:40
    }
   
  });
  

 
