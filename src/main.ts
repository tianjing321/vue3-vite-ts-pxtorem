import { createApp } from 'vue'
import App from './App.vue'
import 'amfe-flexible'
import './style.css'

import router from './router/index.js'

const app = createApp(App)
app.use(router)
app.mount('#app')
