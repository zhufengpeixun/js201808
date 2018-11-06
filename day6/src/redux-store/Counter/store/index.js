// 用来创建store；并且返回store；

import {createStore} from "redux";
import reducer from "./reducer/Counter"
let store = createStore(reducer);
export default store;