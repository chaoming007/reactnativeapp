import Tools from '../common/tools'
import Url from '../common/config'

const defaultState={
    userInfo:{}
}

const GET_USER_INFO="GET_USER_INFO";    //获得用户信息


function reducerFun(state=defaultState,action){

    let { type,msg }=action;

    switch(type){
        case GET_USER_INFO:
            state.userInfo=msg;
            return Object.assign({},state)       
        default:
            return state;
    }
}
/*300d75b2-4588-4b7f-81de-d4a6767f63e3*/
export const getUserInfo=(token)=>(dispatch)=>{
    setTimeout(()=>{
        Tools.post(Url.userUrl,{accesstoken:token}).then((dat)=>{
            dispatch({
                type:GET_USER_INFO,
                msg:dat
            })
        })
    },500)
}


export default reducerFun;