import React from "react";
import Nav from "../component/Nav"
export default class App extends React.Component{
    constructor(){
        super();
    }
    render(){
        return <div>
                <Nav/>
                {this.props.children}
        </div>
    }
}
