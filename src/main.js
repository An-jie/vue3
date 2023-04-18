import { createApp } from 'vue'
import App from './App.vue'
// 2.定义好路由和导入
import router from './router'
// 3.导入pinia
import pinia from './stores'



// 1.第一个css样式的重置
import "normalize.css"
import "./assets/css/index.css"

createApp(App).use(router).use(pinia).mount('#app')
