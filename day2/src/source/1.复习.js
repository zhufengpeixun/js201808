//  组件化的优势： 可复用 可组合 可维护；
// JSX 语法； JS+XMl;可以在JS中编写html的一种语法；
// 只有react支持JSX语法
//
let b = {width:"100px"}
let  a = <div style={b}></div>;
// a 是一个变量；存储的是一个JSX元素；也叫react元素；也叫虚拟的DOM元素；
// 1.用大括号来取值
// 2.{} 中不允许直接放对象
// 3. true\false\null\undefined都不显示任何内容
// 4.数组每一项会转成字符串拼接到一起
// 5. 支持三元表达式
// 6.可以放函数的返回值；
// 7. style={{}}
// 8. class==> className  for===>htmlFor
// 9. JSX元素必须被一个闭合的标签包裹起来；只能由一个根元素；

// JSX元素就是一个虚拟的DOM对象；

