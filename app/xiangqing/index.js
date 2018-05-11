import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';

import tools from '../common/tools'
import Url from '../common/config'

export default class Xiangqing extends Component {
    constructor(props, context) {
      super(props, context)
    }

    componentDidMount(){
      
    }
    _getLoginFun(){
       let params={
           phoneNumber:1234545435,
           passWord:234234424
       }
       tools.post(Url.loginUrl,params).then((data)=>{
          console.log(data)
       })
    }
    
    render() {
      return (
        <View>
          <Text>详情页</Text>
          <View style={styles.btn}></View>
        </View>
         
      )
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    btn:{
      borderWidth:5,
      borderColor:"#cc0000",
      borderStyle:"dotted",
      height:100
    }
  });
  