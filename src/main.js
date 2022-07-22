import {createApp} from 'vue'
import router from '@/router'
import App from './App.vue'


const vue = createApp(App)
    .use(router)
    .mount('#app');
