import {GET, POST} from '@/api/base/Request.js'

const BASE_INTERFACE = '/api/auth';

/**
 * 登录
 * @param loginInfo 登录信息
 * @returns {Promise<unknown>} 响应结果
 */
export function login(loginInfo) {
    return POST(BASE_INTERFACE + "/login/login.do", loginInfo);
}

/**
 * 登出
 * @returns {Promise<unknown>} 响应结果
 */
export function logout() {
    return POST(BASE_INTERFACE + "/logout/logout.do", null);
}
