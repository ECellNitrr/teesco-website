import checkPropTypes from 'check-prop-types'

export const findByTestAtrr = (component,attr)=>{
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
}

export const checkProps = (component,expexctedProps)=>{
    const propsErr = checkPropTypes(component.propTypes,expexctedProps,'props',component.name);
}

export const baseURL = "http://159.65.158.103:5555/";