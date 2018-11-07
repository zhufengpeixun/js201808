import React from "react";
import {connect} from "react-redux";
class TodoBody extends React.Component{
    constructor(){
        super();
    }
    render(){
        return <div>
            <ul className="list-group">
                {this.props.todos.map((item,index)=>{
                    // 有react数据循环得来的react元素，都需要有一个key属性；
                    return <li className="list-group-item" key={index}>
                        <input type="checkbox" checked={item.isSelected}/>
                        {item.title}
                        <button className="btn btn-xs pull-right">&times;</button>
                    </li>
                })}
            </ul>
        </div>
    }
}
export default connect(state=>({...state.todo}))(TodoBody)