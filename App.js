/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';



import Icon from 'react-native-vector-icons/Ionicons'
import Tools from './app/common/tools'
import Url from './app/common/config'

import Homerouter from './app/router/HomeRouter'
import Xiangqing from './app/xiangqing'
import Userouter from './app/router/UserRouter'

import { TabNavigator,TabBarBottom } from 'react-navigation'

import {getUserInfo} from './app/store/reducer'
import {connect} from 'react-redux'


export default TabNavigator({
      home: {
          screen: Homerouter,
          navigationOptions:{
              tabBarLabel: '首页',
              tabBarIcon:({tintColor})=>(<Icon name="ios-home" size={22} color={tintColor} />)  
          }
      },
      Xiangqing: {
        screen: Xiangqing,
        navigationOptions:{
            tabBarLabel: '详情页',
            tabBarIcon:({tintColor})=>(<Icon name="ios-list-box" size={22} color={tintColor}  />)   
        }
      },
      User: {
        screen: Userouter,
        navigationOptions:{
            tabBarLabel: '个人中心',
            tabBarIcon:({tintColor})=>(<Icon name="ios-chatboxes" size={22} color={tintColor} />)   
        }
      }
  
},{
  initialRouteName: 'home',
  tabBarPosition: 'bottom',
  tabBarComponent:TabBarBottom,
  swipeEnabled:false,
  animationEnabled:false,
  lazy:true,
  tabBarOptions:{
    style: { height:50 },
    labelStyle:{ marginBottom:5,fontSize:14},
    activeTintColor:"#cc0000",
    activeBackgroundColor:"#999999"
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
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
});
