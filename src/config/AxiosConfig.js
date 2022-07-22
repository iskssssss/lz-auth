import axios from 'axios'
import router from "@/router";
import {checkToken, getToken, removeToken} from "@/tool/utils/TokenUtil";
import {decryptBase64, encryptBase64} from "@/tool/utils/CryptoUtil"

const one = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
    withCredentials: true
});

// 添加请求拦截器
one.interceptors.request.use(function (config) {
    // 处理get请求
    if (config.method === 'get') {
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    // 处理post请求
    if (config.method === 'post' || config.method === 'put' || config.method === 'delete') {
        // 加密处理
        if (ENCODE_SWITCH && config.data) {
            config.headers['encrypt'] = true
            const encryptData = encryptBase64(config.data);
            if (CIPHER_SAVE_KEY) {
                const requestData = {}
                requestData[CIPHER_SAVE_KEY] = encryptData;
                config.data = requestData
            } else {
                config.data = encryptData
            }
        }
    }
    // 设置认证Token
    if (checkToken() === false) {
        config.headers[TOKEN_HEADER_KEY] = getToken()
    }
    return config;
}, function (error) {
    return Promise.reject(error);
})

// 添加响应拦截器
one.interceptors.response.use(function (response) {
    const {data, status, headers} = response;
    const {_value} = router.currentRoute;
    const fullPath = _value.fullPath;
    console.info(headers)
    let finalData = headers['encrypt'] === 'true' ? decryptBase64(data) : data
    if (headers['content-type'].indexOf("json") && typeof finalData !== "object") {
        Log.info(finalData);
        finalData = JSON.parse(finalData)
        Log.info(finalData);
    }
    if (status >= 400 && status < 500) {
        router.replace({path: '/login', query: {redirect: fullPath}}).then(r => {})
    }
    const {code} = finalData;
    if (code === 462) {
        removeToken()
        router.replace({
            path: '/login',
            query: {redirect: fullPath.startsWith("/logout?redirect=") ? fullPath.replace("/logout?redirect=", "") : fullPath}
        }).then(r => {})
    }
    return Promise.resolve(finalData)
}, function (error) {
    Log.error(error);
    return Promise.reject(error);
});
export default one
