import ApiClient from '../ApiClient'

import { LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from '../ActionTypes'

export const loginUser = () => dispatch => {
    ApiClient.post('/users/login/')
        .then(response => {
            console.log(response)
            dispatch({
                type: LOGIN_USER_SUCCESS,
                payload: { token: "awesome" }
            })
        }).catch(err => {
            const response = err.response.data;
            let errors = {}

            // convert err to required format
            for(let key in response){
                errors[key]=response[key].join('')
            }
            console.log(errors)
            
            dispatch({
                type: LOGIN_USER_FAILURE,
                payload: { token: "eerrr" }
            })
        })
}
