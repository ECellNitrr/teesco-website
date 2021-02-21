import {
    SET_LOADING,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from "../../actions/Auth/types";

const initialState = {
    isAuthenticated: null,
    loading: false,
    user: null,
};

export default (state = initialState,  action) => {
    const { type, payload } = action;
    switch(type){
        case SET_LOADING:
            return {
                ...state,
                loading: true,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }
        case LOGIN_FAIL:
            return {
                ...state,
                isAuthenticated: false,
                loading: false,
                user: null,
            } 
    }
}