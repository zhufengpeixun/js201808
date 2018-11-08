import React from "react";
export default class Add extends React.Component{
    constructor(){
        super();
    }
    addUser =()=>{
        // [object  object]
        let userList = JSON.parse(localStorage.getItem("userList"))||[];
        userList.push({id:Math.random(),user:this.val.value});
        localStorage.setItem("userList",JSON.stringify(userList));
        this.val.value="";
        // push ： 直接改变当前组件的路由；
        // go() : 去上一级；下一级
        // forWard : 向前
        // goBack: 向后；
        this.props.history.push("/user/list")
    }
    render(){
        console.log(this.props);
        // 如果当前组件是通过Route渲染出来的；那么当前组件的实例的props属性上会有三个属性；match  history   location;
        return <div>
            {/*form-control: 让当前input宽度百分百*/}
            <input type="text" className="form-control" ref={(x)=>this.val=x}/>
            <button className="btn" onClick={this.addUser}>添加用户</button>
        </div>
    }
}
