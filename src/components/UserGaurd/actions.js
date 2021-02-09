

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


// selector
export const getFetchedUserOrgs = (state) => state.user.fetchedUserOrgs;
export const getUserOrgs = (state) => state.user.userOrg;
export const getToken = (state) => state.user.token;
export const getUserLoggedIn = (state) => state.user.token ? true : false;


// reducer
const initialState = {
    token: false,
    fetchedUserOrgs: false,
    userOrgs: []
}

export const UserGaurdReducer = (state = initialState, { type, payload }) => {
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
