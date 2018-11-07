import React from "react";
import {connect} from "react-redux";
import actions from "../store/actions/index"
class TodoHeader extends React.Component{
    constructor(){
        super();
    }
    addTodo=(e)=>{
        // 需要判断当前键盘是否是回车键；如果keyCode是13，则触发该新增的函数；
        if(e.keyCode===13&&e.target.value){
            this.props.add(e.target.value);
            e.target.value="";
        }
    }
    unfinish=()=>{
        return this.props.todos.filter((item)=>!item.isSelected).length;
    }
    render(){
        return <div>
            <h3>亲，还有{this.unfinish()}件事未完成</h3>
            <input type="text" className="form-control" onKeyUp={this.addTodo}/>
        </div>
    }
}
export default connect(state=>({...state.todo}),actions)(TodoHeader)