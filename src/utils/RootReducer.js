import { combineReducers } from 'redux';
import AuthReducer from '../actions/AuthActions'


export default combineReducers({
    auth: AuthReducer,
})