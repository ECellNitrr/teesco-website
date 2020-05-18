import {createStore,applyMiddleware} from 'redux'
import RootReducer from './reducers/rootReducer';
import Logger from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

export const middlewares =[ReduxThunk,Logger]

export const store = createStore(RootReducer,composeWithDevTools(applyMiddleware(...middlewares)))