import { createStore, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'

// reducers
import RootReducer from './RootReducer';

// creating the redux store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
    RootReducer,
    composeEnhancers(applyMiddleware(ReduxThunk))
)