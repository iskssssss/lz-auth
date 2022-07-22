import {setCookie, getCookie, removeCookie} from "./CookieUtil.js"

export function checkToken() {
    const token = getToken();
    return token == null;

}

export function getToken () {
    return getCookie(TOKEN_COOKIE_KEY)
}

export function setToken (token) {
    return setCookie(TOKEN_COOKIE_KEY, token)
}

export function removeToken () {
    return removeCookie(TOKEN_COOKIE_KEY)
}

export function getDataFromJwtToken (token) {
    if (token == null) {
        token = getToken()
        if (token == null) {
            return null
        }
    }
    const data = token.split('.')[1];
    if (data == null) {
        return null
    }
    const resultMap = JSON.parse(window.atob(data))
    if (resultMap['id']){
        return resultMap
    }
    resultMap['id'] = resultMap['loginId']
    return resultMap
}
