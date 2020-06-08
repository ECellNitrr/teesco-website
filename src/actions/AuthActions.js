import ApiClient from '../ApiClient'
import { store } from '../createStore'
import { push } from 'react-router-redux'

import { LOGIN_USER_INVALID_CREDENTIALS, LOGIN_USER_FAILURE } from '../ActionTypes'

export const loginUser = (email, password) => dispatch => {
    ApiClient.post('/users/login/', {
        email, password
    })
        .then(response => {
            console.log(response.data)
            store.dispatch(push('/home'))

        }).catch(err => {
            const response = err.response.data;
            let errors = {}


            // convert err to required format
            for (let key in response) {
                errors[key] = response[key].join('')
            }

            dispatch({
                type: LOGIN_USER_FAILURE,
                payload: errors
            })
        })
}
