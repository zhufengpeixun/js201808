import React from "react";
export default class App extends React.Component{
    constructor(){
        super();
    }
    render(){
        return <div>
            <ul className="nav nav-pills">
                <li role="presentation" className="active"><a href="#">全部任务</a></li>
                <li role="presentation"><a href="#">已完成</a></li>
                <li role="presentation"><a href="#">未完成</a></li>
            </ul>
        </div>
    }
}