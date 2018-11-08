import React from "react";
import Local from "./Local"
class Password extends React.Component{
    /*constructor(){
        super();
        this.state={word:""}
    }
    componentDidMount(){
        let word = localStorage.getItem("password");
        this.setState({word:word});
    }*/
    render(){
        return <div>
            <input type="text" value={this.props.password} onChange={()=>{}}/>
        </div>
    }
}
export default  Local("password")(Password)

