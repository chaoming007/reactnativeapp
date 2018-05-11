import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  Dimensions,
  TextInput
} from 'react-native';

import Button from 'apsl-react-native-button'
import { getUserInfo } from '../store/reducer'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/EvilIcons'


const {height, width} = Dimensions.get('window')

class Login extends Component {
    constructor(props, context) {
      super(props, context)
      this.state={
        isLoading:false,
        inputVal:"",
        tsTxt:""
      }
    }
    componentWillReceiveProps(props){
      let { navigation }=props;
      if(Object.keys(props.state.userInfo).length>0){
        this.setState({
          isLoading:false
        })
        navigation.navigate("User");
      }    
    }
    _loginFun(){
      if(this.state.inputVal.length<=0){
        this.setState({
          tsTxt:"内容不能为空！"
        })
        return;
      }
      if(this.state.inputVal.length>=1){
        this.setState({
          isLoading:true
        })
        this.props.getUserInfo("300d75b2-4588-4b7f-81de-d4a6767f63e3");
      }
      
    }
    _changeTextFun(text){
      this.setState({
        inputVal:text,
        tsTxt:""
      })
    }
    render() {
      return (
        <View style={styles.loginBox}>
          <Text style={styles.loginTxt}>请输入accessToken</Text>
          <View style={styles.loginInputWarp}>
            <Icon style={styles.loginUnlock} name="unlock" size={20}></Icon>
            <TextInput 
              onChangeText={(text)=>{this._changeTextFun(text)}}
              autoCapitalize="none" 
              autoCorrect={false} 
              style={styles.loginInput} 
              placeholder="请输入accessToken"
              >
            </TextInput>
          </View>

          <View style={styles.tsMsgBox}>
            <Text style={styles.tsTxtBox}>{this.state.tsTxt}</Text>
          </View>
          <Button 
            isLoading={this.state.isLoading} 
            onPress={()=>{this._loginFun()}} 
            textStyle={styles.loginButtonText} 
            style={styles.loginButton}
          >马上登录</Button>
        
        </View>
      )
    }
  }
  
  export default connect((state)=>({state}),{getUserInfo})(Login)

  const styles = StyleSheet.create({
 
    loginBox:{
      flexDirection: 'column',
      paddingHorizontal: 15,
      justifyContent:"flex-start",
      backgroundColor:"#ffffff",
      height:height,
      width:width,
      alignItems:"center",
      paddingTop: height*0.1
    },
    loginTxt:{
      lineHeight:40,
      fontSize: 16,
      fontWeight:"bold",
      textAlign:"left",
      paddingRight: 10,
      height:40,
      marginBottom:10
    },
    loginInput:{
      height:35,
      borderColor: "#F4FCFF",
      borderWidth: 1,
      lineHeight:35,
      width:width-30,
      paddingLeft:25,
      paddingRight:10,
      marginBottom: 10,
      color:"#000000"
    },
    loginInputWarp:{
    },
    loginUnlock:{
      position:"absolute",
      top:10,
      left:5,
      color:"#cccccc"
    },
    loginButtonText:{
      color:"#8e44ad",
      backgroundColor: '#ffffff'

    },
    loginButton:{
      borderColor: '#8e44ad',
      backgroundColor: '#ffffff',
      borderRadius: 0,
      borderWidth: 1,
      height:40
    },
    tsMsgBox:{
      height:35,
      width:width-30,
      paddingHorizontal:10,
      marginBottom: 10  
    },
    tsTxtBox:{
      color:"#cc0000",
      fontSize:14
    }

  
  });
  