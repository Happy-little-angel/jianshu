import {createStore,applyMiddleware} from 'redux'
import { AllReducers } from './reducers'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
const store=createStore(AllReducers,composeWithDevTools(applyMiddleware(thunk)));
export default store;