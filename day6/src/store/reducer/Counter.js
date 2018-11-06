import * as Types from "../action-type";
// reducer 中存储初始值；和改变状态的逻辑；
let initState = {num: 100};
function reducer(state = initState, action) {
    switch (action.type) {
        case Types.ADD_COUNT:
            return {num: state.num + 1};
        case Types.MIN_COUNT:
            return {num: state.num - 1}
    }
    return state;
};
export default reducer;