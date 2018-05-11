import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

import Home from '../home/'
import Detail from '../detail/'

import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'

const {height, width} = Dimensions.get('window')


export default StackNavigator(  
    {  
        Home: {  
            screen: Home,
            navigationOptions:{             
              headerTitle:"列表页"
            }
        },
        Detail:{
            screen: Detail,
            navigationOptions:({navigation})=>({          
              headerTitle:"详情页",
              headerLeft:(s)=>(
                <View style={styles.leftBackBox}>
                  <Icon onPress={() => navigation.goBack()} name="ios-arrow-back" size={24} style={styles.backIcon}></Icon>
                  <Text onPress={() => navigation.goBack()} style={styles.backSty}>返回</Text>
                </View>
              ),
              tabBarVisible: false
            })            
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
  