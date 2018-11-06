import React from "react";
import ReactDOM from "react-dom";
import Counter from "./component/Counter"
import Todo from "./component/Todo"
ReactDOM.render(
    <div>
        <Counter/>
        <Todo/>
    </div>,
document.querySelector("#root"));