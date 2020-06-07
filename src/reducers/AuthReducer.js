import { LOGIN_USER } from '../ActionTypes'


const initialState = {
    token: null
}

export default AuthReducer = (state = initialState, action) => {
    if (action.type = LOGIN_USER) {
        return action.payload
    }
    return state
}