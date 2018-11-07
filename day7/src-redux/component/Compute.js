import React from "react";
import {connect}  from "react-redux";
import actions from "../store/actions/Counter"

class Compute extends  React.Component{
  /*  constructor(){
        super();
        this.state = store.getState();
    }
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({num:store.getState().num})
        })
    }*/
    render(){
        return <div>
            {this.props.num%2?"奇数":"偶数"}
        </div>
    }
}
export default connect(state=>({...state.counter}),actions)(Compute)