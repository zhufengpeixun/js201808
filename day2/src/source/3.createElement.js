import React from "react";
// react: 是react的核心模块；
import ReactDOM from "react-dom";
// console.log(React);
// 提供和DOM相关的功能；会在window下新增一个ReactDOM属性，ReactDOM 属性下有一个render方法；render方法将react元素或组件插入到页面中；
let  arr = [{name:"陈展"},{name:"甘晓昱"},{name:"田运通"}];
// 将数组中的每一项循环到每一个li中；
// 在react中经常使用数组的map方法来遍历数据；创建出新的DOM来；
let  ul = <ul>
    {arr.map((item,index)=>{
        // item : 代表数组的每一项 index: 代表每一项的索引；
        let {name} = item;
        return <li key={index}>{name}</li>
    })}
</ul>;
let a = <div>123</div>;
// JSX 元素实际上是React.createElement的一个语法糖；
// React.createElement(type,prop,children)
// type： 当前的标签类型
// prop: 行间属性
// children : 子节点；从第三个实参开始，代表当前元素的子节点；
let b  = React.createElement("p",{attr:"123",y:"899"},"珠峰培训",React.createElement("span","",111),React.createElement("span",null,222),"你很帅");
console.log(a)
console.log(b);
ReactDOM.render(b,window.root);
