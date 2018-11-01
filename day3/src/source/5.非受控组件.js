import React from "react";
import ReactDOM from "react-dom";
class  User extends React.Component{
    constructor(){
        super();
        this.state={sum:0}
    }
    changeSum =()=>{
        // 利用了事件的冒泡传播；触发div身上的onChange事件；
        /*console.log(100);
        console.log(this.refs.a);*/
        this.setState({sum:Number(this.refs.a.value)+Number(this.refs.b.value)})
    }
    render(){
        return  <div onChange={this.changeSum}>
            <input type="text" ref="a"/> +
            <input type="text" ref="b"/> =
            {this.state.sum}
        </div>
    }
}
ReactDOM.render(
<User/>,
document.querySelector("#root")
)
;
