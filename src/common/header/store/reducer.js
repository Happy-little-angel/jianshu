import * as headerConstants from './constant'

import {fromJS} from 'immutable'
const headerReducersInitialState = fromJS({
    focus:false,
    searchItemList:[],
    totalPage:0,
    page:0,
    mouseInOrNot:false,
    login:false
})
export const headerReducers = (state = headerReducersInitialState, action) => {
    switch (action.type) {
        case headerConstants.Focus:
            return state.set("focus",true)
            case headerConstants.Blur:
                return state.set("focus",false)
                case headerConstants.GETSEARCHITEMLIST:
                    return state.set("searchItemList",action.data).set("totalPage",Math.ceil(action.data.length/10))
                    case headerConstants.MouseOver:
                        return state.set("mouseInOrNot",true);
                        case headerConstants.MouseOut:
                            return state.set("mouseInOrNot",false)
                            case headerConstants.PAGE:
                                return state.set("page",action.page)
                                case headerConstants.Login:
                                    return state.set("login",true)
                                    case headerConstants.LoginOut:
                                        return state.set("login",false)
        default:
            return state 
    }
}