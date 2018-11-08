import React from "react";
import ReactDOM from "react-dom";
import {HashRouter,Route,Redirect,Switch} from "react-router-dom";
// 定义是静态组件；
// 切换路由显示不同的组件；
let  Home = ()=>(<div>Home</div>);
let  User = ()=>(<div>user</div>);
let  Personal = ()=>(<div>Personal</div>);
// 路由：
//HashRouter,Route 这都是一个组件；HashRouter 组件是包裹了所有的路由组件；
// HashRouter 只能有一个子组件；
// Route : 代表是一条路由；两个属性： path：代表当前的路由  component: 代表此路由对应的组件；
// Redirect :重定向组件；
// Switch : 只要匹配合适的路径，就不再向下匹配；
ReactDOM.render(
        <HashRouter>
            <div>
                {/*浏览器路由中包含此路径那么就会把其显示出来；*/}
                {/*exact: 精确匹配*/}
                <Switch>
                    <Route path="/"  exact={true} component={Home}/>
                    <Route path="/user" component={User}/>
                    <Route path="/personal" component={Personal}/>
                    <Redirect to="/"/>
                </Switch>
            </div>
        </HashRouter>
    ,
document.querySelector("#root"))
;
