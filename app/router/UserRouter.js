import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

import User from '../user/UserMsg'
import Login from '../user/index'

import { StackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
const {height, width} = Dimensions.get('window')

export default StackNavigator(  
    {  
        Login: {  
            screen: Login,
            navigationOptions:{             
              headerTitle:"用户登录"
            }
        },
        User:{
            screen: User,
            navigationOptions:{             
              headerTitle:"个人中心",
              headerLeft:null
            }           
        }
    },{
        navigationOptions:{             
          headerStyle: {
            backgroundColor:"#DF2A34"
          },
          headerTitleStyle:{
            color:"#ffffff"
          },
          headerBackTitle :null,
          headerBackTitleStyle:{
            color:"#ffffff"
          }                     
        }   
    }   
); 

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#ffffff",
        height:height
    },
    backSty:{
        fontSize:16,
        color:"#ffffff",
        textAlign:"left"
    },
    leftBackBox:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    backIcon:{
        color:"#ffffff",
        marginRight:5,
        marginLeft:10,
        marginTop:3
    }    
});
  