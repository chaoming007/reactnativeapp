import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  WebView,
  ImageBackground,
  TouchableHighlight
} from 'react-native';

import { withNavigation} from 'react-navigation'

import Icon from 'react-native-vector-icons/MaterialIcons'
import Tool from '../../common/tools'


class Item extends Component {
    constructor(props, context) {
      super(props, context)     
    }  
    render() {

      let { id,title,content,reply_count,visit_count }=this.props.data;

      let { navigate }=this.props.navigation;

      return (
        <TouchableHighlight activeOpacity={1} underlayColor="transparent" onPress={()=> navigate("Detail", { id}) }>
            <View style={styles.content} >
                <View style={styles.lefContent}>
                        <Text style={styles.tit}  >{title}</Text>
                        <Text style={styles.intro} numberOfLines={3}>{Tool.filterHTMLTag(content)}</Text>
                        <View style={styles.infoBox}>
                                <View style={styles.infoWarpBox}>
                                    <Icon name="star" size={18} color="#cccccc" />
                                    <Text style={styles.txtSty}>
                                        喜欢({reply_count})
                                    </Text>
                                </View>
                                <View style={styles.infoWarpBox}>
                                    <Icon name="comment" size={18} color="#cccccc" />
                                    <Text style={styles.txtSty}>
                                        评论({visit_count})
                                    </Text>
                                </View>
                        </View>
                </View>                
            </View>
         </TouchableHighlight>
      )
    }
}

export default withNavigation(Item)  

  const styles = StyleSheet.create({
     content:{
         flexDirection:'row',
         paddingLeft: 10,
         paddingRight: 10   
     },
     logo:{
         width:100,
         height:140,
         marginRight: 10,
         justifyContent: 'center',
         alignItems: 'center'
     },
     lefContent:{
         flex:1,
         flexDirection:"column"
     },
     tit:{
        height:35,
        lineHeight:35,
        fontSize: 18
     },
     intro:{
         lineHeight:20,
         fontSize: 14,
         color:"#999999",
         marginBottom:15
     },
     infoBox:{
        flexDirection:"row"
     },
     infoWarpBox:{
        flexDirection:"row",
        justifyContent:"flex-start",
         alignItems:"center",
         flex:1
     },
     txtSty:{
         fontSize:14,
         color:"#cccccc",
         marginLeft: 5   
     }
    

  });
  