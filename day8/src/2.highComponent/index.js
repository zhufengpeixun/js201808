// 高阶组件；
// 高阶函数：
/*function fn(a) {
    return function (b) {
        return function (c) {
            return a+b+c;
        }
    }
}
// 转成箭头函数；
let fn=a=>b=>c=>a+b+c;
fn(1)(2)(3);*/

import React from "react";
import ReactDOM from "react-dom";
import Username from "./Username";
import Password from "./Password";
ReactDOM.render(
    <div>
        <Username/>
        <Password/>
    </div>,
document.querySelector("#root"))
