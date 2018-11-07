import React from "react";
export default class TodoHeader extends React.Component{
    constructor(){
        super();
    }
    render(){
        return <div>
            <h3>亲，还有几件事未完成</h3>
            <input type="text" className="form-control"/>
        </div>
    }
}