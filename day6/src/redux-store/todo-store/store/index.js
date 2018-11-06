import {createStore} from "redux";
import reducer from "./reducer/Todo"
let store = createStore(reducer);
export default store;
