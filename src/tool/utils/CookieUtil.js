import Cookies from 'js-cookie'

/**
 * 设置Cookie
 * @param key 键
 * @param value 值
 * @returns {*} 结果
 */
export function setCookie (key, value) {
    return Cookies.set(key, value)
}

/**
 * 获取Cookie
 * @param key 键
 * @returns {*} 值
 */
export function getCookie (key) {
    return Cookies.get(key)
}

/**
 * 移除Cookie
 * @param key 键
 * @returns {*} 结果
 */
export function removeCookie (key) {
    return Cookies.remove(key)
}
