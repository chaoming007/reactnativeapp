import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  ActivityIndicator,
  ScrollView,
  FlatList
} from 'react-native';

import Tools from '../common/tools'
import Url from '../common/config'

import Loading from '../components/loading'
import Item from './commontItem/index'


export default class Detail extends Component {
    constructor(props, context) {
      super(props, context)
      this.state={
         tuff:true,
         dat:{},
         commentArr:[]
      }
    }
    componentDidMount(){
      this._fetch();
    }

    _fetch(){
      if(this.props.navigation.state.params.id){
        let url=Url.detailUrl+this.props.navigation.state.params.id;
        console.log(url)
        Tools.get(url).then((dat)=>{
          if(dat.success){
            this.setState({
              tuff:false,
              dat:{...dat},
              commentArr:[...dat.data.replies]
            })
          }
        })
      }
    }

    _renderFooter(){
        return (
          <View><Text style={styles.renderFooter}>已经没有评论了</Text></View>
        )
    }
     
    _renderView(){

        return (

           <View>
              <ScrollView stickyHeaderIndices={[1]}>
                      <View style={styles.contentBox}>
                          <View>
                              <Text style={styles.contentTit}>{Tools.filterHTMLTag(this.state.dat.data.title)}</Text>
                              <View style={styles.newInfoBox}>
                                <View style={styles.author}>
                                  <Text style={styles.authorTxt}>作者：{this.state.dat.data.author.loginname}</Text>
                                </View>
                                <View style={styles.time}>
                                  <Text style={styles.timeTxt}>发布时间：{Tools.filetTime(this.state.dat.data.create_at)}</Text>
                                </View>
                              </View>
                              <Text style={styles.contentTxt}>{Tools.filterHTMLTag(this.state.dat.data.content)}</Text>
                          </View>                    
                      </View>

                      <View style={styles.commentWarp}>
                        <View style={styles.commentTit}>
                          <Text style={styles.commentTitTxt}>网友评论</Text>
                          <Text style={styles.commentTitInfo}>(34234)</Text>
                        </View>
                      </View>
                      
                      <View style={styles.listWarp}>
                        <FlatList
                        data={this.state.commentArr}
                        keyExtractor={item=>item.id}
                        renderItem={({item,index}) => <Item {...this.props} cid={ index+1 }   data={item} key={item.id}  /> }
                        showsVerticalScrollIndicator= {false}   
                        ListFooterComponent={()=>this._renderFooter()}   
                        />
                      </View>

              </ScrollView>  
          </View>
        )

    }

    render() {
      return (
        <View>
           { Object.keys(this.state.dat).length>0 ? this._renderView(): <Loading tuff={ this.state.tuff } /> }
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
    contentBox:{
       padding:10,
       backgroundColor:"#ffffff"
    },
    contentTit:{
      fontSize: 20,
      lineHeight:26,
      paddingBottom: 10,
      paddingTop: 10,
      fontWeight: 'bold'
      
    },
    contentTxt:{
      fontSize: 16,
      lineHeight:30
    },
    newInfoBox:{
       flexDirection: 'row',
       marginBottom: 15
    },
    author:{
      flex:1
    },
    authorTxt:{
       height:25,
       lineHeight:25,
       fontSize:12,
       color:"#cccccc"
    },
    time:{
      flex:1
    },
    timeTxt:{
       height:25,
       lineHeight:25,
       fontSize:12,
       color:"#cccccc"
    },
    // 评论

    commentWarp:{
      margin:0,
      display:"flex"
    },
    commentHidden:{
      display: 'none',
    },
    commentTit:{
      height:30,
      backgroundColor:"#3C3738",
      flexDirection:"row",
      paddingLeft:10
    },
    commentTitTxt:{
       fontSize:16,
       fontWeight:"bold",
       color:"#ffffff",
       lineHeight:30,
       marginRight: 10
    },
    commentTitInfo:{
       fontSize:12,
       color:"#cccccc",
       lineHeight:30
    },
    renderFooter:{
      height:50,
      textAlign:"center",
      lineHeight:50,
      fontSize: 14,
      backgroundColor:"#ffffff",
      color:"#B3B3B3"
    },
    listWarp:{
      backgroundColor:"#ffffff"
    }


  });
  