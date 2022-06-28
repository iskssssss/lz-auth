import axios from 'axios'
import router from "@/router";
import {checkToken, getToken} from "@/tool/utils/TokenUtil";

const one = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT
});

// 添加请求拦截器
one.interceptors.request.use(function (config) {
    // 设置Token
    if (checkToken() === false) {
        config.headers[TOKEN_KEY] = getToken()
    }
    return config;
}, function (error) {
    return Promise.reject(error);
})

// 添加响应拦截器
one.interceptors.response.use(function (response) {
    const {data, status, statusText} = response;
    const {_value} = router.currentRoute;
    console.info(response)
    const fullPath = _value.fullPath;
    if (status >= 400 && status < 500) {
        router.replace({
            path: '/login',
            query: {redirect: fullPath}
        }).then(r => {
            console.info(r)
        })
    }
    const {code, message} = data;
    if (code === 462) {
        console.error(message);
        router.replace({
            path: '/login',
            query: {redirect: fullPath.startsWith("/logout?redirect=") ? fullPath.replace("/logout?redirect=", "") : fullPath}
        }).then(r => {
            console.info(r)
        })
    }
    return Promise.resolve(data)
}, function (error) {
    console.info(error)
    return Promise.reject(error);
});

export default one
