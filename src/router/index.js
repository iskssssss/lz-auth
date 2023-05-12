import {createRouter, createWebHistory} from 'vue-router';
import {checkToken} from "@/tool/utils/TokenUtil";

export const routes = [
    {
        path: '/',
        component: () => import('@/views/Home'),
        meta: {
            auth: true
        }
    },
    {
        path: '/login',
        name: '登录',
        component: () => import('@/views/Login'),
        meta: {
            auth: false
        }
    },
    {
        path: '/logout',
        component: () => import('@/views/Logout'),
        meta: {
            auth: true
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// 页面访问拦截器-之前
router.beforeEach((to, from, next) => {
    const {path, fullPath, meta} = to;
    const {auth} = meta;
    const isToken = checkToken();
    if (auth === true && isToken === true) {
        next({
            path: '/login',
            query: {redirect: fullPath === "/logout" ? "/" : fullPath}
        })
        return
    }
    if (path === '/login' && isToken === false) {
        next({path: '/'})
        return
    }
    next()
})

export default router
