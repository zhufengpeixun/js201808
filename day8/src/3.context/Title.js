import React from "react";
import PropTypes from "prop-types"
export default class Title extends React.Component{
    constructor(){
        super();
    }
    static contextTypes={
        // 接收上下文数据
        color:PropTypes.string
    }
    render(){
        console.log(this.context);
        return <div style={{color:this.context.color}}>今天周四晴天</div>
    }
}
