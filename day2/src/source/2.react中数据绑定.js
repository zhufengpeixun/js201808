import React from "react";
import ReactDOM from "react-dom";
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
ReactDOM.render(ul,window.root);
// 1. 箭头函数中的this指向上一级作用域中的this；
// 2. 没有arguments
// 3. 不能作为构造函数，不能被new
// 4. 不能作为generator函数；














/*let a = arr.map((item,index)=>{

});// [ undefined, undefined, undefined, undefined, undefined ]
let b = arr.forEach((item,index)=>{
        return 6;
});// undefined
console.log(a);
console.log(b);*/

