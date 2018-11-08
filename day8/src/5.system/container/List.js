import React from "react";
import {Link} from "react-router-dom";
export default class List extends React.Component{
    constructor(){
        super();
        this.state = {users:JSON.parse(localStorage.getItem("userList"))}
    }
    render(){
        return <div>
            <table className="table table-bordered">
                <thead className="text-center">
                     <tr>
                         <td>id</td>
                         <td>用户名</td>
                     </tr>
                </thead>
                <tbody>
                {this.state.users.map((item,index)=>{
                    return <tr key={index}>
                        <td><Link to={`/user/list/${item.id}`}>{item.id}</Link></td>
                        <td>{item.user}</td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    }
}
