
import React from "react";
import store from "../store/index";
import actions from "../store/actions/Counter"
export  default  class Counter extends  React.Component{
    constructor(){
        super();
        // 把store中的状态获取到赋值给当前组件的私有状态；
        this.state = store.getState()
    }
    componentDidMount(){
        store.subscribe(()=>{
            // 每派发一次动作，设置一下当前的最新的状态；从而刷新视图跟store中数据保持一致；
            this.setState({num:store.getState().num})
        })
    }
    add=()=>{
        store.dispatch(actions.add())
    }
    min=()=>{
        store.dispatch(actions.min())
    }
    render(){
        return <div>
            <p>{this.state.num}</p>
            <button onClick={this.add}>+</button>
            <button onClick={this.min}>-</button>
        </div>
    }
}