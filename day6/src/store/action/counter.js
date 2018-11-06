
import * as Types from "../action-types";
export default {
    add(m){
        return {type:Types.ADD_COUNT,m:m}
    },
    min(n){
        return {type:Types.MIN_COUNT,n}
    }
}