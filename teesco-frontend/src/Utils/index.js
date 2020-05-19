import checkPropTypes from 'check-prop-types'
import {applyMiddleware,createStore} from 'redux';
import rootReducer from '../store/reducers/index'
import {middlewares} from '../store/createStore'

export const findByTestAtrr = (component,attr)=>{
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
}

export const checkProps = (component,expexctedProps)=>{
    const propsErr = checkPropTypes(component.propTypes,expexctedProps,'props',component.name);
    return propsErr;
}

export const testStore =(initialState)=>{
    const createStoreWithMiddlewares = applyMiddleware(...middlewares)(createStore)
    return createStoreWithMiddlewares(rootReducer,initialState)
}