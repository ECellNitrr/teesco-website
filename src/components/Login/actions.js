import ApiClient from '../../utils/ApiClient';
import { makeErrorDict } from '../../utils/ApiUtils';
import CustomHistory from '../../utils/CustomHistory';
import { storeUserToken } from '../../utils/Token';

//actions
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const setLoginError = (error) => ({
    type: LOGIN_ERROR,
    payload: { error }
})

export const CLEAR_LOGIN_ERROR = 'CLEAR_LOGIN_ERROR';
export const clearLoginError = (error) => ({
    type: CLEAR_LOGIN_ERROR,
    payload: { error }
})


export const SET_LOADING = 'SET_LOADING'
export const setLoading = (loading) => ({
    type: SET_LOADING,
    payload: { loading },
});


export const USER_LOGIN = 'USER_LOGIN'
export const userLogin = () => ({
    type: USER_LOGIN,
    payload: {},
});


// selectors
export const getUsername = (state) => state.login.username
export const getPassword = (state) => state.login.password
export const getLoading = (state) => state.login.loading
export const getError = (state) => state.login.error
 


// reducer
const initialState = {
    username: '',
    password: '',
    loading: false,
    error: null,
    specialError: null
}

export const LoginReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_LOADING:
            return {
                ...state,
                loading: payload.loading
            }
        case LOGIN_ERROR:
            return {
                ...state,
                error: payload.error
            }
        case CLEAR_LOGIN_ERROR:
            return {
                ...state,
                error: null,
            }
        default:
            return state
    }
}



// thunks
export const loginHandler = (email, password) => (dispatch) => {
    dispatch(setLoading(true))

    ApiClient().post('/users/login/', {
        email, password
    })
        .then(response => {
            storeUserToken(response.data.token)
            CustomHistory.push('/orgs')
        }).catch(err => {
            //Create a error then remove after 3 seconds
            const error = makeErrorDict(err);
            dispatch(setLoginError(makeErrorDict(err)));
            setTimeout(() => dispatch(clearLoginError(null)), 3000)
        }).finally(() => {
            dispatch(setLoading(false))
        })
}