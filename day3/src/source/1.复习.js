// 1. createElement   render;
// JSX 元素就是一个React.createElement的语法糖
// render： 渲染成真实的DOM；并且添加到页面中；
import React from "react";
import ReactDOM from "react-dom";
let  a = <div id="box">123</div>
//let box = document.getElementById("box");// 只能获取上下文是document下的元素；
// 由于元素没有放入真实的DOM中，所以获取结果为null；
//console.log(box);
// 组件
// 1. function

function Build(a) {
    return <div>{a.n}</div>
}
// 2. class
class Con extends React.Component{
    constructor(){
        super();
        // 组件将数组包装成一个对象赋值给当前实例的props属性
        // 在constructor中不能直接获取传递过来的属性；需要constructor的参数接收一下；才可以获取；
        this.state={a:1}
    }
    hand=()=>{
        // setState 这个方法存在当前实例的原型链上；
        //this.setState({a:100})
        // 返回的对象会将原有的状态；
        this.setState((prevState)=>({a:prevState.a+1}))
    }
    render(){
        return <div onClick={this.hand}>{this.props.h}</div>
    }
}
// 属性和状态
// 只要这两个数据发生改变，视图就会随着刷新
// 属性： 从父组件传递过来的；由于react单向数据流，所以不能更改；
// 状态： 是自己私有的；是可以修改的；通过setState去更改状态；从而让视图刷新；

// setState({});

ReactDOM.render(<div>
    <Build n="1"/>
    <Con h="zfpx"/>
</div>, document.querySelector("#root"),function () {
    // 回调函数是当真实的DOM都渲染完毕之后执行的该函数；
    let box = document.getElementById("box");
    console.log(box);
})



