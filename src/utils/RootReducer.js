import { combineReducers } from 'redux';
import LoginReducer from '../actions/LoginActions'


export default combineReducers({
    login: LoginReducer,
})