import {fromJS} from 'immutable'
import * as homeConstant from './constant'
const nameInitialState = fromJS({
    ArticalList:[],
    tuijianList:[],
    authorList:[],
    page:0,
    show:false
})
export const homeReducer = (state = nameInitialState, action) => {
    switch (action.type) {
        case homeConstant.HOMELIST:
            return state.merge({
                ArticalList:fromJS(action.data.ArticalList),
                tuijianList:fromJS(action.data.tuijianList),
                authorList:fromJS(action.data.authorList)
            })
            case homeConstant.HOMEADDMORE:
                return state.merge({
                    ArticalList:state.get("ArticalList").concat(action.data.ArticalList),
                    page:action.page
                }) 
                case homeConstant.SHOW:
                    return state.set("home").set("show",true)
                    case homeConstant.HIDE:
                        return state.set("home").set("show",false)
        default:
            return state
    }
}