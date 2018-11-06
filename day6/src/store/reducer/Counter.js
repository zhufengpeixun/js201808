
import * as Types from "../action-types";
let initState = {num:0}
function reducer(state=initState,action) {
    // state 是当前组件reducer的state；
    //console.log(state);
    switch (action.type){
        case Types.ADD_COUNT:
            return {num:state.num+action.m}
        case Types.MIN_COUNT:
            return {num:state.num-action.n}
    }
    return state;
}
export default reducer;