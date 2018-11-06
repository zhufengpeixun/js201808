import React from "react";
import ReactDOM from "react-dom";
import store from "../store/index"
import * as Types from "../store/action-types";
import actions from "../store/action/todo"
// 如果组件中的数据从store中获取，当store中的状态发生改变，组件不会随着更新；需要将store中获取的数据绑定给当前组件的私有状态；
class Todo  extends React.Component{
    constructor(){
        super();
        // 将store中的state给了当前组件的私有状态；
        this.state=store.getState()
    }
    addTodo=(e)=>{
        /*console.log(e);
        e.isDefaultPrevented();
        e.defaultPrevented =false;*/
        if(e.keyCode===13){
            // 当按enter回车键时，派发动作；更改store中的state；
            store.dispatch(actions.add(e.target.value));
            e.target.value="";
        }
    }
    componentDidMount(){
        // 订阅函数；需要获取store中最新的状态然后改变私有的状态；
        store.subscribe(()=>{
            this.setState({todo:store.getState().todo});
        })
    }
    render(){
        // 删除todo;
        return <div>
            <input type="text" onKeyUp={this.addTodo}/>
            {this.state.todo.map((item,index)=>{
                // 如果当前元素是数据循环而来；那么需要加上key属性；
                return <li key={index}>{item}</li>
            })}
        </div>
    }
}
ReactDOM.render(
<Todo/>,
document.querySelector("#root")
)

