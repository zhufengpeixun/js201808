import React from "react";
import Local from "./Local"
class Username extends React.Component{
    /*constructor(){
        super();
        this.state={user:""}
    }
    componentDidMount(){
        let user = localStorage.getItem("username");
        this.setState({user:user});
    }*/
    render(){
        console.log(this.props);
        return <div>
            <input type="text" value={this.props.username} onChange={()=>{}}/>
        </div>
    }
}
export default  Local("username")(Username)