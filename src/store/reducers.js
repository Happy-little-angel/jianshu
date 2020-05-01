import {combineReducers} from 'redux-immutable'
import * as headerReducer from  './../common/header/store/reducer'
import * as homeReducer from './../pages/home/store/reducer'
import * as detialReducer from './../pages/detail/store/reducer'
export const AllReducers=combineReducers({
    header:headerReducer.headerReducers,
    home:homeReducer.homeReducer,
    detial:detialReducer.Detial
})