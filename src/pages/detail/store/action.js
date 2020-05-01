import {GETDETIALLIST} from './constants'
import axios from 'axios'
export const getDetialList=()=>{
    return dispatch=>{
        axios.get("/data/detial.json")
        .then(data=>{
            console.log(data);
            dispatch({
                type:GETDETIALLIST,
                data:data.data.arrlist
            })
        })
    }
}