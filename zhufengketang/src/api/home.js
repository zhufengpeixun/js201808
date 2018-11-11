// 首页发的请求
import {get} from "./index.js";
export function getSliders() {
    return get("/getSliders")
}