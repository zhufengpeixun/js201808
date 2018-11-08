import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import {HashRouter as Router,Route,Switch,Redirect} from "react-router-dom";
import Home from "./container/Home";
import Profile from "./container/Profile";
import User from "./container/User";
import App from "./container/App"
ReactDOM.render(
    <Router>
        <App>
            <Switch>
                <Route path="/" exact={true} component={Home}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/user" component={User}/>
                <Redirect to="/"/>
            </Switch>
        </App>
    </Router>,
document.querySelector("#root")
)
;
