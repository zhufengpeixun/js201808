import {createStore} from "redux";
import reducer from "./reducer/index"
let store = createStore(reducer);//{counter:{},todo:{}}
export default store;
