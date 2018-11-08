// react是单向数据流；父-->儿子--->孙子
// 父组件： childContextTypes   getChildContext
// 子组件： contextTypes
import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import PropTypes from "prop-types"
class App extends React.Component{
    constructor(){
        super();
        this.state={color:"red"}
    }
    // 定义上下文类型；
    static childContextTypes={
        color:PropTypes.string,
        setColor:PropTypes.func
    }
    getChildContext(){
        // 获取上下文；返回一个对象；
        return {color:this.state.color,setColor:this.setColor}
    }
    setColor=()=>{
        this.setState({
            color:"blue"
        })
    }
    render(){
        return <div>
            <Header/>
        </div>
    }
}
ReactDOM.render(<App/>, document.querySelector("#root"))


