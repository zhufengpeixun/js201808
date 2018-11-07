import React from "react";
import {connect} from "react-redux";
import actions from '../store/actions/index'
class TodoBody extends React.Component{
    constructor(){
        super();
    }
    delete=(id)=>{
        this.props.delete(id)
    }
    change=(id)=>{
        this.props.change(id);
    }
    filterTodo=()=>{
        // 根据store中的type值过滤得到最新的数组；
        let todos;
        if(this.props.type==="all"){
            todos = this.props.todos;
        }
        if(this.props.type==="finish"){
            todos = this.props.todos.filter((item)=>item.isSelected)
        }
        if(this.props.type==="unfinish"){
            todos = this.props.todos.filter((item)=>!item.isSelected)
        }
        return todos;
    }
    render(){
        return <div>
            <ul className="list-group">
                {this.filterTodo().map((item,index)=>{
                    // 有react数据循环得来的react元素，都需要有一个key属性；
                    return <li className="list-group-item" key={index}>
                        <input type="checkbox" checked={item.isSelected} onChange={()=>{this.change(item.id)}}/>
                        {item.title}
                        <button className="btn btn-xs pull-right" onClick={()=>{this.delete(item.id)}}>&times;</button>
                    </li>
                })}
            </ul>
        </div>
    }
}
export default connect(state=>({...state.todo}),actions)(TodoBody)