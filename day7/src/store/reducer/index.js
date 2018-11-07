import {combineReducers} from "redux";
import * as Types from "../action-types";
let initState={
    type:"all",
    todos:[
        {isSelected:true,title:"下午要听歌"},
        {isSelected:false,title:"今天立冬"}
        ]
}
function todo(state=initState,action) {
    switch (action.type){
        case Types.ADD_TODO:
            return {...state,todos:[...state.todos,{isSelected:false,title:action.todo}]}
    }
    return state;
};
let reducer = combineReducers({
    todo
});
export default reducer;

