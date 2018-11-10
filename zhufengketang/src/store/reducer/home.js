import * as Types from "../action-types";
let initState = {
    currentType:"all"
}
export default function home(state=initState,action) {
    switch (action.type){
        case Types.CHANGE_TYPE:
            return {...state,currentType:action.val}
    }
    return state;
}