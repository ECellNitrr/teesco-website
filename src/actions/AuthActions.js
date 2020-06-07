import { LOGIN_USER } from '../ActionTypes'


export const login_user_handler = () => {
    return {
        type: LOGIN_USER,
        payload: { token: "awesome" }
    }
}