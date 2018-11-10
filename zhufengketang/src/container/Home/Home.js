import React from "react";
import HomeHeader from "./HomeHeader";
import "./index.less"
import {connect} from "react-redux";
import actions from "../../store/action/home"
 class Home extends React.Component{
    constructor(){
        super();
    }
    render(){
        return <div>
            <HomeHeader  change={this.props.changeType}/>
        </div>
    }
}
export default connect(state=>({...state.home}),actions)(Home)