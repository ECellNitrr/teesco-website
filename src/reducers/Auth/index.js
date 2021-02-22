import * as authTypes from "../../actions/Auth/types";

const initialState = {
    isAuthenticated: null,
    loading: false,
    error: [],
    user: null
};

export default function (state = initialState,  action) {
    const { type, payload } = action;
    switch(type){
        case authTypes.SET_LOADING:
            return {
                ...state,
                loading: payload,
            }
        case authTypes.LOGIN_SUCCESS:
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }
        
        case authTypes.LOAD_USER:
            return {
                ...state,
                user: payload
            }
        
        case authTypes.LOGIN_ERROR:
        case authTypes.LOAD_USER_ERROR:
            return {
                ...state,
                isAuthenticated: false,
                loading: false,
                user: null,
            }
                
        case authTypes.SET_AUTH_ERROR:
            return {
                ...state,
                error: [...state.error, payload],
            }
        case authTypes.REMOVE_AUTH_ERROR:
            return {
                ...state,
                error: state.error.filter((error) => error.id !== payload)
            }
        default:
            return state;
    }
}
