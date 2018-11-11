import * as Types from "../action-types";
let initState = {
    currentType:"all",
    home:[]
}
export default function home(state=initState,action) {
    switch (action.type){
        case Types.CHANGE_TYPE:
            return {...state,currentType:action.val}
        case Types.SET_SLIDERS:
            return {...state,home:action.payload}
    }
    return state;
}