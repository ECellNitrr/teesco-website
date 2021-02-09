import { setUserOrgs } from '../PrivateRoute/actions'
import ApiClient from '../../utils/ApiClient'

// actions


// selector


// reducer
const initialState = {
}

export const UserGaurdReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        default:
            return state
    }
}


// thunks

export const fetchUserOrgsHandler = () => (dispatch) => {

    ApiClient().get('/users/org/')
        .then(response => {

        }).catch(err => {
            // TODO: handle error cases

        }).finally(() => {
        })
}