import { LOGIN_USER } from '../ActionTypes'


const initialState = {
    token: "token redux"
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}