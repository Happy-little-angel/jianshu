import * as homeConstant from './constant'
import axios from 'axios'

export const getHomeList=()=>{
    return dispatch=>{
        axios.get('./data/home.json')
        .then(data=>{
            console.log("more",data);
            dispatch({
                type:homeConstant.HOMELIST,
                data:data.data
            })
        })
    }
}

export const homeaddmore=(page)=>{
    console.log("---------",page)
    page=page+1;
    return dispatch=>{
        axios.get('./data/homeaddmore.json?page='+page)
        .then(data=>{
            console.log(data);
            dispatch({
                type:homeConstant.HOMEADDMORE,
                data:data.data,
                page:page
            })
        }) 
    }
}
export const show=()=>{
    return {
        type:homeConstant.SHOW
    }
}
export const hide=()=>{
    return {
        type:homeConstant.HIDE
    }
}