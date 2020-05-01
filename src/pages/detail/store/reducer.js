import {GETDETIALLIST} from './constants'
import {fromJS} from 'immutable'
const DetialInitialState = fromJS({
    arrlist:[]
})
export const Detial = (state = DetialInitialState, action) => {
    switch (action.type) {
        case GETDETIALLIST:
            return state.set("detial").set("arrlist",action.data)
        default:
            return state
    }
}