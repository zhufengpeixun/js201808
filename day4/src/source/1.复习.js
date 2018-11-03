// react 是FaceBook(脸书) 一款JS框架 （构建用户界面）
// react 是MVC框架； 单向数据流；
// JSX : JS + XML ;React.createElement的语法糖；
/*
import React from "react";
class Element{
    constructor(type,attr,children){
        this.type = type;
        this.attr = attr;
        this.children =children;
    }
    ren(){
        // 把虚拟的DOM转成真实的DOM；
        // this ---> 实例
        let  ele = document.createElement(this.type);
        for(let key in this.attr){
            ele.setAttribute(key,this.attr[key]);
        }
        this.children.forEach((item,index)=>{
            let a = item instanceof Element ? item.render():document.createTextNode(item);
             ele.appendChild(a);
        })
        return ele;
    }
}
let  React = {
    createElement(type,attr,...children){
        return new Element(type,attr,children)
    }
};
let ReactDOM = {
    render(element,container){
        container.appendChild(element.ren())
    }
};
React.createElement("div",{a:1},12,React.createElement())*/

// 组件 ： 定义方式：
// 函数 : 定义一些静态的DOM
// class： 定义动态的DOM；
// 数据： props[外]  state 【内】； 这两个数据都会影响视图的更新；
// 动态： 如果数据是后端请求过来或者可变的都是动态的数据；
function Accer() {
    return <div></div>
}
// 类定义的组件： 有this，state,生命周期
class A extends React.Component{
    constructor(){
        super();
        this.state = {num:1}
    }
    hand=()=>{
        this.setState({num:10})
        //重新调用render方法；让视图刷新；异步；
        // 1.对象
        // 2. 函数
        // 3. 多个setState 会合并；
    }
    render(){
        return <div onClick={this.hand}>{this.props.count}</div>
    }
}
//<A count="1"/>

// 受控组件： onChange;只能通过修改状态来修改input元素的值；
// 生命周期：
// 实例的初始化： defaultProps---> constructor-->componentWillMount->render-->componentDidMount(可以操作DOM；);
// 数据更新阶段；
// shouldComponentUpdate : 经常用于react中的优化；
// nextProps,nextState
//  return boolean;会根据当前函数的返回值；判断是否向下继续进行；
//shouldComponentUpdate ---> componentWillUpdate--->render -->componentDidUpdate;


// 实例销毁
// componentWillUnmount
ReactDOM.unmountComponentAtNode(window.root)



