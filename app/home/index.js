import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  Dimensions
} from 'react-native';

const {height, width} = Dimensions.get('window')


import Icon from 'react-native-vector-icons/Ionicons'
import ScrollableTabView,{DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view'
import List from './list'


export default class Home extends  Component {
    constructor(props, context) {
      super(props, context)
      this.state={            
      }
    }

    render() {
        return (
            <ScrollableTabView
              tabBarBackgroundColor="#ffffff"
              tabBarActiveTextColor="#D43C33"
              tabBarInactiveTextColor="#000000"
              initialPage = {1}
              tabBarUnderlineStyle={{backgroundColor: '#D43C33'}}
              renderTabBar={() => <ScrollableTabBar />}
            >
              <List tabLabel="综合" />
              <List tabLabel="热点" />
              <List tabLabel="新闻" />
              <List tabLabel="知识" />
              <List tabLabel="问答" />
              <List tabLabel="新闻1" />
              <List tabLabel="知识2" />
              <List tabLabel="问答3" />
            </ScrollableTabView>
        )
    }
  }

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#ffffff",
    height:height
  }
  
});
  