import { AppRegistry,
         YellowBox,
         AsyncStorage
       } from 'react-native';
import React, { Component } from 'react';
import {Provider} from 'react-redux'
import Store from './app/store'
import App from './App';
import Login from './app/login'

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

class Main extends Component {
    constructor(props, context) {
        super(props, context)
        this.state={
            isLogin:true
        }       
    }
    componentDidMount() {
        this._getStoreFun();
    }
    _getStoreFun(){
        AsyncStorage.getItem("user").then((dat)=>{
            if(dat){
                this.setState({
                    isLogin:false
                })
            }
        })
    } 
    _afterLoginFun(dat){

        let userDat=JSON.stringify(dat.data);

        AsyncStorage.setItem("user",userDat,(err)=>{
            if(!err){
                console.log("登录成功")
                this.setState({
                    isLogin:false
                })
            }
        })
  
    }
    render(){
        if(this.state.isLogin){
            return <Login afterLogin={(dat)=>{this._afterLoginFun(dat)}} />
        }
        return <Provider store={Store}>
            <App />
        </Provider>
    }
}


AppRegistry.registerComponent('app2',()=>Main);



// quality  质量  品质 
// register  注册 登记 
// specify  指定 详细说明 
// deprecated 不赞成的  弃用的 
// performance 性能 绩效 表演
// improve   改善 增进 提高
// skip  跳跃 跳过