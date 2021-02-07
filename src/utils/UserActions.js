

// actions
export const SET_USER_TOKEN = 'SET_USER_TOKEN'
export const setUserToken = (token) => ({
    type: SET_USER_TOKEN,
    payload: { token },
});


export const REMOVE_USER_TOKEN = 'REMOVE_USER_TOKEN'
export const removeUserToken = () => ({
    type: REMOVE_USER_TOKEN,
    payload: {},
});


// reducer
const initialState = {
    token: false
}

export const UserReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_USER_TOKEN:
            return {
                ...state,
                token: payload.token
            }
        case REMOVE_USER_TOKEN:
            return {
                ...state,
                token: false
            }
        default:
            return state
    }
}
