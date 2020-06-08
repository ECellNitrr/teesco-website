import { createStore, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import { persistStore } from 'redux-persist'


// reducers
import RootReducer from './RootReducer';

// add support redux extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create the store
export const store = createStore(
    RootReducer,
    composeEnhancers(applyMiddleware(ReduxThunk))
)
export const persistor = persistStore(store)
