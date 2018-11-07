import React from "react";
import ReactDOM from "react-dom";
import Counter from "./component/Counter";
import Compute from "./component/Compute"
ReactDOM.render(
    <div>
        <Counter/>
        <Compute/>
    </div>,
document.querySelector("#root")
);
