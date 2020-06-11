import { createStore, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'


// reducers
import RootReducer from './RootReducer';

// add support redux extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create the store
export const store = createStore(
    RootReducer,
    composeEnhancers(applyMiddleware(ReduxThunk))
)
