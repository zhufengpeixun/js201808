import React from "react";
import {HashRouter as Router,Route,Switch,Link} from "react-router-dom";
import Add from "./Add"
import List from "./List";
import Detail from "./Detail"
export default class User extends React.Component{
    constructor(){
        super();
    }
    render(){
        return <div>
            <div className="col-md-3">
                <div className="nav">
                    <li><Link to="/user/add">添加用户</Link></li>
                    <li><Link to="/user/list">用户列表</Link></li>
                </div>


            </div>
            <div className="col-md-9">
                <Router>
                    <Switch>
                        <Route path="/user/add" component={Add}/>
                        <Route path="/user/list"  exact={true} component={List}/>
                        <Route path="/user/list/:id" component={Detail}/>
                    </Switch>
                </Router>
            </div>
        </div>
    }
}