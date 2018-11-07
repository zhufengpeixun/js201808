import * as Types from "../action-types";
export default {
    // 新增todo;
    add(todo){
        return {type:Types.ADD_TODO,todo}
    }
}
