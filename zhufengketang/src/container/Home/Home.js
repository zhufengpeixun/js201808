import React from "react";
import HomeHeader from "./HomeHeader";
import HomeSlider from "./HomeSlider";
import "./index.less"
import {connect} from "react-redux";
import actions from "../../store/action/home"
 class Home extends React.Component{
    constructor(){
        super();
    }
    componentDidMount(){
        // 当组件加载完毕，开始请求数据；
        this.props.getSlider();
    }
    render(){
        return <div>
            <HomeHeader  change={this.props.changeType}/>
            <div className="home-content">
                <HomeSlider sliders={this.props.home}/>
            </div>
        </div>
    }
}
export default connect(state=>({...state.home}),actions)(Home)