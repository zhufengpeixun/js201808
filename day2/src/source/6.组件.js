// 组件  ： 声明方式两种
// react 元素是组件的基本组成单位
// 第一种： 函数声明
// 1.组件的名字首字母必须大写；为了和JSX元素进行区分；
// 2.组件中必须返回一个顶级的react元素；
// 3.组件定义之后，可以向react元素一样使用；
import React from "react";
import ReactDOM from "react-dom";
function Build(props) {
    console.log(props);
    // props : 接收到是组件的行间属性；
    return  <div>{props.a}</div>
}
let obj1 = {a:100}
let obj2 = {a:2}
let obj3 = {a:3}
// 在组件传递数据时，可以是属性的方式；也可以采用对象展开的方式进行传递；
ReactDOM.render(<div>
    <Build {...obj1} v="1"/>
</div>,window.root);
// ReactDOM.render :
// 1.在render执行时，会首先判断当前元素是否是一个组件；
// 2.如果是一个组件，把组件的行间属性打包成一个对象传给当前组件的函数；并且让函数执行；
// 3. 函数执行会产生一个返回值；把返回值转换成真实的DOM，并且插入到根元素中；
