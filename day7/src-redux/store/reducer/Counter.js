import  * as Types from "../action-types";
import {combineReducers} from "redux";
let initState = {num:0};

function counter(state=initState,action) {
    switch (action.type){
        case Types.ADD_COUNT:
            return {num:state.num+1};
        case Types.MIN_COUNT:
            return {num:state.num-1}
    }
    return  state;
}
let reducer = combineReducers({
    counter
})
export default reducer;
