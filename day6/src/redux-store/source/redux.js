// redux  : 统一数据管理；将所有的数据放在一个公用的容器中；所有的组件可以获取到当前容器中的数据；如果组件想更改容器中的状态；需要派发一个动作通知reducer；更改状态；
// function
// class  : this  state  生命周期；

function createStore(reducer){
    // 1. state  2.getState  3. dispatch   4. subscribe
    let  state;
    let getState =()=>JSON.parse(JSON.stringify(state));
    let listeners = [];
    let subscribe=(fn)=>{
        listeners.push(fn);
        return ()=>{
            listeners = listeners.filter((item,index)=>item!==fn);
        }
    }
    function dispatch(action) {
        state=reducer(state,action);
        // 让订阅号的方法执行；
        listeners.forEach((item,index)=>item());
    }
    dispatch({});// 给state
    return {
        getState,
        subscribe,
        dispatch
    }
}
export  {
    createStore
};


