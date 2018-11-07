// createStore  combineReducers;
function createStore(reducer) {
    let  state;
    let getState=()=>JSON.parse(JSON.stringify(state));
    let listeners = [];
    let subscribe=(fn)=>{
        listeners.push(fn);
        return ()=>{
            listeners = listeners.filter((item)=>item!==fn)
        }
    }
    function dispatch(action) {
        state=reducer(state,action);
        // 让订阅的方法执行
        listeners.forEach((item)=>item())
    }
    dispatch({});
    return {
        getState,
        subscribe,
        dispatch
    }
}
function combineReducers(reducers) {
    return (state={},action)=>{
        let obj = {};
        for(let key in reducers){
            obj[key] = reducers[key](state[key],action)
        }
        return obj;
    }
}
export {
    createStore,
    combineReducers
}
