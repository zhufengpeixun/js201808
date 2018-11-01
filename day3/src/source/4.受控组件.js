import React from "react";
import ReactDOM from "react-dom";

class User  extends React.Component{
    constructor(){
        super();
        this.state={number:100}
    }
    change=(m,e)=>{
        // 受控组件如果想更改内容；必须通过更改状态来影响内容；
        //console.log(e.target.value);
        // 当事件触发的时刻，那么事件对象是存在的；当方法执行完成，那么会被赋默认值null；
        // 受控组件一般是针对表单元素的；
        // onkeydown: 键盘按下获取input框的值，获取的是上一次的value
        // onkeyup ： 键盘按下之后改变的值；
        // onchange  :键盘按下之后改变的值；
        console.log(e);
        this.setState({number:e.target.value})
    }
    render(){
        //组件的数据依赖于状态的；
        return <div>
            <input type="text" value={this.state.number}  onChange={(e)=>{this.change(5,e)}}/>
            {this.state.number}
        </div>
    }
}

ReactDOM.render(
<User/>,
document.querySelector("#root")
)
;