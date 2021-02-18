export const TOKEN = "TOKEN"

export const storeUserToken = token => {
    return localStorage.setItem(TOKEN, token)
}

export const eraseUserToken = () => {
    return localStorage.removeItem(TOKEN)
}

export const getUserToken = () => {
    return localStorage.getItem(TOKEN)
}

export const isAuthenticated = () => {
    return localStorage.getItem(TOKEN) ? true : false
}
