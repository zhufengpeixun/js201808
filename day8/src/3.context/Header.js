import React from "react";
import Title from "./Title";
import PropTypes from "prop-types";
export default class Header extends React.Component{
    constructor(){
        super();
    }
    static contextTypes = {
        setColor:PropTypes.func
    }
    render(){
        return <div>
            <Title/>
            <button onClick={()=>{this.context.setColor()}}>改变颜色</button>
        </div>
    }
}
