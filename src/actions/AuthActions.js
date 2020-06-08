import ApiClient from '../utils/ApiClient'
import CustomHistory from '../utils/CustomHistory'
import { storeToken, eraseToken, getToken } from '../utils/Token'
import { makeErrorDict } from '../utils/APIUtils'


// actions types
export const LOGIN_USER_SPECIAL_ERROR = 'LOGIN_USER_SPECIAL_ERROR'
export const LOGIN_USER_INPUT_ERROR = 'LOGIN_USER_INPUT_ERROR'
export const LOGIN_FORM_SET_LOADING = 'LOGIN_FORM_SET_LOADING'
export const LOGIN_FORM_LOGIN_SUCCESS = 'LOGIN_FORM_LOGIN_SUCCESS'
export const LOGOUT_USER = 'LOGOUT_USER'


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
                ...initialState,
                loading: true
            }
        case LOGIN_USER_SPECIAL_ERROR:
            return {
                ...initialState,
                specialError: action.payload
            }
        case LOGIN_FORM_LOGIN_SUCCESS:
        case LOGOUT_USER:
            return initialState
        default:
            return state
    }
}


// actions
export const loginUser = (email, password) => dispatch => {
    dispatch({
        type: LOGIN_FORM_SET_LOADING,
    })

    ApiClient().post('/users/login/', {
        email, password
    })
        .then(response => {
            storeToken(response.data['token'])
            dispatch({
                type: LOGIN_FORM_LOGIN_SUCCESS,
            })
            CustomHistory.push('/searchOrgs')
        }).catch(err => {
            const { statusCode, errorDict } = makeErrorDict(err)

            switch (statusCode) {
                case 421:
                    alert("Please check your internet connection")
                    dispatch({
                        type: LOGIN_FORM_LOGIN_SUCCESS,
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
                default:
                    dispatch({
                        type: LOGIN_USER_INPUT_ERROR,
                        payload: errorDict
                    })
                    break
            }

        })
}

export const logoutUser = () => dispatch => {
    eraseToken()
    dispatch({
        type: LOGOUT_USER
    })
    CustomHistory.push('/login/')
}