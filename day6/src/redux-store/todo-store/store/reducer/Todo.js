import * as Types from "../action-types"
let initState = {
    todo:["要吃饭","要找工作"]
};
function reducer(state=initState,action) {
    switch (action.type){
        case Types.ADD:
            return {todo:[...state.todo,action.data]}
    }
    return state;
}
export default reducer;