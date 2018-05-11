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

import Request from '../common/tools'
import Url from '../common/config'
import Item from './item/'

import Icon from 'react-native-vector-icons/Ionicons'


export default class List extends  Component {
    constructor(props, context) {
      super(props, context)
      this.state={
         data:[],
         isLoading:false,
         nextPage:1,
         total:40,
         currentTotal:0,
         limit:10,
         isRefreshing:false        
      }
    }
    componentDidMount(){
       this._fetchData(1,"up");
    }
    _fetchData(pageNum,type){
        if(type && type==="up"){
          this.setState({
            isLoading:true
          })
        }
        Request.get(Url.listUrl,{limit:this.state.limit,page:pageNum}).then((dat)=>{
          let datArr=[...dat.data];
          if(dat.success){
              if(type && type==="up"){
                datArr=this.state.data.concat(datArr);
              }else{
                datArr=datArr.concat(this.state.data);
              }             
              this.setState({
                data:datArr,
                currentTotal:datArr.length,
              })
              if(type && type==="up"){
                setTimeout(()=>{
                  this.setState({
                    isLoading:false
                  })
                },800)   
              }else{
                this.setState({
                  isRefreshing:false
                })
              }
                        
          }   
        }).catch((error)=>{
            this.setState({
              isLoading:false,
              isRefreshing:false
            })
            console.warn(error)
        })
    }

    _hasMore(){
        return this.state.total!==this.state.currentTotal 
    }

    /**
     * 上滑加载
     */  
    _fetchMoreData(){
        if(!this._hasMore() || this.state.isLoading){
          return
        }
        this.setState({
          nextPage:this.state.nextPage+1
        },()=>{
          this._fetchData(this.state.nextPage,"up");
        })       
    }

     /**
      *  上滑加载更多提示
      */
    _renderFooter(){
        if(!this._hasMore()){
          return (
            <View><Text style={styles.renderFooter}>已经没有数据了</Text></View>
          )
        }
        return <ActivityIndicator style={styles.loadingMore} />
    }

    /**
     * 下拉刷新
     */
    _onRefresh(){
    
        if(!this._hasMore() || this.state.isRefreshing){
          return
        }
        this.setState({       
          isRefreshing:true,    
          nextPage:this.state.nextPage+1
        },()=>{
          this._fetchData(this.state.nextPage,"down");
        })   
    }

    render() {

        return (
          <View style={styles.container}>
              <FlatList
                data={this.state.data}
                keyExtractor={item=>item.id}
                ItemSeparatorComponent={()=><View  style={styles.line} />}
                renderItem={({item}) => <Item {...this.props}  data={item} key={item.id}  /> }
                showsVerticalScrollIndicator= {false}   
                onEndReached={()=>{ this._fetchMoreData()}} 
                onEndReachedThreshold={0.2}
                ListFooterComponent={()=>this._renderFooter()}
                onRefresh={()=>{this._onRefresh()}}
                refreshing={this.state.isRefreshing}              
              />
          </View>
        )
    }
  }

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#ffffff",
    height:height
  },
  line:{
      height:1,
      backgroundColor:"#F6F8FA",
      marginLeft: 10,
      marginRight: 10,
      marginTop: 20,
      marginBottom: 20
  },
  renderFooter:{
    height:50,
    textAlign:"center",
    lineHeight:50,
    fontSize: 14,
    backgroundColor:"#F6F8FA",
    color:"#B3B3B3",
    marginTop:20
  },
  loadingMore:{
    marginVertical: 20,
  },
  headerTitle:{
    fontSize:14,
    color:"#ffffff",
    textAlign:"center"
  }
  
});
  