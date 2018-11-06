// 合并所有的reducer；合并成一个reducer;
// combineReducers
//import {combineReducers} from "redux";
//combineReducers  是一个函数；需要传一个对象；返回一个新的reducer；
import counter  from "./Counter";
import todo from "./Todo";
/*let reducer = combineReducers({
    counter,
    todo
});*/
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
function combineReducers(reducers) {
    return (state={},action)=>{// state:createStore中的state;
        // 这个函数在createStore 中执行；
        // 由于dispatch初始state时；传入了undefined；所以需要给state一个默认的空对象；
        let obj= {};
        for(let key in reducers){
           obj[key]= reducers[key](state[key],action)
        }
        // return obj 最终覆盖createStore中的state；
        return obj;// {counter:{},todo:{}}
    }
}
let reducer = combineReducers({
    counter,
    todo
});
export default reducer;

// createStore  ---> 文件拆分---> combineReducers ---> react-redux
