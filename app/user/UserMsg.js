import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
  AsyncStorage,
  ImageBackground
} from 'react-native';

import Button from 'apsl-react-native-button'
import { getUserInfo } from '../store/reducer'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/EvilIcons'
import ImagePicker from 'react-native-image-picker'


const {height, width} = Dimensions.get('window')


var options = {
  title: '请选择图片来源',
  cancelButtonTitle:'取消',
  takePhotoButtonTitle:'拍照',
  chooseFromLibraryButtonTitle:'相册图片',
  customButtons: [
    {name: 'hangge', title: '其他图片'},
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};


class Userinfo extends Component {
    constructor(props, context) {
      super(props, context)
      this.state={
        userInfo:""
      }
    }
    componentDidMount() {
        AsyncStorage.getItem("user").then((dat)=>{
          console.log(dat)
          if(dat){
              this.setState({
                userInfo:JSON.parse(dat)
              })
          }
          //AsyncStorage.clear()
        })
    }

    _choosePic() {
      ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('用户取消了选择！')
      }
      else if (response.error) {
        alert("ImagePicker发生错误：" + response.error)
      }
      else if (response.customButton) {
        alert("自定义按钮点击：" + response.customButton)
      }
      else {
        let source = { userAvatar: response.uri }
        this.setState({
          userInfo: source
        });
      }
    });
   }
   
    render() {
      return (
        <View>
          <TouchableOpacity onPress={()=>{this._choosePic()}}>
            <ImageBackground style={styles.imgSty} source={{uri:this.state.userInfo.userAvatar}}>
              <Image style={styles.avatarImg} source={{uri:this.state.userInfo.userAvatar}} />
              <View><Text>选择照片</Text></View>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      )
    }
  }
  
export default connect((state)=>({state}),{getUserInfo})(Userinfo)

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  imgSty:{
    width:width,
    height:width*0.5,
    flexDirection: 'column',
    justifyContent:"center",
    alignItems:"center"
  },
  avatarImg:{
    width:100,
    height:100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#FFFFFF"
  }
  

});
  