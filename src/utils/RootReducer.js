import { combineReducers } from 'redux';
import AuthReducer from '../actions/AuthActions'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['token', 'user']
}


const persistedAuthReducer = persistReducer(persistConfig, AuthReducer)


export default combineReducers({
    auth: persistedAuthReducer,
})