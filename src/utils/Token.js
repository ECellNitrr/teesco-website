export const TOKEN = "TOKEN"

export const storeUserToken = token => {
    return sessionStorage.setItem(TOKEN, token)
}

export const eraseUserToken = () => {
    return sessionStorage.removeItem(TOKEN)
}

export const getUserToken = () => {
    return sessionStorage.getItem(TOKEN)
}

export const isAuthenticated = () => {
    return sessionStorage.getItem(TOKEN) ? true : false
}
