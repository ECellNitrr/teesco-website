import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import AuthReducer from '../actions/AuthActions'


export default combineReducers({
    // for routing in action purposes
    routing: routerReducer,
    // custom reducers 
    auth: AuthReducer,
})