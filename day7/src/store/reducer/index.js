import {combineReducers} from "redux";
import * as Types from "../action-types";
let initState={
    type:"all",
    todos:[
        {id:1,isSelected:true,title:"下午要听歌"},
        {id:2,isSelected:false,title:"今天立冬"}
        ]
}
function todo(state=initState,action) {
    switch (action.type){
        case Types.ADD_TODO:
            return {...state,todos:[...state.todos,{id:state.todos.length+1,isSelected:false,title:action.todo}]}
        case Types.DELETE_TODO:
            // 把传过来的id和当前数组成员中id相同的那一项，删除；
            return {...state,todos:state.todos.filter((item)=>item.id!==action.id)};
        case Types.CHANGE:
            let newTodos = state.todos.map((item)=>{
                if(item.id===action.id){
                    item.isSelected = !item.isSelected;
                }
                return item;
            })
            return {...state,todos:newTodos}
        case Types.CHANGE_TYPE:
            return {...state,type:action.val}
    }
    return state;
};
let reducer = combineReducers({
    todo
});
export default reducer;

