
import React from "react";
import store from "../store/index";
import actions from "../store/actions/Counter"
import {connect} from "react-redux";
// connect : 连接； react-redux : 需要返回一个连接后的组件；
class Counter extends  React.Component{
   /* constructor(){
        super();
        // 把store中的状态获取到赋值给当前组件的私有状态；
        this.state = store.getState()
    }
    componentDidMount(){
        store.subscribe(()=>{
            // 每派发一次动作，设置一下当前的最新的状态；从而刷新视图跟store中数据保持一致；
            this.setState({num:store.getState().num})
        })
        // 为了改变状态刷新视图；
        // 属性和状态发生会导致视图的刷新；
        // 如何将store中状态和action放到当前的组件的属性上？
        // react-redux
    }*/
    add=()=>{
        //store.dispatch(actions.add())
        this.props.add(2,3)
    }
    min=()=>{
        //store.dispatch(actions.min())
        this.props.min()
    }
    render(){
        console.log(this.props);
        return <div>
            <p>{this.props.num}</p>
            <button onClick={this.add}>+</button>
            <button onClick={this.min}>-</button>
        </div>
    }
}
// connect : 是一个高阶函数；
// 函数的返回值是一个函数；函数需要传当前的组件；
// connect : 传两个函数
// mapStateToProps
// mapDispatchToProps
/*let mapStateToProps=(state)=>{
    // state=== store.getState()
    // 这个state 是store中的getState的返回值；
    console.log(state.counter)
    return state.counter;
}*/
//
/*let mapDispatchToProps = (dispatch)=>{
    // dispatch : store.dispatch
    // 将dispatch进行重新的包装；包装之后的对象传给当前的组件属性；
    return {
        // 这个返回的对象最终会传给当前组件的实例属性；
        add1(2){
            dispatch(actions.add())
        },
        min2(){
            dispatch(actions.min())
        }
    }
}*/
// connect()() 返回的是一个组件；
// 当connect直接传actions时，会默认调用一个方法；bindActionCreators;将action遍历进行重新包装成新的对象；把这个对象放在当前实例的属性上；
//bindActionCreators(actions);

/*function bindActionCreators(actions,dispatch) {
    let obj = {};
    for(let key in actions){
        obj[key] = (...arg)=>{
            dispatch(actions[key](...arg))
        }
    }
    return obj;
}*/
export  default  connect(state=>({...state.counter}),actions)(Counter)