import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Header extends Component {
    constructor(props, context) {
      super(props, context)
    }
    render() {
      return (
         <View style={styles.container}>
             <View style={styles.header}>
                <Text style={styles.headerTitle}>列表页</Text>
             </View>
         </View>
      )
    }
  }
  
  const styles = StyleSheet.create({
    container: {
    },
    header:{
       backgroundColor:"#DA101E",
       paddingTop: 30,
       paddingBottom: 15
    },
    headerTitle:{
        fontSize:14,
        color:"#ffffff",
        textAlign:"center"
    }


  });
  