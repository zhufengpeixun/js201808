import * as Types from "../action-types";
export default {
    // 新增todo;
    add(todo){
        return {type:Types.ADD_TODO,todo}
    },
    // 删除todo；
    delete(id){
        // 传入当前的id;
        return {type:Types.DELETE_TODO,id}
    },
    change(id){
        return {type:Types.CHANGE,id}
    },
    changeType(val){
        return {type:Types.CHANGE_TYPE,val}
    }
}
