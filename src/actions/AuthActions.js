import { LOGIN_USER } from '../ActionTypes'


export const loginUserHandler = () => {
    console.log("clicked login btn")
    return {
        type: LOGIN_USER,
        payload: { token: "awesome" }
    }
}