import React from "react";
import ReactDOM from "react-dom";
import Counter from "./component/Counter";
import Compute from "./component/Compute"
import {Provider} from "react-redux";
import store from "./store/index"
ReactDOM.render(
    //Provider 只能有一个子元素；把store中的数据传给了当前{Provider的行间属性；
    <Provider store={store}>
        <div>
            <Counter/>
            <Compute/>
        </div>
    </Provider>,
document.querySelector("#root"));
