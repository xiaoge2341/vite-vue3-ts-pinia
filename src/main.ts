import { createApp } from 'vue'
import { pinia } from '@/store'
import router from './router'
import { i18n } from '@/plugins/i18n'

import App from './App.vue'
import './reset.less'


const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(i18n)
app.mount('#app')
