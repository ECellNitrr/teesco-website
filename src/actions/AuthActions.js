import ApiClient from '../utils/ApiClient'
import customHistory from '../utils/CustomHistory'
import { makeErrorDict } from '../utils/APIUtils'


// actions types
export const LOGIN_USER_SPECIAL_ERROR = 'LOGIN_USER_SPECIAL_ERROR'
export const LOGIN_USER_INPUT_ERROR = 'LOGIN_USER_INPUT_ERROR'
export const LOGIN_FORM_SET_LOADING = 'LOGIN_FORM_SET_LOADING'
export const LOGIN_FORM_STOP_LOADING = 'LOGIN_FORM_STOP_LOADING'


// reducer
const initialState = {
    loading: false,
    error: null,
    specialError: null
}

export default (state = initialState, action) => {
    switch (action.type) {

        case LOGIN_USER_INPUT_ERROR:
            return {
                ...initialState,
                error: action.payload,
            }
        case LOGIN_FORM_SET_LOADING:
            return {
                initialState,
                loading: true
            }
        case LOGIN_FORM_STOP_LOADING:
            return initialState
        case LOGIN_USER_SPECIAL_ERROR:
            return {
                ...initialState,
                specialError: action.payload
            }
        default:
            return state
    }
}


// actions
export const loginUser = (email, password) => dispatch => {
    dispatch({
        type: LOGIN_FORM_SET_LOADING,
    })

    ApiClient.post('/users/login/', {
        email, password
    })
        .then(response => {
            customHistory.push('/home')
            dispatch({ type: LOGIN_FORM_STOP_LOADING })
        }).catch(err => {
            const { statusCode, errorDict } = makeErrorDict(err)

            switch (statusCode) {
                case 421:
                    alert("Please check your internet connection")
                    dispatch({
                        type: LOGIN_FORM_STOP_LOADING,
                    })
                    break
                case 401:
                case 404:
                    dispatch({
                        type: LOGIN_USER_SPECIAL_ERROR,
                        payload: errorDict['detail']
                    })
                    break
                case 400:
                    dispatch({
                        type: LOGIN_USER_INPUT_ERROR,
                        payload: errorDict
                    })
                    break
            }

        })
}
