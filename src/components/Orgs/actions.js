import ApiClient from '../../utils/ApiClient'
import History from '../../utils/CustomHistory'

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
            const orgs = response.data;
            if (orgs.length > 0) {
                History.push(`/orgs/${orgs[0].route_slug}/dashboard`)
            } else {
                History.push(`/orgs/search`)
            }
        }).catch(err => {
            // TODO: handle error cases

        }).finally(() => {
        })
}