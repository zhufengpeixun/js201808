import React from "react";
import store from "../store/index"
import action from "../store/action/counter"
export default class Counter extends React.Component{
    constructor(){
        super();
        this.state = store.getState().counter;
    }
    add=()=>{
        store.dispatch(action.add(2))
    }
    min=()=>{
        store.dispatch(action.min(3))
    }
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({num:store.getState().counter.num})
        })
    }
    render(){
        //console.log(store.getState());
        return <div>
            <p>{this.state.num}</p>
            <button onClick={this.add}>+</button>
            <button onClick={this.min}>-</button>
        </div>
    }
}
