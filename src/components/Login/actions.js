import ApiClient from '../../utils/ApiClient'
import CustomHistory from '../../utils/CustomHistory'
import { storeUserToken } from '../../utils/Token'


// actions
export const UPDATE_INPUT_FIELD = 'UPDATE_INPUT_FIELD'
export const updateInputField = (fieldName, value) => ({
    type: UPDATE_INPUT_FIELD,
    payload: { fieldName, value },
});

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
            console.log(response.data)
            storeUserToken(response.data.token)
            CustomHistory.push('/orgs')
        }).catch(err => {
            // TODO: handle error cases

        }).finally(() => {
            dispatch(setLoading(false))
        })
}