import { combineReducers } from 'redux';
import { LoginReducer } from '../components/Login/actions'


export default combineReducers({
    login: LoginReducer,
})