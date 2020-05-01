import * as headerConstants from './constant'
import axios from 'axios'
export const focusFun=()=>{
    return{
        type:headerConstants.Focus
    }
}
export const blurFun=()=>{
    return{
        type:headerConstants.Blur
    }
}
export const getSearchItemList=()=>{
    return dispatch =>{
        axios.get('./data/header.json')
        .then(data=>{
            console.log(data);
            dispatch({
                type:headerConstants.GETSEARCHITEMLIST,
                data:data.data.data
            })
        })
        .catch(e=>{
            console.log(e)
        })
    }
}

export const changePage=(page,totalPage,icon)=>{
    var deg=icon.style.transform.replace(/[^0-9]/ig," ");
    if(deg){
        deg=parseInt(deg)
    }else{
        deg=0
    }
    icon.style.transform="rotate("+(deg+360)+"deg)";
    if(page<totalPage-1){
        page=page+1;
    }else{
        page=0
    }
    return {
        type:headerConstants.PAGE,
        page:page
    }
}
export const mouseIn=()=>{
    return {
        type:headerConstants.MouseOver
    }
}
export const mouseOut=()=>{
    return {
        type:headerConstants.MouseOut
    }
}
export const loginIn=()=>{
    return dispatch=>{
        axios.get("/data/login.json")
        .then(data=>{
            dispatch({
                type:headerConstants.Login
            })
        })
    }
}
export const loginOut=()=>{
    return{
        type:headerConstants.LoginOut
    }
}