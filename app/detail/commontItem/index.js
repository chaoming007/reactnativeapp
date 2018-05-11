import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Tools from '../../common/tools'


export default class Item extends Component {
    constructor(props, context) {
      super(props, context)     
    }  
    render() {

      let {author,content,create_at}=this.props.data;
      let { cid }=this.props;

      return (
        <View style={styles.itemBox}>
            <View style={styles.userBox}>
                <Image source={{uri:author.avatar_url}} style={styles.userImg} />
            </View>
            <View style={styles.userContent}>
                <View style={styles.userNameBox}>
                   <Text style={styles.userNameTxt}>{author.loginname}</Text>
                   <Text style={styles.userTime}>{cid+"楼·"+Tools.filetTime(create_at)}</Text>
                </View>
                <View>
                  <Text style={styles.userTxtBox}>{Tools.filterHTMLTag(content)}</Text>
                </View>
            
            </View>
      
        </View>
      )
    }
}

  
  const styles = StyleSheet.create({
     content:{
        margin:0
     },
     itemBox:{
        paddingTop: 15,
        paddingBottom: 15,
        borderBottomColor: "#f4f4f4",
        borderBottomWidth: 1,
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10
     },
     userBox:{
        width:50,
        height:50,
        borderRadius:25
     },
     userImg:{
        width:50,
        height:50,
        borderRadius:25
     },
     userContent:{
       flex:1,
       paddingLeft: 15
     },
     userNameBox:{
       height:20,
       marginBottom: 5,
       flexDirection:"row"
     },
     userNameTxt:{
        lineHeight:20,
        fontSize: 14,
        fontWeight:"bold" 
     },
     userTime:{
        lineHeight:20,
        fontSize: 14,
        color:"#3687C7",
        marginLeft:10
     },
     userTxtBox:{
        lineHeight:28,
        fontSize: 16,
        color:"#999999"
     }

  });
  