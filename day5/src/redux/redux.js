function createStore(reducer) {
    // 1. state  2. getState   3. subscribe  4.dispatch
    let  state;
    // 获取状态的方法；
    let getState =()=>JSON.parse(JSON.stringify(state));
    // 订阅的函数；
    let  listeners = [];
    let subscribe=(fn)=>{
        listeners.push(fn);
        return ()=>{
            listeners = listeners.filter((item)=>item!==fn);
        }
    }
    function dispatch(action) {
        state=reducer(state,action);
        // 发布订阅好的方法；
        listeners.forEach((item)=>{item()})
    }
    dispatch({});
    return {
        getState,
        subscribe,
        dispatch
    }
}

/*let  arr = [12,2,3,3,17];
// filter : 过滤； 把回调函数返回是true的那一项加入到新的数组中；
let a = arr.filter(function (item,index) {
    return item!==12;
});
console.log(a);*///[12,17]
