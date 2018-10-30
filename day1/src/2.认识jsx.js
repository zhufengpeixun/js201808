
// JSX : JS + XML 的组合； 可以在JS中编写html元素；

import React from "react";
import ReactDOM from "react-dom";
import "./3.index.css";
// render : 是ReactDOM中的一个函数;
// 将<div>123</div>这个元素放进全局下id名是root的元素中；
//1.  JSX元素不是一个真实的DOM；JSX元素是一个虚拟的DOM元素；是一个对象数据类型的；
// 2. JSX元素必须被一个闭合的标签包裹起来；
// 3. JSX元素中采用{}进行获取值的操作；
// 4. JSX 元素取值时，{}不能放对象；但是可以放数组;如果放的是数组的话；会把数组每一项转换成字符串进行连接，一起放进元素中；
// 5.如果小括号中的值是true\false\null\undefined;那么这些值将不再显示；
// 6.JSX中的{} 支持三元表达式；
// 7.支持函数的执行结果；
// 8.style 不支持字符串的类型；需要转成{{}}；
// 9.如果是class===> className   for===> htmlFor
function b() {
    //return  <div>6666</div>
    //return  100;
}
let  zfpx = 201808;
let obj = {a:"大家好"};
let  arr = [1,2,3,4,"a"];
let a = <div  className="container"  a="b">hello<div>{arr[4]}</div></div>;
console.log(a);
// render 方法
// 1. 参数1是虚拟的DOM元素；参数2是将要挂载的元素；
// 2. render方法是将虚拟的DOM元素先转换成真实的DOM元素
// 3. 然后将真实DOM元素注入到root根元素中；
ReactDOM.render(a,window.root);