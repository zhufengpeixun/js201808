
import React from "react";
export default class Detail extends React.Component{
    constructor(){
        super();
    }
    render(){

        let id = this.props.match.params.id;
        let user = JSON.parse(localStorage.getItem("userList"));
        let current = user.filter((item)=>item.id==id);

        return <div>{current[0].user}</div>
    }
}