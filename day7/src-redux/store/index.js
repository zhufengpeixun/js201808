import {createStore} from "redux";
import reducer from "./reducer/Counter.js"
let store = createStore(reducer);
window._store = store;
export default store;