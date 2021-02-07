import { createStore, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import { combineReducers } from 'redux';

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel1 from "redux-persist/lib/stateReconciler/autoMergeLevel1";
import { persistStore } from "redux-persist";

import { LoginReducer } from '../components/Login/actions'
import { UserReducer } from './UserActions'

const userPersistConfig = {
    key: "root",
    storage,
    stateReconciler: autoMergeLevel1,
};

const RootReducer = combineReducers({
    user: persistReducer(userPersistConfig, UserReducer),
    login: LoginReducer,
})

// add support redux extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create the store
export const store = createStore(
    RootReducer,
    composeEnhancers(applyMiddleware(ReduxThunk))
)

export const persistedStore = persistStore(store)
