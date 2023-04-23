import { createApp } from 'vue'
import App from './App.vue'
import './css/main.css'
import router from './router'
import { createPinia } from 'pinia'

createApp(App).use(router).use(createPinia()).mount('#app')
