import React from "react";
import ReactDOM from "react-dom";
let  a;
function tick(){
    // 返回一个虚拟的DOm元素
    a = new Date().toLocaleString();
    /*let a = new Date().toLocaleString()
    ReactDOM.render(<div>{a}</div>,document.querySelector("#root"));*/
}
tick();
ReactDOM.render(<div>{a}</div>,document.querySelector("#root"));
// ReactDOM.render : 可以让视图重新渲染；
setInterval(tick,1000);
// DOM-diff : 先比较虚拟的DOM对象；如果发现有差异；浏览器会根据DOM-diff只改变发生变化的那部分；