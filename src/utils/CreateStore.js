import { createStore, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import { combineReducers } from 'redux';

import AuthReducer from '../reducers/Auth';
import { UserReducer } from '../components/PrivateRoute/actions'

const RootReducer = combineReducers({
    user: UserReducer,
    auth: AuthReducer
})

const initialState = {};

// add support redux extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create the store
export const store = createStore(
    RootReducer,
    initialState,
    composeEnhancers(applyMiddleware(ReduxThunk))
)

