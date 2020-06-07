import { LOGIN_USER_SUCCESS , LOGIN_USER_FAILURE } from '../ActionTypes'


const initialState = {
    token: "token redux"
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER_SUCCESS:
        case LOGIN_USER_FAILURE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}