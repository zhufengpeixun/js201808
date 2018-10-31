import React from "react";
import ReactDOM from "react-dom";
// 状态：是组件自己私有的；是可以更改的；
// props :属性；
// state ： 私有；
class Dev extends React.Component{
    constructor(){
        super();
        // 一般会在constructor中定义状态；
        this.state = {count:100}
    }
    // 在类的原型上定义事件行为的方法；
    add=()=>{
        //this.state=8;// 不会导致视图的刷新；
        //console.log(this);
        // setState : 是对当前组件状态修改的方法；并且可以调用render方法重新执行；从而让视图刷新；
        //this.setState({count:this.state.count+1});
        //console.log(this.state.count);
        // setState还可以传递一个函数；函数的参数是代表上一次的状态
        // this.setState((prev)=>({count:prev.count+1}))
        // 如果会同时设置同个状态；那么setstate会合并成一个；
        /*this.setState({count:this.state.count+1});
        this.setState({count:this.state.count+1});*/
        // 如果下一个状态依赖于上一个状态时，写成函数的形式；
        this.setState({count:this.state.count+1},function () {
            this.setState({count:this.state.count+1});
        })
        this.setState((prev)=>({count:prev.count+1}))
    }
    render(){
        console.log("render")
        //console.log(this);// state
        //this.state.count=1000;
        return  <div>
            <p>{this.state.count}</p>
            <button onClick={this.add}>+</button>
        </div>
    }
}
// react中的事件绑定
// 1. 事件行为遵循驼峰命名；
// 2. 事件行为的属性值大括号中不能为空
ReactDOM.render(<Dev/>, document.querySelector("#root"));
