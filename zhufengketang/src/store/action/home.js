import * as Types from "../action-types";
import {getSliders} from "../../api/home"
// 在真实的项目中；一般在action中发送请求；并且将请求到的数据设置给全局store中的属性；
export default {
    changeType(val){
        return {type:Types.CHANGE_TYPE,val}
    },
    getSlider(){
        return function (dispatch,getState) {
            // dispatch : store.dispatch
           getSliders().then(function (data) {
               // 这一个异步的请求操作；当请求数据成功之后，才会调用该方法；将数据设置给store中的state；
               dispatch({
                   type:Types.SET_SLIDERS,
                   payload:data
               })
           })
        }
    }
}
