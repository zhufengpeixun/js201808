import React from "react";
import ReactSwipe from 'react-swipe';
export default class HomeSlider extends React.Component{
    constructor(){
        super();
    }
    render(){
        //console.log(this.props.sliders);
        return <div className="home-swipe">
            <ReactSwipe className="carousel" swipeOptions={{continuous: true,auto:2000}} key={this.props.sliders.length}>
                {/*key : 可以轮播图重新渲染的属性；*/}
                {this.props.sliders.map((item,index)=>{
                    return <div key={index}>
                        <img src={item} alt=""/>
                    </div>
                })}
            </ReactSwipe>
        </div>
    }
}
