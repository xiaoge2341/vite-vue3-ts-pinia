import { createApp } from 'vue'
import { pinia } from '@/store'
import router from './router'
import App from './App.vue'
import './reset.less'


const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
