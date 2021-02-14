

export const setUserToken = (token) => {
    sessionStorage.setItem('token', token);
}

export const getUserToken = (token) => {
    return sessionStorage.getItem('token')
}

export const isUserLoggedIn = () => {
    return sessionStorage.getItem('token') ? true : false
}


// actions
export const SET_USER_ORGS = 'SET_USER_ORGS'
export const setUserOrgs = (orgs) => ({
    type: SET_USER_ORGS,
    payload: { orgs },
});


// selector
export const getFetchedUserOrgs = (state) => state.user.fetchedUserOrgs;
export const getUserOrgs = (state) => state.user.userOrg;


// reducer
const initialState = {
    fetchedUserOrgs: false,
    userOrgs: []
}

export const UserReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_USER_ORGS:
            return {
                ...state,
                orgs: payload.orgs
            }
        default:
            return state
    }
}
