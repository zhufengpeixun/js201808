import React from "react";
import ReactDOM from "react-dom";
import store from "../store/index"
import * as Types from "../store/action-type"
class Counter extends React.Component {
    constructor() {
        super();
        this.state = {num: store.getState().num}
    }
    add = () => {
        store.dispatch({type: Types.ADD_COUNT})
    }
    min = () => {
        store.dispatch({type:Types.MIN_COUNT})
    }
    componentDidMount() {
        store.subscribe(() => {
            this.setState({num: store.getState().num});
        })
    }
    render() {
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
