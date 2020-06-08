export const TOKEN = "TOKEN"

export const storeToken = token => {
    return localStorage.setItem(TOKEN, token)
}

export const eraseToken = () => {
    return localStorage.removeItem(TOKEN)
}

export const getToken = () => {
    return localStorage.getItem(TOKEN)
}

export const isAuthenticated = () => {
    return localStorage.getItem(TOKEN) ? true : false
}