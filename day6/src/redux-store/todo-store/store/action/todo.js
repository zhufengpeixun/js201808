// 当前文件导出一个对象；对象中的属性名的属性值都是一个函数；那么函数的返回值都是一个对象；这个对象是dispatch派发的动作；【这个对象是dispatch的实参；】
import  * as Types from "../action-types";
export default {
    add(data){
        return {type:Types.ADD,data:data}
    }
}
