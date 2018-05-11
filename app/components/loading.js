import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';

export default class Loading extends Component {

    constructor(props, context) {
      super(props, context)
    }

    render() {  
      return (
         <View>
            { this.props.tuff  && <ActivityIndicator style={styles.loadingMore} /> }
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
    loadingMore:{
      marginVertical: 20,
    },
  });
  