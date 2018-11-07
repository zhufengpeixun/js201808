import React from "react";
import TodoHeader from "./TodoHeader";
import TodoBody from "./TodoBody";
import TodoFooter from "./TodoFooter";
export default class App extends React.Component{
    constructor(){
        super();
    }
    render(){
        return <div className="container">
            <div className="row">
                {/*col*/}
                {/*bootstrap: 栅格化布局；默认12列；col-md-2  col-lg-2  col-xs-2  常用的颜色： success  danger  default   primary warning*/}
                <div className="col-md-6 col-md-offset-3">
                    <div className="panel panel-danger">
                        <div className="panel-heading">
                            <TodoHeader/>
                        </div>
                        <div className="panel-body">
                            <TodoBody/>
                        </div>
                        <div className="panel-footer">
                            <TodoFooter/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
