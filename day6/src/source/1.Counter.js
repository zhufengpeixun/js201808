import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "./redux";
const ADD_COUNT = "ADD_COUNT";
const MIN_COUNT = "MIN_COUNT";
let initState = {num: 100};
function reducer(state = initState, action) {
    switch (action.type) {
        case ADD_COUNT:
            return {num: state.num + 1};
        case MIN_COUNT:
            return {num: state.num - 1}
    }
    return state;
};
let store = createStore(reducer);
window._store = store;
class Counter extends React.Component {
    constructor() {
        super();
        this.state = {num: store.getState().num}
    }
    add = () => {
        store.dispatch({type: ADD_COUNT})
    }
    min = () => {
        store.dispatch({type: MIN_COUNT})
    }
    // defaultProps --> constructor--> componentWillMount-->render-->componentDidMount
    // shouldComponentUpdate-->componentWillUpdate-->render-->componentDidUpdate
    // componentWillReceiveProps
    // componentWillUnmount;
    componentDidMount() {
        // 当DOM挂载之后执行；
        // 当store中的状态变化后，要触发render这个钩子函数，让视图更新；
        // 需要订阅一个函数；当dispatch时，就会执行；
        store.subscribe(() => {
            this.setState({num: store.getState().num});
        })
    }

    render() {
        // 只要出发render就可以；
        return <div>
            <p>{this.state.num}</p>
            <button onClick={this.add}>+</button>
            <button onClick={this.min}>-</button>
        </div>
    }
}
ReactDOM.render(
    <Counter/>,
    document.querySelector("#root")
);
